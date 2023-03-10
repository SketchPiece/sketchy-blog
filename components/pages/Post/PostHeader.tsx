import DateFormatter from '../../common/DateFormatter'
import CoverImage from '../Main/CoverImage'
import PostTitle from './PostTitle'
import { FC } from 'react'

interface PostHeaderProps {
  title: string
  coverImage: string
  date: string
  imageSource: string
}

const PostHeader: FC<PostHeaderProps> = ({
  title,
  coverImage,
  date,
  imageSource
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} source={imageSource} />
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
