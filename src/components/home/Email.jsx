import { useState } from 'react'

function Email() {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="p-[11%]">
      <h1 className=" text-4xl font-semibold text-text">
        Join Our Newsletter and Get 20% Off
      </h1>
      <div className="flex items-center justify-between mt-7 gap-8 md:flex-nowrap flex-wrap">
        <p className=" text-textLight leading-9 md:flex-1">
          Subscribe to our newsletter for exclusive discounts product updates
          and get 20% off instantly! We promise not to spam you, we send 1-2
        </p>
        <div className="flex-1">
          <input
            value={email}
            onChange={handleChange}
            type="text"
            placeholder="Enter your email address"
            className="w-[70%] h-[3rem] border border-gray-200 rounded-l-lg px-4 focus:outline-none"
          />
          <button className="w-[30%] h-[3rem] bg-secondary-400 text-secondary-500 rounded-r-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Email
