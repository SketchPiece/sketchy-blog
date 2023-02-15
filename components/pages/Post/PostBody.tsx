import { useEffect } from 'react'
import markdownStyles from 'styles/markdown-styles.module.css'

interface PostBodyProps {
  content: string
}

const PostBody = ({ content }: PostBodyProps) => {
  useEffect(() => {
    const s = document.createElement('script')
    s.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    s.setAttribute('async', 'true')
    document.head.appendChild(s)
  }, [])

  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
