import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="mt-4">
      <Logo />
      <NavItems />
    </nav>
  )
}

function Logo() {
  return <img src="logo.png" alt="comfy_logo" className="w-[8rem]" />
}

function NavItems() {
  return (
    <ul>
      <NavItem link="/" />
    </ul>
  )
}

function NavItem({ children, link }) {
  return (
    <li>
      <Link to={link}>{children}</Link>
    </li>
  )
}

export default Navbar
