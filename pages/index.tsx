import MoreStories from 'components/pages/Main/MoreStories'
import HeroPost from 'components/pages/Main/HeroPost'
import Intro from 'components/common/Intro'
import MainLayout from 'components/layouts/MainLayout'
import { getPosts } from 'services/api'
import Head from 'next/head'

import Post from 'interfaces/Post'
import { FC } from 'react'

interface HomeProps {
  posts: Post[]
}

const Home: FC<HomeProps> = ({ posts }) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <MainLayout>
      <Head>
        <title>SketchyBlog</title>
      </Head>
      <div className="container mx-auto px-5">
        <Intro />
        {heroPost && (
          <HeroPost
            imageSource={heroPost.imageSource}
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
    </MainLayout>
  )
}

export const getStaticProps = async () => {
  const posts = getPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'imageSource'
  ])

  return {
    props: { posts: posts }
  }
}

export default Home
