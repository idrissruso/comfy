import { useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../Api/methods'

const useGetProduct = () => {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const page = localStorage.getItem('page')
  const queryKey =
    page === 'featuredProducts' ? ['featuredProducts'] : ['products', page]

  const cachedData = queryClient.getQueryData(queryKey)
  const product = cachedData?.find((product) => product.id === parseInt(id))

  const {
    isLoading,
    isError,
    error,
    data: productData,
  } = useQuery(['product', id], () => getProductById(id), {
    initialData: product,
    enabled: !!id && !product,
  })

  return { isLoading, isError, error, productData }
}

export default useGetProduct
