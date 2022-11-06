import Image from "next/image"
import React from "react"
import person1 from "../public/person1.jpg"
import person2 from "../public/person2.jpg"
import person3 from "../public/person3.png"

const Counsellor = () => {
  return (
    <div className="bg-yellow-50/60 pb-24 pt-24 px-2 md:px-16">
      <div className="max-w-[1440px] mx-auto pt-8">
        <div className="flex justify-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-4xl text-center font-semibold text-gray-800">
            Counsellor
          </h3>
        </div>

        <div className="flex flex-col gap-16 lg:md-8 items-center justify-center lg:grid lg:grid-cols-3">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <Image
                src={person1}
                alt="person1"
                className="object-responsive rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800 mt-4">
              Siti Natrah binti Zulkifli
            </h5>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <Image
                src={person2}
                alt="person2"
                className="object-responsive rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800 mt-4">
              Wong Bei Yi
            </h5>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <Image
                src={person3}
                alt="person3"
                className="object-responsive rounded-full w-[180px] h-[180px]"
              />
            </div>
            <h5 className="text-xl font-semibold text-gray-800 mt-4">
              Nursyahirah binti Che Razak@Mohamad Zaid
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Counsellor
