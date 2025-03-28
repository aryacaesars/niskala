import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Server, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function OJSServicePage() {
  const services = [
    {
      title: "Instalasi & Konfigurasi OJS",
      description: "Instalasi dan konfigurasi sistem OJS sesuai dengan kebutuhan jurnal Anda",
    },
    {
      title: "Migrasi Data",
      description: "Migrasi data dari sistem lama ke sistem OJS baru",
    },
    {
      title: "Kustomisasi Tampilan",
      description: "Kustomisasi tampilan website jurnal sesuai dengan identitas jurnal",
    },
    {
      title: "Pelatihan Pengelolaan",
      description: "Pelatihan untuk tim editorial dalam mengelola sistem OJS",
    },
    {
      title: "Pemeliharaan & Dukungan",
      description: "Layanan pemeliharaan dan dukungan teknis untuk sistem OJS",
    },
    {
      title: "Upgrade Sistem",
      description: "Upgrade sistem OJS ke versi terbaru dengan migrasi data yang aman",
    },
  ]

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-3 bg-blue-800 rounded-full mb-6">
            <Server className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">OJS Service</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Bantuan dalam pengelolaan Open Journal Systems (OJS) untuk jurnal online Anda
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimalkan Pengelolaan Jurnal Online Anda</h2>
              <p className="text-lg text-gray-600 mb-6">
                Open Journal Systems (OJS) adalah platform pengelolaan jurnal online yang populer dan banyak digunakan
                oleh jurnal-jurnal di seluruh dunia. OJS menyediakan berbagai fitur untuk memudahkan proses pengelolaan
                jurnal, mulai dari pengajuan artikel, review, hingga publikasi.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Layanan OJS kami menyediakan solusi komprehensif untuk membantu Anda mengoptimalkan penggunaan OJS dalam
                pengelolaan jurnal online Anda, mulai dari instalasi, konfigurasi, hingga pemeliharaan dan dukungan
                teknis.
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
                alt="OJS Service"
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
            <h2 className="text-3xl font-bold text-gray-900">Layanan OJS Kami</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan untuk membantu Anda dalam pengelolaan OJS
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
            <h2 className="text-3xl font-bold text-gray-900">Mengapa Memilih Layanan OJS Kami?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">Keunggulan layanan OJS kami</p>
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
                    Tim kami memiliki pengalaman luas dalam pengelolaan OJS dan telah membantu banyak jurnal dalam
                    mengoptimalkan penggunaan OJS.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Solusi Komprehensif</h3>
                  <p className="text-gray-600">
                    Kami menyediakan solusi komprehensif untuk semua kebutuhan OJS Anda, mulai dari instalasi hingga
                    pemeliharaan dan dukungan teknis.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dukungan Responsif</h3>
                  <p className="text-gray-600">
                    Kami menyediakan dukungan responsif untuk memastikan sistem OJS Anda berjalan dengan lancar dan
                    efisien.
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Kustomisasi Sesuai Kebutuhan</h3>
                  <p className="text-gray-600">
                    Kami menyediakan layanan kustomisasi OJS sesuai dengan kebutuhan spesifik jurnal Anda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Mengoptimalkan OJS Anda?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Konsultasikan kebutuhan OJS Anda dengan tim ahli kami dan dapatkan solusi terbaik
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

