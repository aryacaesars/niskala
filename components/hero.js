import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative bg-blue-900 overflow-hidden">
      {/* Gambar Latar Belakang */}
      <div className="absolute inset-0 opacity-70">
        <Image
          src="/bg.jpg"
          alt="Academic services illustration"
          layout="fill" // Memastikan gambar memenuhi container
          objectFit="cover" // Memastikan gambar tidak terpotong dan tetap proporsional
          priority // Memuat gambar lebih cepat
          className="opacity-80"
        />
      </div>

      {/* Overlay Biru */}
      <div className="absolute inset-0 bg-blue-900 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Solusi Terbaik untuk</span>
                  <span className="block text-blue-200">Publikasi Akademik Anda</span>
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Kami menyediakan layanan pendampingan akreditasi jurnal, pembuatan jurnal, penulisan artikel,
                  pembuatan book chapter, dan layanan OJS untuk kebutuhan akademik Anda.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
                    >
                      Konsultasi Gratis
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 md:py-4 md:text-lg md:px-10"
                    >
                      Lihat Layanan
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}