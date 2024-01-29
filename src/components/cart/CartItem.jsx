import LoadImgBox from '../common/LoadImgBox'
import Buttons from '../products/Buttons'
//import trash icon  from react icons
import { FaTrash } from 'react-icons/fa'

function CartItem() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <LoadImgBox
            src={
              'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDgzNTl8MHwxfHNlYXJjaHwyfHxzd2VldHN8ZW58MHx8fHwxNzAzNjIwODc1fDA&ixlib=rb-4.0.3&q=85'
            }
            alt={'product.name'}
            size={'sm'}
            noHover={true}
          />
          <div></div>
          <div className="flex flex-col gap-1 justify-around">
            <h3 className="text-xl font-semibold">Cake</h3>
            <span className="text-secondary-400 font-semibold text-lg">
              $10
            </span>
            <span className="text-textLight font-thin text-lg">
              subtotal: $10
            </span>
            <span className=" bg-red-600 ml-auto p-1 rounded-md cursor-pointer ">
              <FaTrash className=" text-white cursor-pointer" size={'.8rem'} />
            </span>
          </div>
        </div>
        <Buttons />
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
