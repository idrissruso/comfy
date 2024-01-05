import { GiCompass } from 'react-icons/gi'
import { GiDiamondHard } from 'react-icons/gi'
import { GiCutDiamond } from 'react-icons/gi'

import Card from './card'

function Mission() {
  return (
    <div className=" bg-secondary-100 px-[11%] pt-[6rem]">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-secondary-500">
          Crafting Culinary Moments With Your Lovers
        </h1>
        <p className="">
          Indulge in the sweetness of life with our irresistible selection of
          desserts.make your moments memorable with your beloved ones.
        </p>
      </div>
      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 mt-[6rem] h-[15rem]">
          <Card
            title="Mission"
            description="Crafting unforgettable culinary experiences tailored just for you, with the finest ingredients and the most delectable flavors. We are committed to delivering the highest quality products and services, with a focus on exceptional customer service and satisfaction."
          >
            <GiCompass size={40} />
          </Card>
          <Card
            title="Vision"
            description="To be the most loved and trusted brand, delivering the most delectable culinary experiences to our customers.Envisioning a place where every flavor tells a unique story, creating cherished memories..., one bite at a time."
          >
            <GiDiamondHard size={40} />
          </Card>
          <Card
            title="Values"
            description="We are committed to delivering the highest quality products and services, with a focus on exceptional customer service and satisfaction. We strive to create a positive and memorable experience for our customers, through our products and services."
          >
            <GiCutDiamond size={40} />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Mission
