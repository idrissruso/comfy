import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getFeaturedProducts } from '../../Api/methods'

import ProductCard from '../common/ProductCard'
import Button from '../common/Button'
import Loader from '../common/Loader'

function FeaturedProducts() {
  const navigate = useNavigate()
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['featuredProducts'],
    queryFn: getFeaturedProducts,
    staleTime: 0,
  })

  if (isLoading) return <Loader />

  if (isError) return <div>{error.message}</div>

  return (
    <div className=" bg-primary-200 px-[11%] py-10 flex justify-center gap-10 flex-col">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-text font-bold text-4xl">Featured Products</h1>
        <hr className=" w-20 h-1 bg-secondary-400" />
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-12">
          {data.map((product) => (
            <ProductCard
              key={product.code}
              product={product}
              size={'medium'}
              type={'grid'}
            />
          ))}
        </div>
      </div>
      <div className=" self-center mt-5">
        <Button
          text="ALL PRODUCTS"
          size="sm"
          type="primary"
          onClick={() => navigate('/products/1')}
        />
      </div>
    </div>
  )
}

export default FeaturedProducts
