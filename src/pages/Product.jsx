import Button from '../components/common/Button'
import Header from '../components/common/Header'
import LoadImgBox from '../components/common/LoadImgBox'
import StarsRating from '../components/common/StarsRating'

function Product() {
  return (
    <div className="mx-[11%] space-y-5">
      <Header path={'Product/Cake'} />
      <Button text={'Back to All Products'} size={'sm'} type={'primary'} />
      <div className="grid md:grid-cols-2 gap-10 ">
        <div>
          <LoadImgBox
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDgzNTl8MHwxfHNlYXJjaHwxfHxjYWtlfGVufDB8fHx8MTcwMzYyMDg3M3ww&ixlib=rb-4.0.3&q=85"
            alt="about"
            size="md"
            noHover={true}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mt-8">Cake</h2>
          <hr className=" mt-4 mb-8 w-20 h-1 bg-secondary-400 rounded-full" />
          <StarsRating />
          <span className="text-secondary-400 font-semibold">$10</span>
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

export default Product
