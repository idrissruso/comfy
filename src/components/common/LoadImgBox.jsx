import { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'

function LoadImgBox({ src, alt, params, width, height, onClick }) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      if (img.complete) {
        setIsLoaded(true)
      }
    }
  }, [isLoaded, src])
  console.log(width, height)

  return (
    <div
      className={`group relative flex items-center justify-center img-box rounded-md overflow-hidden h-[15rem] ${
        isLoaded ? 'no-after bg-transparent' : 'bg-secondary-400'
      } ${params}`}
    >
      {isLoaded && (
        <img
          loading="lazy"
          className="rounded-md block w-full h-full object-cover object-center cursor-pointer group-hover:scale-105 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:brightness-50 back-face-visibility"
          src={src}
          alt={alt}
        />
      )}
      <span
        className="z-50 bg-secondary-400 flex justify-center items-center absolute rounded-full p-1.5 opacity-0
         translate-y-[100%] transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer"
        onClick={() => onClick?.()}
      >
        <BiSearch className="text-2xl text-white back-face-visibility" />
      </span>
    </div>
  )
}

LoadImgBox.defaultProps = {
  width: '100%',
  height: '100%',
  params: '',
}

export default LoadImgBox
