function Card({ children, title, description }) {
  return (
    <div className="flex flex-col items-center gap-5 bg-secondary-300 p-9 ">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 ">
        {children}
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-text font-bold text-2xl">{title}</h1>
        <p className="text-text text-center">{description}</p>
      </div>
    </div>
  )
}

export default Card
