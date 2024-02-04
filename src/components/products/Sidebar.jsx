import { useState, useContext } from 'react'
import Button from '../common/Button'
import { useGetCategories } from '../../hooks/useGetCategories'
import { DisplayContext } from '../../pages/Products'

function Sidebar() {
  const [price, setPrice] = useState(50)
  const { category, setCategory } = useContext(DisplayContext)

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
          <Item onClick={() => setCategory('All')} category={category}>
            All
          </Item>
          {categories?.map((cat) => (
            <Item
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              category={category}
              id={cat.id}
            >
              {cat.name}
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

function Item({ children, onClick, category, id }) {
  const active = category === id || category === children

  return (
    <li
      className={`cursor-pointer text-textLight  font-thin hover:font-bold hover:underline transition-all duration-300 ease-in-out
      ${active && 'font-semibold underline text-secondary-400 scale-90'}`}
      onClick={onClick}
      value={children}
    >
      {children}
    </li>
  )
}

function Title({ children }) {
  return <h2 className="my-1 font-semibold text-text">{children}</h2>
}

export default Sidebar
