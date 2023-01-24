// import Avatar from './avatar'
import DateFormatter from '../../common/DateFormatter'
import CoverImage from '../Main/CoverImage'
import PostTitle from './PostTitle'
import { FC } from 'react'
// import type Author from '../interfaces/author'

interface PostHeaderProps {
  title: string
  coverImage: string
  date: string
}

const PostHeader: FC<PostHeaderProps> = ({ title, coverImage, date }) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
