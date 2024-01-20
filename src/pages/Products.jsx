import Header from '../components/common/Header'
import Sidebar from '../components/products/Sidebar'
import PHeader from '../components/products/Header'
import ProductCard from '../components/common/ProductCard'

const product = {
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
function Products() {
  return (
    <div>
      <Header path={'Products'} />
      <div className="flex px-[11%]  py-14 flex-wrap">
        <Sidebar />
        <div className="flex-1">
          <PHeader />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
            <ProductCard product={product} size={'small'} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
