import Image from "next/image"
import Link from "next/link"
import React from "react"
import heroImg from "../public/heroImage.png"

const Hero = () => {
  return (
    <div className="bg-yellow-50/60 pb-24 md:pb-32 pt-36 px-2 md:px-16">
      <div className="max-w-[1440px] mx-auto lg:grid lg:grid-cols-2 gap-4 flex flex-col pt-8 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800">
            Kaunseling Untuk Semua
          </h1>
          <Link href="https://forms.gle/mzrqefnJKnSUeVGL6" target="_blank">
            <div className="mt-10 py-4 px-8 bg-yellow-200 w-full max-w-[400px] rounded-lg flex justify-center items-center font-semibold text-xl cursor-pointer hover:bg-yellow-300/60">
              <div className="">Schedule Appointment</div>
            </div>
          </Link>
        </div>
        <div className="w-[85%] md:w-[90%] lg:w-[95%] mx-auto">
          <Image
            src={heroImg}
            alt="hero image"
            className="rounded-xl mt-8 lg:mt-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
