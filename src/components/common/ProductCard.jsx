import LoadImgBox from './LoadImgBox'
import { capitalize } from '../../utils/methods'

function ProductCard({ product }) {
  return (
    <div>
      <div className="">
        <LoadImgBox
          src={product.image}
          alt={'product.name'}
          params={
            'hover:backdrop-blur-md transition-all duration-300 ease-in-out'
          }
        />
      </div>
      <div className=" flex justify-between mt-5">
        <span className=" text-textLight text-md font-semibold">
          {capitalize(product.alt_description)}
        </span>
        <span className=" text-secondary-400 font-thin text-lg">
          {`$${product.price}`}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
