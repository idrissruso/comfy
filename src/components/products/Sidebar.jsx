import { useState } from 'react'
import Button from '../common/Button'
import { useGetCategories } from '../../hooks/useGetCategories'

function Sidebar() {
  const [price, setPrice] = useState(50)
  const [category, setCategory] = useState('')

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  const { data: categories } = useGetCategories()

  function handlePriceChange(event) {
    setPrice(event.target.value)
  }

  return (
    <aside className="flex flex-col gap-1 px-5 relative sm:sticky top-5">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-1 rounded-md bg-primary-200"
      />
      <div>
        <Title>Category</Title>
        <ul className="flex flex-col">
          <Item onClick={() => setCategory('')} active={!category}>
            All
          </Item>
          {categories?.map((category) => (
            <Item
              key={category.id}
              onClick={() => setCategory(category.name)}
              active={category.name === category}
            >
              {category.name}
            </Item>
          ))}
        </ul>
      </div>
      <div>
        <Title>Company</Title>
        <select>
          <option value="">All</option>
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
  return (
    <li
      className={`cursor-pointer text-textLight  font-thin hover:font-bold hover:underline transition-all duration-300 ease-in-out
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
