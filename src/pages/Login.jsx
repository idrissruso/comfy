import { useState } from 'react'
import { LogInComponent } from '../components/auth/LogInComponent'
import { Register } from '../components/auth/Register'
import { Button } from '../components/auth/Button'
import { useLogin } from '../hooks/useLogin'
import Loader from '../components/common/Loader'

function Login() {
  const [login, setLogin] = useState(true)
  const { mutate, isPending } = useLogin()

  function handleLogin(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const username = data.get('name')
    const password = data.get('password')
    mutate({ username, password })
  }

  return (
    <>
      {isPending && <Loader />}
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
          <form
            className="flex justify-center items-center "
            onSubmit={(e) => handleLogin(e)}
          >
            {login ? <LogInComponent /> : <Register />}
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
