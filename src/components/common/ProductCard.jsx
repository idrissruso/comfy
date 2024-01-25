import LoadImgBox from './LoadImgBox'
import { capitalize } from '../../utils/methods'
import Button from './Button'

function ProductCard({ product, size, type }) {
  const sizes = {
    small: 'font-thin text-sm',
    medium: 'font-semibold text-md',
    large: 'font-thin text-lg',
  }

  if (type === 'grid') {
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
  } else if (type === 'list') {
    return (
      <div className="flex items-center gap-5 md:flex-nowrap flex-wrap">
        <div className="min-w-[23rem] flex-1">
          <LoadImgBox
            src={product.image}
            alt={'product.name'}
            params={
              'hover:backdrop-blur-md transition-all duration-300 ease-in-out'
            }
          />
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold capitalize">{product.name}</h2>
          <p className="text-sm font-normal">
            {product.description.length > 150
              ? product.description.slice(0, 150) + '...'
              : product.description}
          </p>
          <div className="flex justify-between mt-5">
            <span className={`text-textLight text-sm font-thin ${sizes[size]}`}>
              {capitalize(product.alt_description)}
            </span>
            <span className={`text-secondary-400 ${sizes[size]}`}>
              {`$${product.price}`}
            </span>
          </div>
          <div className="mt-5">
            <Button text="Details" size="sm" type="primary" />
          </div>
        </div>
      </div>
    )
  }
}

export default ProductCard
