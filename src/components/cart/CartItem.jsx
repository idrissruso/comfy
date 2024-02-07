import LoadImgBox from '../common/LoadImgBox'
import Buttons from '../products/Buttons'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeItemFromCart } from '../../slices/cartSlice'

function CartItem({ product }) {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <LoadImgBox
            src={product.image}
            alt={'product.name'}
            size={'sm'}
            noHover={true}
          />
          <div></div>
          <div className="flex flex-col gap-1 justify-around">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <span className="text-secondary-400 font-semibold text-lg">
              ${product.price}
            </span>
            <span className="text-textLight font-thin text-lg">
              subtotal: ${product.totalPrice}
            </span>
            <span
              className=" bg-red-600 ml-auto p-1 rounded-md cursor-pointer "
              onClick={() => dispatch(removeItemFromCart(product.id))}
            >
              <FaTrash className=" text-white cursor-pointer" size={'.8rem'} />
            </span>
          </div>
        </div>
        <Buttons count={product.quantity} type={'cart'} id={product.id} />
      </div>
      <hr
        className="
        border-1 text-secondary-500
      "
      />
    </div>
  )
}

export default CartItem
