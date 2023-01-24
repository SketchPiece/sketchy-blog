const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-5">
        <div className="py-12 flex flex-col lg:flex-row items-center justify-center">
          <span>
            Made with ❤️ by{' '}
            <a
              target="_blank"
              href="https://github.com/SketchPiece"
              className="font-bold hover:underline text-lg"
            >
              SketchPiece
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
