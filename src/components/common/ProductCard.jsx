import LoadImgBox from './LoadImgBox'

function ProductCard({ product }) {
  return (
    <div>
      <div className="">
        <LoadImgBox
          src={product.image}
          alt={'product.name'}
          width={'23rem'}
          height={'15rem'}
          params={
            'hover:backdrop-blur-md transition-all duration-300 ease-in-out'
          }
        />
      </div>
      <dir></dir>
    </div>
  )
}

export default ProductCard
