import Button from '../components/common/Button'
import Header from '../components/common/Header'
import LoadImgBox from '../components/common/LoadImgBox'
import StarsRating from '../components/common/StarsRating'
import IndexVal from '../components/products/IndexVal'
import Buttons from '../components/products/Buttons'

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
          <div className="flex flex-col gap-1">
            <h2 className="text-3xl font-bold mt-8">Cake</h2>
            <StarsRating />
            <span className="text-secondary-400 font-semibold text-xl">
              $10
            </span>
          </div>
          <p className="mt-4 text-textLight leading-8">
            Welcome to Silhouette, a culinary haven nestled in the heart of the
            city. Our restaurant offers an eclectic menu inspired by global
            flavors. Each dish is meticulously crafted by our skilled chefs,
            using locally sourced, fresh ingredients.
          </p>
          <IndexVal stock={'In Stock'} brand={'Nur'} code={'Khytvy12YGbbnj'} />
          <hr className="border-1 height-[1px] my-5" />
          <div className="flex flex-col gap-5 my-5">
            <Buttons />
            <div>
              <Button text={'Add to Cart'} size={'sm'} type={'primary'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
