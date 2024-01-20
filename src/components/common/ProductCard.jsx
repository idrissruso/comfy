import LoadImgBox from './LoadImgBox'
import { capitalize } from '../../utils/methods'

function ProductCard({ product, size }) {
  const sizes = {
    small: 'font-thin text-sm',
    medium: 'font-semibold text-md',
    large: 'font-thin text-lg',
  }

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
        <span
          className={`text-textLight
          ${sizes[size]}
        `}
        >
          {capitalize(product.alt_description)}
        </span>
        <span
          className={`text-secondary-400
          ${sizes[size]}
        `}
        >
          {`$${product.price}`}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
