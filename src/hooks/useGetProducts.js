import { useQuery } from '@tanstack/react-query'
import { getProductByPage, getProductsByCategory } from '../Api/methods'

export default function useGetProducts(page, category) {
  const {
    isLoading: isLoading1,
    isError,
    error,
    data,
    isSuccess,
  } = useQuery({
    queryKey: ['products', page?.toString()],
    queryFn: () => getProductByPage(page),
    staleTime: 0,
    enabled: category === 'All',
  })

  const {
    isLoading: isLoading2,
    isError: isError2,
    error: error2,
    data: data2,
    isSuccess: isSuccess2,
  } = useQuery({
    queryKey: ['products', category, page?.toString()],
    queryFn: () => getProductsByCategory(category),
    enabled: category !== 'All',
    staleTime: 0,
  })

  return {
    isLoading: isLoading1 || isLoading2,
    isError: isError || isError2,
    error: error || error2,
    data1: data,
    data2,
    isSuccess1: isSuccess,
    isSuccess2,
  }
}
