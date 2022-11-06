import Image from "next/image"
import React from "react"
import how1 from "../public/how1.png"
import how2 from "../public/how2.png"
import how3 from "../public/how3.png"

const More = () => {
  return (
    <div className="bg-yellow-50/60 pb-24 pt-24 px-2 md:px-16">
      <div className="max-w-[1440px] mx-auto pt-8">
        <div className="flex justify-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-4xl text-center font-semibold text-gray-800">
            Bagaimana untuk mendaftar ?
          </h3>
        </div>

        <div className="flex flex-col gap-16 lg:md-8 items-center justify-center lg:grid lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[180px] h-[180px]">
              <Image src={how1} alt="person1" />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">
              1. Mengisi borang Google Form
            </h5>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[180px] h-[180px]">
              <Image src={how2} alt="person2" />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">
              2. Pengesahan melalui WhatsApp
            </h5>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[180px] h-[180px]">
              <Image src={how3} alt="person3" />
            </div>
            <h5 className="text-xl font-semibold text-gray-800">
              3. Mulakan Sesi
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default More
