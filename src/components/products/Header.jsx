import { BiSolidGridAlt } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import { useState, useContext } from 'react'
import { DisplayContext } from '../../pages/Products'

function PHeader() {
  const [menu, setMenu] = useState(false)
  const [grid, setGrid] = useState(true)
  const { setDisplay } = useContext(DisplayContext)

  function handleMenuClick() {
    setMenu(!menu)
    setGrid(false)
    setDisplay('list')
  }

  function handleGridClick() {
    setGrid(!grid)
    setMenu(false)
    setDisplay('grid')
  }

  return (
    <div className="flex  flex-col md:flex-row gap-6 flex-wrap mt-9 md:mt-0">
      <div className="flex gap-2">
        <Icon onClick={handleGridClick} active={grid}>
          <BiSolidGridAlt />
        </Icon>
        <Icon onClick={handleMenuClick} active={menu}>
          <BiMenu />
        </Icon>
      </div>
      <Result />
      <Line />
      <SortBy />
    </div>
  )
}

function Line() {
  return (
    <div className="flex items-center flex-1 gap-2">
      <span className="bg-textLight w-full h-[.5px] block">&nbsp;</span>
    </div>
  )
}

function Result() {
  return (
    <div>
      <span>22 products founded</span>
    </div>
  )
}

function SortBy() {
  return (
    <div className="flex">
      <span>Sort By</span>
      <select>
        <option value="">Price</option>
        <option value="">Company 2</option>
        <option value="">Company 3</option>
      </select>
    </div>
  )
}

function Icon({ onClick, children, active }) {
  return (
    <span
      className={`border border-text p-1 rounded-md block cursor-pointer transition-all duration-300 ease-out ${
        active ? 'bg-text text-white' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </span>
  )
}

export default PHeader
