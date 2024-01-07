import { useNavigate } from 'react-router-dom'

function Header({ path }) {
  const navigator = useNavigate()

  function handleClick() {
    navigator('/')
  }
  return (
    <header className="bg-secondary-200 px-[11%] py-6">
      <h1 className=" text-2xl font-bold ">
        <span
          onClick={handleClick}
          className="cursor-pointer text-secondary-400"
        >
          Home/
        </span>
        <span className="text-secondary-500 cursor-pointer">{path}</span>
      </h1>
    </header>
  )
}

export default Header
