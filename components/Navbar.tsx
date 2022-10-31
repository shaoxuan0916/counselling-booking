import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="shadow-md fixed w-full z-10 bg-white">
      <div className="max-w-[1440px] py-2 px-2 md:px-8 mx-auto h-[80px] flex justify-between items-center text-3xl">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
          Hope Counselling
        </h1>

        <Link href="https://forms.gle/mzrqefnJKnSUeVGL6" target="_blank">
          <div className="bg-yellow-300/60 px-4 sm:px-10 py-2 md:py-3 text-xl text-gray-900 font-semibold rounded-md hover:bg-yellow-300/80">
            <p>Book Now</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
