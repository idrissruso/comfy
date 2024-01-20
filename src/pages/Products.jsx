import Header from '../components/common/Header'
import Sidebar from '../components/products/Sidebar'
import PHeader from '../components/products/Header'
import { Items } from './Items'
import { createContext, useState } from 'react'

export const product = {
  name: 'sweets',
  image:
    'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDgzNTl8MHwxfHNlYXJjaHwyfHxzd2VldHN8ZW58MHx8fHwxNzAzNjIwODc1fDA&ixlib=rb-4.0.3&q=85',
  price: 854,
  code: 'SWE_6SNY9RNENB',
  alt_description: 'assorted donuts top of white area',
  description:
    'Satisfy your sweet cravings with our delectable assortment of donuts, elegantly captured in this image. The assorted donuts, with their tempting glazes and toppings, are a treat for the eyes and a delight for the taste buds. Indulge in the sweetness of life with this irresistible collection of assorted donuts.',
  category: 1,
  shipping: 8.99,
}

export const DisplayContext = createContext()

function Products() {
  const [display, setDisplay] = useState('grid')

  return (
    <DisplayContext.Provider value={{ display, setDisplay }}>
      <div>
        <Header path={'Products'} />
        <div className="flex px-[11%]  py-14 flex-wrap">
          <Sidebar />
          <div className="flex-1">
            <PHeader />
            <Items />
          </div>
        </div>
      </div>
    </DisplayContext.Provider>
  )
}

export default Products
