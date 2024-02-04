import { useMutation } from '@tanstack/react-query'
import { login as loginFn } from '../Api/methods'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as loginAction } from '../slices/authSlice'
import { jwtDecode } from 'jwt-decode'
import toast from 'react-hot-toast'

export function useLogin() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const mutation = useMutation({
    mutationFn: loginFn,
    onSuccess: (data) => {
      if (data.status === 200) {
        const token = data.data.access
        const decoded = jwtDecode(token)
        localStorage.setItem('accessToken', data.data.access)
        localStorage.setItem('refresh', data.data.refresh)
        dispatch(
          loginAction({
            user: decoded.userName,
            accessToken: data.data.access,
            refreshToken: data.data.refresh,
          })
        )
        toast.success('Logged in successfully')
        navigate('/home')
      } else {
        toast.error(data.data.detail + ' Please try again')
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message)
      console.log('error', error)
    },
  })

  return mutation
}
