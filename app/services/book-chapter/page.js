import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BookText, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BookChapterPage() {
  const benefits = [
    "Meningkatkan reputasi akademik",
    "Memperluas jaringan kolaborasi",
    "Menjangkau audiens yang lebih luas",
    "Kontribusi pada perkembangan ilmu pengetahuan",
    "Dokumentasi penelitian dalam format buku",
    "Potensi sitasi yang lebih tinggi",
  ]

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-blue-800 rounded-full mb-6">
            <BookText className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Pembuatan Book Chapter</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Layanan pembuatan dan publikasi book chapter dengan pendampingan dari tim ahli kami
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pembuatan Book Chapter"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Publikasikan Penelitian Anda dalam Format Book Chapter
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Book chapter merupakan salah satu bentuk publikasi ilmiah yang memungkinkan peneliti untuk
                mempublikasikan hasil penelitiannya dalam format buku. Publikasi dalam bentuk book chapter memiliki
                berbagai keunggulan, termasuk jangkauan audiens yang lebih luas dan potensi sitasi yang lebih tinggi.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Layanan pembuatan book chapter kami menyediakan pendampingan menyeluruh dalam proses penulisan,
                penyuntingan, dan publikasi book chapter, sehingga Anda dapat fokus pada konten penelitian tanpa harus
                khawatir tentang aspek teknis publikasi.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Mulai Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Manfaat Publikasi Book Chapter</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Keuntungan mempublikasikan penelitian dalam format book chapter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Proses Pembuatan Book Chapter</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Tahapan dalam pembuatan dan publikasi book chapter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Perencanaan</h3>
              <p className="text-gray-600">Menentukan topik, ruang lingkup, dan target pembaca book chapter</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Penulisan</h3>
              <p className="text-gray-600">Menulis konten book chapter dengan pendampingan dari tim ahli</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Review & Editing</h3>
              <p className="text-gray-600">Proses review dan penyuntingan untuk memastikan kualitas konten</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Publikasi</h3>
              <p className="text-gray-600">Proses publikasi book chapter dengan penerbit bereputasi</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Mempublikasikan Penelitian Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan publikasi book chapter Anda dengan tim ahli kami dan dapatkan solusi terbaik
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100"
            >
              Hubungi Kami
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
            >
              Layanan Lainnya
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

