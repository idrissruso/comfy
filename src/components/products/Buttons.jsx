import { useDispatch } from 'react-redux'
import { onQuantityChange } from '../../slices/cartSlice'

function Buttons({ count, setCount, type, id }) {
  const dispatch = useDispatch()

  const handleIncrease = () => {
    setCount(count + 1)
    if (type === 'cart') {
      dispatch(onQuantityChange({ id: id, increase: true }))
    }
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
      if (type === 'cart') {
        dispatch(onQuantityChange({ id: id, increase: false }))
      }
    }
  }

  return (
    <div className="flex gap-5 text-2xl font-semibold text-text text-[1.2rem]">
      <span className=" cursor-pointer select-none " onClick={handleDecrease}>
        -
      </span>
      <span className="select-none">{count}</span>
      <span className=" cursor-pointer select-none" onClick={handleIncrease}>
        +
      </span>
    </div>
  )
}

export default Buttons
