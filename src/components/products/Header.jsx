import { BiSolidGridAlt } from 'react-icons/bi'
import { BiMenu } from 'react-icons/bi'
import { useState } from 'react'

function PHeader() {
  const [menu, setMenu] = useState(false)
  const [grid, setGrid] = useState(false)

  function handleMenuClick() {
    setMenu(!menu)
    setGrid(false)
  }

  function handleGridClick() {
    setGrid(!grid)
    setMenu(false)
  }

  return (
    <div className="flex gap-2">
      <Icon onClick={handleGridClick} active={grid}>
        <BiSolidGridAlt />
      </Icon>
      <Icon onClick={handleMenuClick} active={menu}>
        <BiMenu />
      </Icon>
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
