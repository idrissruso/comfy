import { NavItem } from './NavItem'

export function NavItems() {
  return (
    <ul className="hidden md:flex gap-4">
      <NavItem link="/home">Home</NavItem>
      <NavItem link="/about">About</NavItem>
      <NavItem link="/products/1">Products</NavItem>
    </ul>
  )
}
