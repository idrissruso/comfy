import { Link } from 'react-router-dom'
import { BiSolidCartAlt, BiSolidUserPlus, BiMenu, BiX } from 'react-icons/bi'
import { useState } from 'react'
import { createContext, useContext } from 'react'

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
      <nav className="mt-4 flex items-center justify-between">
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

function Logo() {
  return <img src="logo.png" alt="comfy_logo" className="w-[8rem]" />
}

function NavItems() {
  return (
    <ul className="hidden md:flex gap-4">
      <NavItem link="/home">Home</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/products">Products</NavItem>
    </ul>
  )
}

function NavItem({ children, link }) {
  const { closeNav: toggleNav } = useContext(NavContext)
  return (
    <li
      className="hover:border-b-2 hover:border-secondary-300 border-b-2 border-transparent px-1 py-3 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer"
      onClick={() => toggleNav(true)}
    >
      <Link to={link}>{children}</Link>
    </li>
  )
}

function Action({ label, count, children }) {
  return (
    <div className="flex items-center relative cursor-pointer">
      <span className="text-xl">{label}</span>
      {children}
      {count > 0 && (
        <span className="absolute right-[-7px] top-[-7px] z-10 bg-text rounded-full text-xs min-w-[1.5rem] min-h-[1.5rem] flex justify-center items-center text-white">
          {count}
        </span>
      )}
    </div>
  )
}

function Menu() {
  const { toggleNav } = useContext(NavContext)

  return (
    <span
      onClick={toggleNav}
      className="md:hidden block ml-auto cursor-pointer"
    >
      <BiMenu size={34} color="#AA7B5F" />
    </span>
  )
}

function SmallScreenNav() {
  const { showNav } = useContext(NavContext)

  return (
    showNav && (
      <div
        className="md:hidden fixed inset-0 z-50 bg-white"
        style={{
          animation: showNav
            ? 'from-left 0.5s forwards'
            : 'from-right 0.5s forwards',
        }}
      >
        <div className="p-4">
          <div className="mb-8 flex justify-between items-center">
            <Logo />
            <CloseBtn />
          </div>
          <ul className="flex flex-col space-y-4">
            <NavItem link="/home">Home</NavItem>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/products">Products</NavItem>
          </ul>
          <div className="mt-10 flex gap-10 justify-center">
            <Action label="Cart" count={10}>
              <BiSolidCartAlt size={34} color="#AA7B5F" />
            </Action>
            <Action label="Login">
              <BiSolidUserPlus size={34} color="#AA7B5F" />
            </Action>
          </div>
        </div>
      </div>
    )
  )
}

function CloseBtn() {
  const { closeNav: toggleNav } = useContext(NavContext)

  return (
    <span
      onClick={toggleNav}
      className="md:hidden block ml-auto cursor-pointer"
    >
      <BiX size={34} color="#AA7B5F" />
    </span>
  )
}

export default Navbar
