import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { NavContext } from './Navbar'

export function NavItem({ children, link }) {
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
