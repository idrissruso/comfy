import { useMutation } from 'react-query'
import { login } from '../Api/methods'

export function useLogin({ email, password }) {
  return useMutation({
    mutationFn: () => login({ email, password }),
    onSuccess: (data) => {
      console.log('Login success:', data)
    },
    onError: (error) => {
      console.error('Login error:', error)
    },
  })
}
