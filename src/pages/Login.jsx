import { useState } from 'react'

function Login() {
  const [login, setLogin] = useState(false)
  console.log(login)

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-secondary-300 via-secondary-200 to-secondary-100 transition-all duration-300">
      <div
        action=""
        className=" bg-white drop-shadow-2xl flex flex-col bg-transparent border border-textDarker py-5 px-7 rounded-lg min-h-[25rem] "
      >
        <div className="flex">
          <Button onClick={() => setLogin(true)} active={login}>
            Login
          </Button>
          <Button onClick={() => setLogin(false)} active={!login}>
            Register
          </Button>
        </div>
        <form className="flex justify-center items-center ">
          {login ? <LogInComponent /> : <Register />}
        </form>
      </div>
    </div>
  )
}

function Button({ children, onClick, active }) {
  return (
    <button
      className={`transition-colors duration-300 text-lg font-semibold  px-4 py-2 flex-1 ${
        active
          ? 'bg-gradient-to-r from-secondary-500 via-secondary-300 to-secondary-100 text-wite'
          : 'text-secondary-500 border border-secondary-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function LogInComponent() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex flex-col w-80">
        <label className="text-sm">Username</label>
        <input className="border border-gray-400 rounded-sm p-1" />
      </div>
      <div className="flex flex-col w-80">
        <label className="text-sm">Password</label>
        <input className="border border-gray-400 rounded-sm p-1" />
      </div>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-sm p-1 w-80 mt-2">
        Login
      </button>
    </div>
  )
}

function Register() {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-3xl font-bold">Register</h1>
      <div className="flex flex-col w-80">
        <label className="text-sm">Username</label>
        <input className="border border-gray-400 rounded-sm p-1" />
      </div>
      <div className="flex flex-col w-80">
        <label className="text-sm">Email</label>
        <input className="border border-gray-400 rounded-sm p-1" />
      </div>
      <div className="flex flex-col w-80">
        <label className="text-sm">Password</label>
        <input className="border border-gray-400 rounded-sm p-1" />
      </div>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-sm p-1 w-80 mt-2">
        Register
      </button>
    </div>
  )
}

export default Login
