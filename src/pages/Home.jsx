import { Header } from '../components/home/Header'
import { ImagesBox } from '../components/home/ImagesBox'
import FeaturedProducts from '../components/home/FeaturedProducts'

function Home() {
  return (
    <div className="">
      <div className="flex justify-between min-h-[38rem] px-[11%]">
        <Header />
        <ImagesBox />
      </div>
      <FeaturedProducts />
    </div>
  )
}

export default Home
