function Navbar() {
  return (
    <nav>
      <h1 className=" bg-red-800">Navbar</h1>
    </nav>
  )
}
function NavItems() {
  return <ul></ul>
}

function NavItem({ children }) {
  return <li>{children}</li>
}

export default Navbar
