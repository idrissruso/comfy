import Button from '../components/common/Button'
import Header from '../components/common/Header'

function Product() {
  return (
    <div>
      <Header path={'Product/Cake'} />
      <Button text={'Back to All Products'} size={'sm'} type={'primary'} />
    </div>
  )
}

export default Product
