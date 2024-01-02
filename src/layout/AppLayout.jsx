import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function AppLayout() {
  return (
    <div className=" bg-primary-100">
      <Navbar />
      <main className=" bg-orange-700">
        <h1>AppLayout</h1>
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
