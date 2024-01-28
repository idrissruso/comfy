import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

function LoadImgBox({ src, alt, params, size, id, noHover = false }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/product/${id}`)
  }

  const sizes = {
    sm: 'h-[9rem] w-[10rem] ',
    md: 'h-[25rem] w-full',
    lg: 'h-[30rem] w-full',
    xl: 'h-[35rem] w-full ',
  }

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setIsLoaded(true)
    }
  }, [isLoaded, src])

  return (
    <div
      className={`group relative flex items-center justify-center img-box rounded-md overflow-hidden ${
        sizes[size]
      } ${isLoaded ? 'no-after bg-transparent' : 'bg-secondary-400'} ${params}
      ${noHover ? 'pointer-events-none' : ''}
      `}
    >
      {isLoaded ? (
        <img
          className="rounded-md block w-full h-full object-cover object-center cursor-pointer group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:brightness-50 back-face-visibility"
          src={src}
          alt={alt}
        />
      ) : (
        <Spinner isLoading={true} />
      )}
      <span
        className="z-50 bg-secondary-400 flex justify-center items-center absolute rounded-full p-1.5 opacity-0
         translate-y-[100%] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
        onClick={() => handleClick()}
      >
        <BiSearch className="text-2xl text-white back-face-visibility" />
      </span>
    </div>
  )
}

LoadImgBox.defaultProps = {
  params: '',
  size: 'md',
}

export default LoadImgBox
