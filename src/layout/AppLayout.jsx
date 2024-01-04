import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className=" bg-primary-100 min-h-screen">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
