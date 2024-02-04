import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../Api/methods'

export function useGetCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  })
  return { data, isLoading }
}
