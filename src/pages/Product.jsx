import Button from '../components/common/Button'
import Header from '../components/common/Header'
import LoadImgBox from '../components/common/LoadImgBox'
import StarsRating from '../components/common/StarsRating'
import IndexVal from '../components/products/IndexVal'
import Buttons from '../components/products/Buttons'
import useGetProduct from '../hooks/useGetProduct'
import toast from 'react-hot-toast'
import Loader from '../components/common/Loader'
import { useNavigate } from 'react-router-dom'
import { useGetCategory } from '../hooks/useGetCategory'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { addItemToCart } from '../slices/cartSlice'

function Product() {
  const { isLoading, isError, error, productData } = useGetProduct()
  const [count, setCount] = useState(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data } = useGetCategory(productData?.category || 1)

  const handleAddToCart = () => {
    dispatch(
      addItemToCart({
        data: productData,
        amount: count,
      })
    )
    toast.success('Item added to cart')
  }

  if (isError) {
    toast.error(error.message)
    navigate(`/products/${localStorage.getItem('page') || '1'}}`)
  }
  if (isLoading) return <Loader />

  return (
    <div className="mx-[11%] space-y-5">
      <Header path={'Product/Cake'} />
      <Button
        text={'Back to All Products'}
        size={'sm'}
        type={'primary'}
        onClick={() =>
          navigate(`/products/${localStorage.getItem('page') || '1'}`)
        }
      />
      <div className="grid md:grid-cols-2 gap-10 ">
        <div>
          <LoadImgBox src={productData?.image} size={'lg'} noHover={true} />
        </div>
        <div>
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold mt-8">
              {productData?.alt_description}
            </h2>
            <StarsRating />
            <span className="text-secondary-400 font-semibold text-xl">
              $10
            </span>
          </div>
          <p className="mt-4 text-textLight leading-8">
            {productData?.description}
          </p>
          <IndexVal stock={'In Stock'} brand={data} code={productData?.code} />
          <hr className="border-1 height-[1px] my-5" />
          <div className="flex flex-col gap-5 my-5">
            <Buttons count={count} setCount={setCount} />
            <div>
              <Button
                text={'Add to Cart'}
                size={'sm'}
                type={'primary'}
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
