import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '../../Api/methods'
import Loader from '../common/Loader'

function Tracker() {
  const { page: currentPage = 3 } = useParams()
  const [page, setPage] = useState(Number(currentPage))
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['all'],
    queryFn: () => getProducts(),
    staleTime: 0,
  })

  function nextPage() {
    setPage((prev) => (prev >= 3 ? 1 : prev + 1))
  }

  function prevPage() {
    setPage((prev) => (prev <= 1 ? 3 : prev - 1))
  }

  function changePage(value) {
    setPage(value)
  }

  if (isError) return <div>{error.message}</div>

  if (isLoading) return <Loader />

  const totalPages = Math.ceil(data?.length / 15)

  return (
    <form
      action={`${page}`}
      method="get"
      className="flex bg-text self-end rounded-lg text-white mt-5"
    >
      <Page currentPage={currentPage} page={page} onClick={prevPage}>
        Prev
      </Page>
      {[...Array(totalPages)].map((_, index) => (
        <Page
          key={index}
          currentPage={currentPage}
          page={index + 1}
          setCurrentPage={changePage}
        >
          {index + 1}
        </Page>
      ))}
      <Page currentPage={currentPage} page={page} onClick={nextPage}>
        Next
      </Page>
    </form>
  )
}

function Page({ children, onClick, setCurrentPage, page, currentPage }) {
  return (
    <button
      type="submit"
      className={`shrink hover:bg-textDarker flex-1 flex justify-center px-3 py-2 cursor-pointer uppercase ${
        children === 'Prev'
          ? 'rounded-l-lg'
          : children === 'Next'
          ? 'rounded-r-lg'
          : ''
      } ${
        currentPage &&
        children &&
        currentPage.toString() === children.toString()
          ? 'bg-textDarker'
          : ''
      } transition-all duration-300`}
      onClick={() => {
        onClick ? onClick() : setCurrentPage(children)
      }}
    >
      {children}
    </button>
  )
}

export default Tracker
