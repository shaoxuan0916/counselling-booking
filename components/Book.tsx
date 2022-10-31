import React from "react"
import Image from "next/image"
import book1 from "../public/book1.png"
import book2 from "../public/book2.png"
import book3 from "../public/book3.png"
import book4 from "../public/book4.png"
import book5 from "../public/book5.png"
import book6 from "../public/book6.png"
import Link from "next/link"

const Book = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-8 pt-16 pb-16">
        <div className="">
          <h3 className="text-xl md:text-2xl text-center text-gray-700">
            Mempunyai sebarang isu di bawah?
          </h3>
          <h3 className="text-3xl md:text-4xl text-center font-semibold mt-4 text-gray-800">
            Tempah sesi anda sekarang !
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-16 lg:md-8 items-center justify-center sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-6 mt-16">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[120px] h-[120px]">
              <Image src={book1} alt="book1" />
            </div>
            <h5 className="text-xl font-semibold">Tertekan</h5>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[120px] h-[120px]">
              <Image src={book2} alt="book2" />
            </div>
            <h5 className="text-xl font-semibold">Gangguan Kebimbangan</h5>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[120px] h-[120px]">
              <Image src={book3} alt="book3" />
            </div>
            <h5 className="text-xl font-semibold">Insomnia</h5>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[120px] h-[120px]">
              <Image src={book4} alt="book4" />
            </div>
            <h5 className="text-xl font-semibold">Isu Perhubungan</h5>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[120px] h-[120px]">
              <Image src={book5} alt="book5" />
            </div>
            <h5 className="text-xl font-semibold">Stress Terlampau</h5>
          </div>
          <div className="flex flex-col items-center justify-center text-center">
            <div className="rouded-full w-[120px] h-[120px]">
              <Image src={book6} alt="book6" />
            </div>
            <h5 className="text-xl font-semibold">Kurang Keyakinan</h5>
          </div>
        </div>

        <div className="">
          <Link href="https://forms.gle/mzrqefnJKnSUeVGL6" target="_blank">
            <div className="bg-yellow-300/60 px-4 sm:px-10 py-2 md:py-4 text-xl text-center mt-16 text-gray-900 font-semibold rounded-md hover:bg-yellow-300/80">
              <p>Book Now</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Book
