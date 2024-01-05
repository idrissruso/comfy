import { useEffect, useState } from 'react'

function LoadImgBox({ src, alt, params, width, height }) {
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
  console.log(isLoaded)

  return (
    <div
      className={`relative  img-box rounded-md overflow-hidden w-[${width}] h-[${height}] ${
        isLoaded ? 'no-after bg-transparent' : 'bg-secondary-400'
      } ${params}`}
    >
      {isLoaded && (
        <img
          loading="lazy"
          className="rounded-md block w-full h-full object-cover object-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl hover:brightness-50 back-dace-visibility"
          src={src}
          alt={alt}
        />
      )}
    </div>
  )
}

LoadImgBox.defaultProps = {
  width: '100%',
  height: '100%',
  params: '',
}

export default LoadImgBox
