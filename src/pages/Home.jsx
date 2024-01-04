import { Header } from './Header'
import { ImagesBox } from './ImagesBox'

function Home() {
  return (
    <div className="flex justify-between min-h-[38rem]">
      <Header />
      <ImagesBox />
    </div>
  )
}

export default Home
