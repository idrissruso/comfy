import { useState } from 'react'
import Button from '../common/Button'

function Sidebar() {
  const [price, setPrice] = useState(50)

  function handlePriceChange(event) {
    setPrice(event.target.value)
  }

  return (
    <aside className="flex flex-col gap-1 px-5">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-1 rounded-md bg-primary-200"
      />
      <div>
        <Title>Category</Title>
        <ul className="flex flex-col gap-2">
          <Item>Category 1</Item>
          <Item>Category 2</Item>
          <Item>Category 3</Item>
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
      <div className="flex items-center justify-evenly py-2">
        <span>Free Shipping</span>
        <input type="checkbox" />
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
      className={`cursor-pointer text-text hover:underline underline-offset-8 font-thin
        
      ${active && 'font-bold underline back-face-visibility'}`}
      onClick={onClick}
    >
      {children}
    </li>
  )
}

function Title({ children }) {
  return <h2 className="text-lg my-3">{children}</h2>
}

export default Sidebar
