import { useEffect, useState } from 'react'

export function ImagesBox() {
  const [isLoaded1, setIsLoaded1] = useState(false)
  const [isLoaded2, setIsLoaded2] = useState(false)
  const [isLoaded3, setIsLoaded3] = useState(false)

  useEffect(() => {
    const img1 = new Image()
    img1.src = 'images/image1.jpeg'
    img1.onload = () => setIsLoaded1(true)
    const img2 = new Image()
    img2.src = 'images/image2.jpeg'
    img2.onload = () => setIsLoaded2(true)
    const img3 = new Image()
    img3.src = 'images/image3.jpeg'
    img3.onload = () => setIsLoaded3(true)
  }, [])

  return (
    <div className="w-1/2 relative hidden lg:block">
      <div
        className={`img-div rounded-md w-[28rem] absolute h-[35rem] right-0 z-40 bottom-10 ${
          isLoaded1 ? 'no-after' : ''
        }`}
      >
        {isLoaded1 && (
          <img
            loading="lazy"
            className="rounded-md block w-full h-full"
            src="images/image1.jpeg"
            alt="cakeImage"
          />
        )}
      </div>
      <div
        className={`img-div rounded-md w-[15rem] absolute  left-5 bottom-10 z-50 lg:left-2 ${
          isLoaded2 ? 'no-after' : ''
        }
      }`}
      >
        {isLoaded2 && (
          <img
            loading="lazy"
            className="rounded-md block w-full h-full"
            src="images/image2.jpeg"
            alt="cakeImage"
          />
        )}
      </div>
      <div
        className={`img-div rounded-md w-[20rem] h-[30rem] absolute left-20 bottom-10 z-30 ${
          isLoaded3 ? 'no-after' : ''
        }`}
      >
        {isLoaded3 && (
          <img
            loading="lazy"
            className="rounded-md block w-full h-full"
            src="images/image3.jpeg"
            alt="cakeImage"
          />
        )}
      </div>
    </div>
  )
}
