import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className=" bg-primary-100">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
