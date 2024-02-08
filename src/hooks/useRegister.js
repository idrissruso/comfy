import { useMutation } from '@tanstack/react-query'
import { register } from '../Api/methods'
import toast from 'react-hot-toast'

export default function useRegister() {
  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      if (data.status === 200) {
        toast.success('Registered successfully')
        window.location.reload()
      } else {
        const messages = data.data.message
        for (const message in messages) {
          toast.error(`${message}: ${messages[message]}`)
        }
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message)
      console.log('error', error)
    },
  })
  return { mutate, isPending }
}
