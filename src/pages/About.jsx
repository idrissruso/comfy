import { useNavigate } from 'react-router-dom'
import LoadImgBox from '../components/common/LoadImgBox'

function About() {
  const navigator = useNavigate()
  function handleClick() {
    navigator('/')
  }

  return (
    <div>
      <header className="bg-secondary-200 px-[11%] py-6">
        <h1 className=" text-2xl font-bold ">
          <span
            onClick={handleClick}
            className="cursor-pointer text-secondary-400"
          >
            Home/
          </span>
          <span className="text-secondary-500 cursor-pointer">About</span>
        </h1>
      </header>
      <div className="grid grid-cols-2 px-[11%] py-[5rem] gap-10">
        <LoadImgBox
          src="https://images.unsplash.com/photo-1626424352807-0b8b5b9d5b4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZCUyMGNvbG9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
          alt="about"
          size="lg"
        />

        <div>
          <h2 className="text-3xl font-bold mt-8">About Us</h2>
          <hr className=" mt-4 mb-8 w-20 h-1 bg-secondary-400 rounded-full" />
          <p className="mt-4 text-textLight leading-8">
            Welcome to Silhouette, a culinary haven nestled in the heart of the
            city. Our restaurant offers an eclectic menu inspired by global
            flavors. Each dish is meticulously crafted by our skilled chefs,
            using locally sourced, fresh ingredients. Our warm and inviting
            ambiance, coupled with our commitment to exceptional service,
            promises an unforgettable dining experience. Join us at Silhouette,
            where good food meets passion. We look forward to serving you and
            making your dining experience a memorable one.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
