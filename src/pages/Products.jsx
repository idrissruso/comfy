import Header from '../components/common/Header'
import Sidebar from '../components/products/Sidebar'
function Products() {
  return (
    <div>
      <Header path={'Products'} />
      <div className="flex px-[11%]  py-14">
        <Sidebar />
        <div className="bg-red-600 flex-1">
          <h1>Products</h1>
        </div>
      </div>
    </div>
  )
}

export default Products
