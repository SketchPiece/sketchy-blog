import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

interface CoverImageProps {
  title: string
  src: string
  source?: string
  slug?: string
}

const CoverImage = ({ title, src, slug, source }: CoverImageProps) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm w-full h-96 object-cover', {
        'hover:shadow-lg transition-shadow duration-200': slug
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="sm:mx-0 relative">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
      {source && (
        <div
          className="absolute bottom-0 right-0 mb-4 mr-4 text-sm text-gray-500"
          dangerouslySetInnerHTML={{ __html: source }}
        />
      )}
    </div>
  )
}

export default CoverImage
