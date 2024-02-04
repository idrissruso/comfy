import { BiSolidCartAlt, BiSolidUserPlus } from 'react-icons/bi'
import { useState } from 'react'
import { createContext } from 'react'
import { SmallScreenNav } from './SmallScreenNav'
import { Menu } from './Menu'
import { Action } from './Action'
import { NavItems } from './NavItems'
import { Logo } from './Logo'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, logout } from '../../slices/authSlice'
import { BiLogOut } from 'react-icons/bi'

export const NavContext = createContext()

function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  function toggleNav() {
    setShowNav(!showNav)
  }

  function closeNav() {
    setShowNav(false)
  }

  return (
    <NavContext.Provider value={{ showNav, toggleNav, closeNav, user }}>
      <nav className="mt-4 flex items-center justify-between px-[11%] mb-7">
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
          <Action label="Cart" count={10} onClick={() => navigate('/cart')}>
            <BiSolidCartAlt size={34} color="#AA7B5F" />
          </Action>
          {user ? (
            <Action
              label={user}
              onClick={() => {
                dispatch(logout())
                localStorage.removeItem('accessToken')
                localStorage.removeItem('refreshToken')
                navigate('/login')
              }}
            >
              <BiLogOut size={34} color="#AA7B5F" />
            </Action>
          ) : (
            <Action label="Login" onClick={() => navigate('/login')}>
              <BiSolidUserPlus size={34} color="#AA7B5F" />
            </Action>
          )}
        </div>
      </nav>
    </NavContext.Provider>
  )
}

export default Navbar
