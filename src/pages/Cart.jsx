import Header from '../components/common/Header'
import CartItem from '../components/cart/CartItem'
import Resume from '../components/cart/Resume'

function Cart() {
  return (
    <div>
      <Header path={'Cart'} />
      <div className="px-[11%]">
        <main className="flex gap-10 justify-between items-center flex-wrap">
          <div className="flex flex-col gap-5 flex-1">
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <Resume />
        </main>
      </div>
    </div>
  )
}

export default Cart
