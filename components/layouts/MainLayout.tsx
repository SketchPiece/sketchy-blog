import { FC, PropsWithChildren } from 'react'
// import Alert from './alert'
import Footer from '../common/Footer'
import Meta from '../common/Meta'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
