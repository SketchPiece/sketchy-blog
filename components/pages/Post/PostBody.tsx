import markdownStyles from 'styles/markdown-styles.module.css'

interface PostBodyProps {
  content: string
}

const PostBody = ({ content }: PostBodyProps) => {
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
