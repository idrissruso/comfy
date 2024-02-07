import { BiSolidCartAlt, BiSolidUserPlus } from 'react-icons/bi'
import { useContext } from 'react'
import { CloseBtn } from './CloseBtn'
import { NavContext } from './Navbar'
import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { Action } from './Action'
import { useNavigate } from 'react-router-dom'
import { BiLogOut } from 'react-icons/bi'
import { logout } from '../../slices/authSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { selectTotalQuantity } from '../../slices/cartSlice'

export function SmallScreenNav() {
  const { showNav, closeNav, user } = useContext(NavContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const quantity = useSelector(selectTotalQuantity)

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
            <NavItem link="/products/1">Products</NavItem>
          </ul>
          <div className="mt-10 flex gap-10 justify-center">
            <Action
              label="Cart"
              count={quantity}
              onClick={() => {
                navigate('/cart')
                closeNav()
              }}
            >
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
                  closeNav()
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
        </div>
      </div>
    )
  )
}
