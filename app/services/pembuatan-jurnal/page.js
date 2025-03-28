import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BookOpen, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PembuatanJurnalPage() {
  const features = [
    "Desain dan pengembangan website jurnal",
    "Pengaturan sistem OJS (Open Journal Systems)",
    "Penyusunan kebijakan dan pedoman jurnal",
    "Pembentukan tim editorial",
    "Strategi pemasaran dan promosi jurnal",
    "Pendaftaran ISSN dan DOI",
  ]

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-blue-800 rounded-full mb-6">
            <BookOpen className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Pembuatan Jurnal</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Layanan untuk membuat jurnal dari awal hingga siap publikasi dengan standar kualitas internasional
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pembuatan Jurnal"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Wujudkan Jurnal Berkualitas Internasional</h2>
              <p className="text-lg text-gray-600 mb-6">
                Memulai jurnal baru membutuhkan perencanaan yang matang dan pemahaman mendalam tentang standar publikasi
                ilmiah. Layanan pembuatan jurnal kami membantu Anda membangun jurnal dari awal dengan standar kualitas
                internasional.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Tim kami akan membantu dalam setiap aspek pembuatan jurnal, mulai dari perencanaan konsep, pengembangan
                platform, hingga strategi untuk mendapatkan kontributor dan pembaca.
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
            <h2 className="text-3xl font-bold text-gray-900">Fitur Layanan Pembuatan Jurnal</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Layanan komprehensif untuk membangun jurnal berkualitas dari awal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-lg text-gray-700">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tahapan Pembuatan Jurnal</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Proses pembuatan jurnal yang sistematis dan terstruktur
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300"></div>
            </div>

            <div className="relative flex justify-between">
              <div className="text-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white mx-auto">
                  1
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Perencanaan</h3>
              </div>

              <div className="text-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white mx-auto">
                  2
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Pengembangan</h3>
              </div>

              <div className="text-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white mx-auto">
                  3
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Implementasi</h3>
              </div>

              <div className="text-center">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-800 text-white mx-auto">
                  4
                </span>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Peluncuran</h3>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Perencanaan</h3>
              <p className="text-gray-600">
                Pada tahap ini, kami akan membantu Anda menentukan fokus dan ruang lingkup jurnal, target pembaca,
                kebijakan editorial, dan struktur organisasi jurnal. Kami juga akan melakukan analisis pasar untuk
                memastikan jurnal Anda memiliki posisi yang unik.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. Pengembangan</h3>
              <p className="text-gray-600">
                Tahap pengembangan meliputi pembuatan website jurnal, pengaturan sistem OJS, desain template artikel,
                dan penyusunan pedoman untuk penulis dan reviewer. Kami juga akan membantu dalam proses pendaftaran ISSN
                dan DOI.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Implementasi</h3>
              <p className="text-gray-600">
                Pada tahap implementasi, kami akan membantu dalam pembentukan tim editorial, pelatihan untuk pengelola
                jurnal, dan pengembangan strategi untuk mendapatkan artikel berkualitas. Kami juga akan membantu dalam
                pengaturan proses review dan publikasi.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Peluncuran</h3>
              <p className="text-gray-600">
                Tahap akhir adalah peluncuran jurnal, yang meliputi strategi pemasaran dan promosi untuk memperkenalkan
                jurnal kepada komunitas akademik. Kami juga akan memberikan dukungan pasca-peluncuran untuk memastikan
                keberlanjutan jurnal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Memulai Jurnal Baru?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan rencana pembuatan jurnal Anda dengan tim ahli kami dan dapatkan solusi terbaik
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

