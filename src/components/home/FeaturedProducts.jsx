import ProductCard from '../common/ProductCard'

const featuredProducts = [
  {
    name: 'sweets',
    image:
      'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDgzNTl8MHwxfHNlYXJjaHwyfHxzd2VldHN8ZW58MHx8fHwxNzAzNjIwODc1fDA&ixlib=rb-4.0.3&q=85',
    price: 854,
    code: 'SWE_6SNY9RNENB',
    alt_description: 'assorted donuts top of white area',
    description:
      'Satisfy your sweet cravings with our delectable assortment of donuts, elegantly captured in this image. The assorted donuts, with their tempting glazes and toppings, are a treat for the eyes and a delight for the taste buds. Indulge in the sweetness of life with this irresistible collection of assorted donuts.',
    category: 1,
    shipping: 8.99,
  },
  {
    name: 'chocolate',
    image:
      'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDgzNTl8MHwxfHNlYXJjaHw1fHxjaG9jb2xhdGV8ZW58MHx8fHwxNzAzNjIwODc2fDA&ixlib=rb-4.0.3&q=85',
    price: 772,
    code: 'CHO_UDJ5Y1Z9HD',
    alt_description: 'brown and white chocolate bars',
    description:
      'Experience the perfect harmony of flavors with our brown and white chocolate bars, beautifully captured in this image. This delightful combination promises a unique and satisfying chocolate experience. Indulge in the balance of sweetness and richness with this exquisite selection of chocolate bars.',
    category: 5,
    shipping: 6.99,
  },
  {
    name: 'cake',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NDgzNTl8MHwxfHNlYXJjaHwxfHxjYWtlfGVufDB8fHx8MTcwMzYyMDg3M3ww&ixlib=rb-4.0.3&q=85',
    price: 876,
    code: 'CAK_MIUQARJVUK',
    alt_description: 'baked cupcake',
    description:
      'Indulge in the exquisite taste of our meticulously crafted cake. With layers of moist sponge and decadent fillings, this masterpiece is a symphony of flavors. Each bite takes you on a journey of culinary delight, leaving a lingering sensation of sweetness on your palate. Perfect for celebrations or a delightful treat, our cake is a testament to the artistry of baking.',
    category: 1,
    shipping: 9.99,
  },
]

function FeaturedProducts() {
  return (
    <div className=" bg-primary-200 px-[11%] py-10">
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-text font-bold text-4xl">Featured Products</h1>
        <hr className=" w-20 h-1.5 bg-secondary-400" />
      </div>
      <div>
        <div className="grid grid-cols-3 gap-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.code} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts