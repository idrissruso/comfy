import { createContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProductByPage } from '../Api/methods'
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
  const { page } = useParams()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products', page?.toString()],
    queryFn: () => getProductByPage(page),
    staleTime: 0,
  })

  if (isLoading) return <Loader />

  if (isError)
    return (
      <div className="flex items-center justify-center">
        <Error message={error.message} />
      </div>
    )

  return (
    <DisplayContext.Provider value={{ display, setDisplay, data }}>
      <div>
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
