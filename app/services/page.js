import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BookOpen, Award, Edit, BookText, Server } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Pendampingan Akreditasi Jurnal",
      description:
        "Kami membantu jurnal Anda dalam proses akreditasi dengan pendampingan profesional dan komprehensif.",
      icon: Award,
      href: "/services/akreditasi-jurnal",
    },
    {
      title: "Pembuatan Jurnal",
      description: "Layanan pembuatan jurnal dari awal hingga siap publikasi dengan standar kualitas internasional.",
      icon: BookOpen,
      href: "/services/pembuatan-jurnal",
    },
    {
      title: "Pendampingan Penulisan Artikel",
      description:
        "Bantuan dalam menulis dan menyusun artikel ilmiah yang memenuhi standar publikasi jurnal bereputasi.",
      icon: Edit,
      href: "/services/penulisan-artikel",
    },
    {
      title: "Pembuatan Book Chapter",
      description: "Layanan pembuatan dan publikasi book chapter dengan pendampingan dari tim ahli kami.",
      icon: BookText,
      href: "/services/book-chapter",
    },
    {
      title: "OJS Service",
      description: "Bantuan dalam pengelolaan Open Journal Systems (OJS) untuk jurnal online Anda.",
      icon: Server,
      href: "/services/ojs-service",
    },
  ]

  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Layanan Kami</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Berbagai layanan profesional untuk mendukung kebutuhan akademik dan publikasi Anda
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="w-12 h-12 rounded-md bg-blue-800 text-white flex items-center justify-center mb-5">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-5">{service.description}</p>
                  <Link href={service.href} className="inline-flex items-center text-blue-800 hover:text-blue-600">
                    Pelajari lebih lanjut
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Butuh Layanan Khusus?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Kami juga menyediakan layanan khusus yang disesuaikan dengan kebutuhan spesifik Anda. Hubungi kami untuk
            konsultasi lebih lanjut.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

