import { BookOpen, Award, Edit, BookText, Server } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Pendampingan Akreditasi Jurnal",
      description:
        "Kami membantu jurnal Anda dalam proses akreditasi dengan pendampingan profesional dan komprehensif.",
      icon: Award,
      link: "/services/akreditasi-jurnal",
    },
    {
      title: "Pembuatan Jurnal",
      description: "Layanan pembuatan jurnal dari awal hingga siap publikasi dengan standar kualitas internasional.",
      icon: BookOpen,
      link: "/services/pembuatan-jurnal",
    },
    {
      title: "Pendampingan Penulisan Artikel",
      description:
        "Bantuan dalam menulis dan menyusun artikel ilmiah yang memenuhi standar publikasi jurnal bereputasi.",
      icon: Edit,
      link: "/services/penulisan-artikel",
    },
    {
      title: "Pembuatan Book Chapter",
      description: "Layanan pembuatan dan publikasi book chapter dengan pendampingan dari tim ahli kami.",
      icon: BookText,
      link: "/services/book-chapter",
    },
    {
      title: "OJS Service",
      description: "Bantuan dalam pengelolaan Open Journal Systems (OJS) untuk jurnal online Anda.",
      icon: Server,
      link: "/services/ojs-service",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Layanan Utama Kami</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Kami menyediakan berbagai layanan untuk mendukung kebutuhan akademik dan publikasi Anda
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="w-12 h-12 rounded-md bg-blue-800 text-white flex items-center justify-center mb-5">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <a href={service.link} className="mt-4 inline-flex items-center text-blue-800 hover:text-blue-600">
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
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

