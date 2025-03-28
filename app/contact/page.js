import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Hubungi Kami</h1>
            <p className="mt-4 text-xl text-gray-500">
              Konsultasikan kebutuhan akademik dan publikasi Anda dengan tim kami
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Telepon</h3>
              <p className="text-gray-600">+62 123 4567 890</p>
              <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@academicservices.com</p>
              <p className="text-gray-600">support@academicservices.com</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Alamat</h3>
              <p className="text-gray-600">Jl. Pendidikan No. 123</p>
              <p className="text-gray-600">Jakarta, Indonesia</p>
            </div>
          </div>

          <div className="mt-12 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nama
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subjek
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                      Layanan yang Diminati
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Pilih Layanan</option>
                      <option value="akreditasi">Pendampingan Akreditasi Jurnal</option>
                      <option value="jurnal">Pembuatan Jurnal</option>
                      <option value="artikel">Pendampingan Penulisan Artikel</option>
                      <option value="book">Pembuatan Book Chapter</option>
                      <option value="ojs">OJS Service</option>
                    </select>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Kirim Pesan
                    </button>
                  </div>
                </form>
              </div>

              <div className="bg-blue-800 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <p className="mb-8">
                  Jika Anda memiliki pertanyaan atau ingin berkonsultasi tentang layanan kami, jangan ragu untuk
                  menghubungi kami melalui informasi kontak di bawah ini.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Alamat</h4>
                      <p className="text-blue-200">Jl. Pendidikan No. 123, Jakarta, Indonesia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Telepon</h4>
                      <p className="text-blue-200">+62 123 4567 890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-blue-200">info@academicservices.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold mb-3">Jam Operasional</h4>
                  <p className="text-blue-200">Senin - Jumat: 08.00 - 17.00</p>
                  <p className="text-blue-200">Sabtu: 09.00 - 14.00</p>
                  <p className="text-blue-200">Minggu: Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

