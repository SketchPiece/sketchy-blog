import type Author from './Author'

interface PostType {
  slug: string
  title: string
  date: string
  coverImage: string
  imageSource: string
  author: Author
  excerpt: string
  ogImage: {
    url: string
  }
  content: string
}

export default PostType
