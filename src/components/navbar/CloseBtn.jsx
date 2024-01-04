import { BiX } from 'react-icons/bi'
import { useContext } from 'react'
import { NavContext } from './Navbar'

export function CloseBtn() {
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
