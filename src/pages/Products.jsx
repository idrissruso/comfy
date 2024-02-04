import { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Items } from '../components/products/Items'

import Header from '../components/common/Header'
import Sidebar from '../components/products/Sidebar'
import PHeader from '../components/products/Header'
import Tracker from '../components/products/Tracker'
import Loader from '../components/common/Loader'
import Error from '../components/common/Error'
import useGetProducts from '../hooks/useGetProducts'

export const DisplayContext = createContext()

function Products() {
  const [display, setDisplay] = useState('grid')
  const [category, setCategory] = useState('All')
  const [products, setProducts] = useState([])
  const { page } = useParams()
  const { isLoading, isError, error, data1, data2, isSuccess1, isSuccess2 } =
    useGetProducts(page, category)

  useEffect(() => {
    if (isSuccess1) {
      setProducts(data1 || [])
    }
    if (isSuccess2) {
      setProducts(data2 || [])
    }
  }, [data1, isSuccess1, data2, isSuccess2])

  return (
    <DisplayContext.Provider
      value={{
        display,
        setDisplay,
        products,
        category,
        setCategory,
      }}
    >
      {isLoading ? <Loader /> : null}
      {isError ? <Error error={error || 'An error occurred'} /> : null}
      <div className=" select-none">
        <Header path={'Products'} />
        <div className="flex px-[11%]  py-14 flex-wrap h-full">
          <div>
            <Sidebar />
          </div>
          <div className="flex-1 flex flex-col">
            <PHeader />
            <Items />
            <div className=" self-end mt-8">
              {category === 'All' ? <Tracker page={page} /> : null}
            </div>
          </div>
        </div>
      </div>
    </DisplayContext.Provider>
  )
}

export default Products
