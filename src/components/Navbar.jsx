import { Link } from 'react-router-dom'
import { BiSolidCartAlt, BiSolidUserPlus, BiMenu } from 'react-icons/bi'

function Navbar() {
  return (
    <nav className="mt-4 flex items-center justify-between">
      <Logo />
      <span className="md:hidden block ml-auto cursor-pointer">
        <BiMenu size={34} color="#AA7B5F" />
      </span>

      <div className=" flex-grow-0">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary-300 focus:scale-x-125 transition-all duration-300 hidden lg:block"
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
  return (
    <li className=" hover:border-b-2 hover:border-secondary-300 border-b-2 border-transparent px-1 py-3 transition-all duration-300 hover:translate-y-[-1px] cursor-pointer">
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
        <span className="absolute right-[-7px] top-[-7px] z-10 bg-text rounded-full text-xs  min-w-[1.5rem] min-h-[1.5rem] flex justify-center items-center text-white">
          {count}
        </span>
      )}
    </div>
  )
}

export default Navbar
