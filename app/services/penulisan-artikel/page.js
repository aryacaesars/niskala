import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Edit, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PenulisanArtikelPage() {
  const services = [
    {
      title: "Pendampingan Penulisan",
      description: "Bantuan langsung dalam proses penulisan artikel ilmiah dari awal hingga akhir",
    },
    {
      title: "Review dan Editing",
      description: "Evaluasi menyeluruh dan perbaikan artikel yang sudah ada",
    },
    {
      title: "Analisis Data",
      description: "Bantuan dalam menganalisis dan menyajikan data penelitian",
    },
    {
      title: "Pelatihan Penulisan",
      description: "Workshop dan pelatihan untuk meningkatkan kemampuan menulis artikel ilmiah",
    },
    {
      title: "Strategi Publikasi",
      description: "Konsultasi untuk memilih jurnal yang tepat dan strategi publikasi",
    },
    {
      title: "Terjemahan Artikel",
      description: "Layanan terjemahan artikel ke dalam bahasa Inggris atau bahasa lainnya",
    },
  ]

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-blue-800 rounded-full mb-6">
            <Edit className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Pendampingan Penulisan Artikel</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Bantuan dalam menulis dan menyusun artikel ilmiah yang memenuhi standar publikasi jurnal bereputasi
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Wujudkan Artikel Ilmiah Berkualitas Tinggi</h2>
              <p className="text-lg text-gray-600 mb-6">
                Menulis artikel ilmiah yang berkualitas dan memenuhi standar jurnal bereputasi membutuhkan keterampilan
                khusus dan pemahaman mendalam tentang metodologi penelitian. Layanan pendampingan penulisan artikel kami
                hadir untuk membantu Anda menghasilkan artikel ilmiah yang berkualitas tinggi.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Tim ahli kami akan membantu Anda dalam setiap tahap penulisan artikel, mulai dari perumusan ide,
                penyusunan kerangka, hingga finalisasi artikel yang siap untuk dipublikasikan di jurnal bereputasi.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Konsultasi Sekarang
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Pendampingan Penulisan Artikel"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Layanan Pendampingan Penulisan Artikel</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan untuk membantu Anda dalam penulisan artikel ilmiah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Mengapa Memilih Layanan Kami?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan layanan pendampingan penulisan artikel kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tim Ahli Berpengalaman</h3>
                  <p className="text-gray-600">
                    Tim kami terdiri dari para ahli dengan pengalaman luas dalam penulisan dan publikasi artikel ilmiah
                    di berbagai jurnal bereputasi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Pendekatan Personalisasi</h3>
                  <p className="text-gray-600">
                    Kami menyediakan pendampingan yang disesuaikan dengan kebutuhan spesifik Anda, baik dari segi topik,
                    metodologi, maupun target jurnal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Standar Kualitas Tinggi</h3>
                  <p className="text-gray-600">
                    Kami berkomitmen untuk membantu Anda menghasilkan artikel yang memenuhi standar kualitas tertinggi
                    dan siap untuk dipublikasikan di jurnal bereputasi.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dukungan Komprehensif</h3>
                  <p className="text-gray-600">
                    Kami memberikan dukungan dari awal hingga akhir proses, termasuk bantuan dalam menanggapi komentar
                    reviewer dan revisi artikel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Menulis Artikel Berkualitas?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan penulisan artikel Anda dengan tim ahli kami dan dapatkan solusi terbaik
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

