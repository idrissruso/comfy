import { useState } from 'react'
import Button from '../common/Button'

function Sidebar() {
  const [price, setPrice] = useState(50)

  function handlePriceChange(event) {
    setPrice(event.target.value)
  }

  return (
    <aside className="flex flex-col gap-1 px-5 sticky top-0">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-1 rounded-md bg-primary-200"
      />
      <div>
        <Title>Category</Title>
        <ul className="flex flex-col">
          <Item>All</Item>
          <Item>Office</Item>
          <Item>Living Room</Item>
          <Item>Kitchen</Item>
          <Item>Bedroom</Item>
          <Item>Dining</Item>
          <Item>Kids</Item>
        </ul>
      </div>
      <div>
        <Title>Company</Title>
        <select>
          <option value="">Company 1</option>
          <option value="">Company 2</option>
          <option value="">Company 3</option>
        </select>
      </div>
      <div>
        <Title>Price</Title>
        <p>${price}</p>

        <input
          type="range"
          min="1000"
          max="900000"
          value={price}
          className=" "
          id="myRange"
          onChange={handlePriceChange}
        />
      </div>
      <div className="flex py-2 gap-x-5">
        <span>Free Shipping</span>
        <input type="checkbox" className="mr-auto" />
      </div>
      <div>
        <Button text={'Clear'} size={'sm'} type="danger" />
      </div>
    </aside>
  )
}

function Item({ children, onClick, active }) {
  //make the li decoration none
  return (
    <li
      className={`cursor-pointer text-textLight  font-thin
      ${active && 'font-bold underline back-face-visibility'}`}
      onClick={onClick}
    >
      {children}
    </li>
  )
}

function Title({ children }) {
  return <h2 className="my-1 font-semibold text-text">{children}</h2>
}

export default Sidebar
