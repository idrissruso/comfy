import Header from '../components/common/Header'
import CartItem from '../components/cart/CartItem'
import Resume from '../components/cart/Resume'
import Button from '../components/common/Button'
import { useSelector } from 'react-redux'
import { selectCart } from '../slices/cartSlice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { clearCart } from '../slices/cartSlice'

function Cart() {
  const cart = useSelector(selectCart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div>
        <Header path={'Cart'} />
        <div className="flex justify-center items-center h-[80vh] flex-col gap-5">
          <h1 className="text-3xl font-bold">Your Cart is Empty</h1>
          <Button
            text={'Continue Shopping'}
            size={'sm'}
            type={'primary'}
            onClick={() => navigate('/products/1')}
          />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header path={'Cart'} />
      <div className="px-[11%] mt-5">
        <main className="flex gap-10 justify-between items-center flex-wrap">
          <div className="flex flex-col gap-5 flex-1">
            <div className="flex flex-col gap-5 overflow-x-auto max-h-[30rem] pr-5">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-between mb-5">
              <Button
                text={'Continue Shopping'}
                size={'sm'}
                type={'primary'}
                onClick={() => navigate('/products/1')}
              />
              <Button
                text={'Clear Shopping Cart'}
                size={'sm'}
                type={'secondary'}
                onClick={() => dispatch(clearCart())}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <Resume />
            <Button text={'Checkout'} size={'sm'} type={'primary'} />
          </div>
        </main>
      </div>
    </div>
  )
}

export default Cart
