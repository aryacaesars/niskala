import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Award, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AkreditasiJurnalPage() {
  const benefits = [
    "Peningkatan kualitas dan reputasi jurnal",
    "Pendampingan oleh tim ahli berpengalaman",
    "Proses akreditasi yang lebih cepat dan efisien",
    "Konsultasi dan evaluasi menyeluruh",
    "Pelatihan untuk tim editorial jurnal",
    "Dukungan pasca-akreditasi",
  ]

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-blue-800 rounded-full mb-6">
            <Award className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Pendampingan Akreditasi Jurnal</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Membantu jurnal Anda dalam proses akreditasi dengan pendampingan profesional dan komprehensif
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tingkatkan Kualitas dan Reputasi Jurnal Anda</h2>
              <p className="text-lg text-gray-600 mb-6">
                Akreditasi jurnal merupakan pengakuan resmi atas kualitas dan kredibilitas sebuah jurnal ilmiah. Dengan
                mendapatkan akreditasi, jurnal Anda akan mendapatkan pengakuan yang lebih luas dan meningkatkan
                kepercayaan dari komunitas akademik.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Tim kami yang berpengalaman akan membantu Anda dalam setiap tahap proses akreditasi, mulai dari
                persiapan dokumen, evaluasi kualitas, hingga pengajuan dan pendampingan selama proses review.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
              >
                Konsultasi Sekarang
              </Link>
            </div>
        <div className="relative w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/ojs-hero.jpg"
              alt="Academic collaboration"
              layout="fill" // Memastikan gambar memenuhi container
              objectFit="cover" // Memastikan gambar tidak terpotong dan tetap proporsional
              className="rounded-lg"
            />
          </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Manfaat Pendampingan Akreditasi Jurnal</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Dapatkan berbagai keuntungan dengan menggunakan layanan pendampingan akreditasi jurnal kami
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
            <h2 className="text-3xl font-bold text-gray-900">Proses Pendampingan Akreditasi</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan pendampingan menyeluruh dalam setiap tahap proses akreditasi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Evaluasi Awal</h3>
              <p className="text-gray-600">
                Menganalisis kondisi jurnal saat ini dan mengidentifikasi area yang perlu ditingkatkan
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Penyusunan Dokumen</h3>
              <p className="text-gray-600">Membantu menyiapkan semua dokumen yang diperlukan untuk proses akreditasi</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pengajuan</h3>
              <p className="text-gray-600">Mendampingi proses pengajuan akreditasi ke lembaga terkait</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pendampingan Lanjutan</h3>
              <p className="text-gray-600">Memberikan dukungan selama proses review dan tindak lanjut</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Meningkatkan Kualitas Jurnal Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan akreditasi jurnal Anda dengan tim ahli kami dan dapatkan solusi terbaik
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

