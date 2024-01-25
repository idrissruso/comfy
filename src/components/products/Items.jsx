import ProductCard from '../common/ProductCard'
import { product } from '../../pages/Products'
import { useContext } from 'react'
import { DisplayContext } from '../../pages/Products'

export function Items() {
  const { display: type } = useContext(DisplayContext)
  return (
    <div
      className={`grid gap-8 mt-8
      ${type === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'cols'}
      `}
    >
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
      <ProductCard product={product} size={'small'} type={type} />
    </div>
  )
}
