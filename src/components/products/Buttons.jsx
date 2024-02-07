function Buttons({ count, setCount }) {
  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1)
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
