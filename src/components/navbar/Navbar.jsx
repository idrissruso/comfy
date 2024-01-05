import { BiSolidCartAlt, BiSolidUserPlus } from 'react-icons/bi'
import { useState } from 'react'
import { createContext } from 'react'
import { SmallScreenNav } from './SmallScreenNav'
import { Menu } from './Menu'
import { Action } from './Action'
import { NavItems } from './NavItems'
import { Logo } from './Logo'

export const NavContext = createContext()

function Navbar() {
  const [showNav, setShowNav] = useState(false)

  function toggleNav() {
    setShowNav(!showNav)
  }

  function closeNav() {
    setShowNav(false)
  }

  return (
    <NavContext.Provider value={{ showNav, toggleNav, closeNav }}>
      <nav className="mt-4 flex items-center justify-between px-[11%]">
        <SmallScreenNav />
        <Logo />
        <Menu />
        <div className=" flex-grow-0">
          <input
            type="text"
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:scale-x-125 transition-all duration-300 hidden lg:block focus:placeholder:text-secondary-300"
            placeholder="Search"
          />
        </div>
        <NavItems />
        <div className="md:flex gap-3 hidden ">
          <Action label="Cart" count={10}>
            <BiSolidCartAlt size={34} color="#AA7B5F" />
          </Action>
          <Action label="Login">
            <BiSolidUserPlus size={34} color="#AA7B5F" />
          </Action>
        </div>
      </nav>
    </NavContext.Provider>
  )
}

export default Navbar
