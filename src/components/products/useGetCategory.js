import { useQuery } from '@tanstack/react-query'
import { getCategoryById } from '../../Api/methods'

export function useGetCategory(id) {
  const { data, isLoading } = useQuery({
    queryKey: ['category', id],
    queryFn: () => getCategoryById(id),
    config: {
      enabled: !!id,
    },
  })
  return { data, isLoading }
}
