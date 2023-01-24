import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/pages/Post/PostBody'
import Header from '../../components/common/Header'
import PostHeader from '../../components/pages/Post/PostHeader'
import MainLayout from '../../components/layouts/MainLayout'
import { getPostBySlug, getPosts } from '../../services/api'
import PostTitle from '../../components/pages/Post/PostTitle'
import Head from 'next/head'
import markdownToHtml from '../../services/markdownToHtml'
import type PostType from '../../interfaces/Post'
import { FC } from 'react'
import PostComments from 'components/pages/Post/PostComments'
import { InferGetStaticPropsType } from 'next'
import PostComment from 'interfaces/PostComment'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { createComment, getComments } from 'services/comments'
import CommentForm from 'components/pages/Post/CommentForm'
import CommentSignIn from 'components/pages/Post/CommentSignIn'
import { useAuth } from 'hooks/useAuth'

const Post: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ post }) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const auth = useAuth()

  const { data: comments } = useQuery<PostComment[]>(
    ['comments', post.slug],
    () => getComments(post.slug)
  )
  const { mutate } = useMutation(createComment, {
    onSuccess: () => {
      queryClient.invalidateQueries(['comments', post.slug])
    }
  })

  const handleComment = (message: string) => {
    mutate({
      slug: post.slug,
      message
    })
  }

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <MainLayout>
      <div className="container mx-auto px-5">
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{`${post.title} | SketchyBlog`}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              <PostBody content={post.content} />
              <PostComments comments={comments} />
              {auth ? (
                <CommentForm onComment={handleComment} />
              ) : (
                <CommentSignIn />
              )}
            </article>
          </>
        )}
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async ({ params }) => {
  const post = getPostBySlug(params.slug as string, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      } as PostType
    }
  }
}

export async function getStaticPaths() {
  const posts = getPosts(['slug'])

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}

export default Post
