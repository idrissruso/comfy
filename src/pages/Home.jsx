import { Header } from '../components/home/Header'
import { ImagesBox } from '../components/home/ImagesBox'

function Home() {
  return (
    <div className="flex justify-between min-h-[38rem]">
      <Header />
      <ImagesBox />
    </div>
  )
}

export default Home
