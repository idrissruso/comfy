import { BiMenu } from 'react-icons/bi'
import { useContext } from 'react'
import { NavContext } from './Navbar'

export function Menu() {
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
