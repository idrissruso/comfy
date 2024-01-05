import Button from '../common/Button'

export function Header() {
  return (
    <div className=" flex-1 lg:w-1/2 text-white flex gap-5 flex-col  lg:justify-center">
      <h1 className="text-text font-bold lg:text-7xl text-5xl mt-4">
        Indulge Your Sweet Tooth
      </h1>
      <p className="text-text font-thin text-lg mt-4 leading-9">
        Welcome to Silhouette, your one-stop shop for a wide range of sweets.
        Our carefully crafted treats cater to all dessert lovers, perfect for
        gifting or indulging your sweet tooth. Experience the best in
        confectionery with Silhouette.
      </p>
      <div className="self-start">
        <Button text="Shop Now" size="lg" type="primary" />
      </div>
    </div>
  )
}
