import { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProductByPage, getProductsByCategoryPage } from '../Api/methods'
import { Items } from '../components/products/Items'

import Header from '../components/common/Header'
import Sidebar from '../components/products/Sidebar'
import PHeader from '../components/products/Header'
import Tracker from '../components/products/Tracker'
import Loader from '../components/common/Loader'
import Error from '../components/common/Error'

export const DisplayContext = createContext()

function Products() {
  const [display, setDisplay] = useState('grid')
  const [category, setCategory] = useState('All')
  const [products, setProducts] = useState([])
  const { page } = useParams()
  const {
    isLoading: isLoading1,
    isError,
    error,
    data,
    isSuccess,
  } = useQuery({
    queryKey: ['products', page?.toString()],
    queryFn: () => getProductByPage(page),
    staleTime: 0,
    enabled: category === 'All',
  })

  const {
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
    data: data2,
    isSuccess: isSuccess2,
  } = useQuery({
    queryKey: ['products', category, page?.toString()],
    queryFn: () => getProductsByCategoryPage(category, page),
    enabled: category !== 'All',
    staleTime: 0,
  })

  useEffect(() => {
    if (isSuccess) {
      setProducts(data || [])
    }
    if (isSuccess2) {
      setProducts(data2 || [])
    }
  }, [data, data2, isSuccess, isSuccess2])

  return (
    <DisplayContext.Provider
      value={{ display, setDisplay, products, category, setCategory }}
    >
      {isLoading1 || isLoading2 ? <Loader /> : null}
      {isError || isError2 ? (
        <Error error={error2 || error || 'An error occurred'} />
      ) : null}
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
              <Tracker />
            </div>
          </div>
        </div>
      </div>
    </DisplayContext.Provider>
  )
}

export default Products
