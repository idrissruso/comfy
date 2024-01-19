import Header from '../components/common/Header'
import Sidebar from '../components/products/Sidebar'
import PHeader from '../components/products/Header'

function Products() {
  return (
    <div>
      <Header path={'Products'} />
      <div className="flex px-[11%]  py-14 flex-wrap">
        <Sidebar />
        <div className="flex-1">
          <PHeader />
        </div>
      </div>
    </div>
  )
}

export default Products
