import { useSelector } from 'react-redux'
import { selectTotalPrice, selectShippingFee } from '../../slices/cartSlice'

function Resume() {
  const totalPrice = useSelector(selectTotalPrice)
  const shippingFee = useSelector(selectShippingFee)

  return (
    <div className="border border-textLight px-10 py-5 flex flex-col gap-3">
      <div className="flex gap-[5rem]">
        <span className="flex flex-col gap-3">
          <span className="font-bold">Subtotal :</span>
          <span>Shipping Fee :</span>
        </span>
        <span className="flex flex-col gap-3">
          <span className="font-bold">${totalPrice}</span>
          <span>${shippingFee}</span>
        </span>
      </div>
      <hr className="border-1 text-secondary-500" />
      <div className="flex justify-between font-extrabold text-lg">
        <span>Order Total :</span>
        <span>${totalPrice + shippingFee}</span>
      </div>
    </div>
  )
}

export default Resume
