import ProductCard from '../common/ProductCard'
import { useContext } from 'react'
import { DisplayContext } from '../../pages/Products'

export function Items() {
  const { display: type, products } = useContext(DisplayContext)
  return (
    <>
      {products.length === 0 && (
        <div
          className="
          flex items-center justify-center h-[50vh]
          text-3xl font-semibold text-gray-400
        "
        >
          Oops!!!🥲 <br />
          No products found
        </div>
      )}
      <div
        className={`grid gap-8 mt-8 min-h-screen
      ${type === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'cols'}
      `}
      >
        {products.map((product) => (
          <ProductCard
            key={product.code}
            product={product}
            size={'small'}
            type={type}
          />
        ))}
      </div>
    </>
  )
}
