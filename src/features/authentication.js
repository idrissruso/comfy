import { useMutation } from '@tanstack/react-query'
import { login } from '../Api/methods'

export function useLogin(name, password) {
  return useMutation(() => login(name, password))
}
