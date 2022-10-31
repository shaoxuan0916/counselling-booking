import React from "react"
import Image from "next/image"
import about1 from "../public/about1.jpg"
import about2 from "../public/about2.jpg"

const About = () => {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-8 pt-24 pb-24">
        <div className="flex justify-center">
          <h3 className="text-gray-800 text-3xl md:text-4xl lg:text-4xl text-center font-semibold">
            Apa itu Bimbingan & Kaunseling?
          </h3>
        </div>

        <div className="flex flex-col items-start lg:pl-8 xl:pl-16 gap-8">
          <div className="flex flex-col md:flex-row items-center mt-12">
            <div className="w-[150px] sm:w-[200px] mr-8 mb-8 md:mb-0">
              <Image src={about1} alt="about1" />
            </div>
            <div className="">
              <h5 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
                Bimbingan ialah memberi panduan atau nasihat kepada seseorang.
              </h5>
              <p className="text-lg ">
                Kaunseling merupakan satu proses menolong di antara klien dan
                kaunselor, untuk memahami dirinya dan situasinya yang sebenar.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center mt-8">
            <div className="w-[150px] sm:w-[200px] mr-8 mb-8 md:mb-0">
              <Image src={about2} alt="about2" />
            </div>
            <div className="">
              <h5 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
                Sejauh mana keberkesanan kaunseling yang diberikan?
              </h5>
              <p className="text-lg">
                Bergantung kepada sejauh mana perubahan yang dikehendaki oleh
                individu yang mendapatkan khidmat kaunseling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
