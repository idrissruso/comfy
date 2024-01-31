import ProductCard from '../common/ProductCard'
import { useContext } from 'react'
import { DisplayContext } from '../../pages/Products'

export function Items() {
  const { display: type, data } = useContext(DisplayContext)
  return (
    <div
      className={`grid gap-8 mt-8
      ${type === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'cols'}
      `}
    >
      {data.map((product) => (
        <ProductCard
          key={product.code}
          product={product}
          size={'small'}
          type={type}
        />
      ))}
    </div>
  )
}
