import Header from '../components/common/Header'
import CartItem from '../components/cart/CartItem'
import Resume from '../components/cart/Resume'
import Button from '../components/common/Button'

function Cart() {
  return (
    <div>
      <Header path={'Cart'} />
      <div className="px-[11%] mt-5">
        <main className="flex gap-10 justify-between items-center flex-wrap">
          <div className="flex flex-col gap-5 flex-1 h-[20rem] min-w-max overflow-x-auto">
            <CartItem />
            <CartItem />
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
