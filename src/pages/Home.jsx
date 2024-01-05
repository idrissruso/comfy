import { Header } from '../components/home/Header'
import { ImagesBox } from '../components/home/ImagesBox'
import FeaturedProducts from '../components/home/FeaturedProducts'
import Mission from '../components/home/Mission'
import Email from '../components/home/Email'

function Home() {
  return (
    <div className="">
      <div className="flex justify-between lg:min-h-[38rem] px-[11%] mb-8">
        <Header />
        <ImagesBox />
      </div>
      <FeaturedProducts />
      <Mission />
      <Email />
    </div>
  )
}

export default Home
