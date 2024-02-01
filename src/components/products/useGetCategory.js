import { useQuery } from '@tanstack/react-query'
import { getCategoryById } from '../../Api/methods'

export function useGetCategory(id) {
  const { data, isLoading } = useQuery(['category', id], () =>
    getCategoryById(id)
  )
  return { data, isLoading }
}
