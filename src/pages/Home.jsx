function Home() {
  return (
    <div className="flex justify-between min-h-[38rem]">
      <Header />
      <ImagesBox />
    </div>
  )
}

function Header() {
  return (
    <div className="w-1/2 text-white flex gap-3 flex-col items-center justify-center">
      <h1 className="text-text font-bold text-6xl mt-4 px-8">
        Indulge Your Sweet Tooth
      </h1>
      <p className="text-text font-normal text-lg mt-4 px-8 ">
        Welcome to Silhouette, your go-to place for a variety of delightful
        sweets. From doughnuts and chocolates to ice creams and cakes, our
        collection caters to all dessert lovers. Each treat is crafted with
        passion, perfect for gifting or satisfying your cravings. Experience the
        finest in confectionery with Silhouette.
      </p>
    </div>
  )
}

function ImagesBox() {
  return (
    <div className="w-1/2 relative">
      <img
        className="absolute w-[28rem] h-[35rem] right-0 z-40 bottom-10 rounded-md"
        src="images/image1.jpeg"
        alt="cakeImage"
      />
      <img
        className="absolute w-[15rem] left-5 bottom-10 rounded-md z-50"
        src="images/image2.jpeg"
        alt="kebabImage"
      />
      <img
        className="absolute w-[20rem] h-[30rem] left-20 bottom-10 rounded-md z-30 "
        src="images/image3.jpeg"
        alt="cakeImage"
      />
    </div>
  )
}

export default Home
