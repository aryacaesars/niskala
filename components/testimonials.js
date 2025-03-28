import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      content:
        "Layanan pendampingan akreditasi jurnal sangat membantu kami dalam meningkatkan kualitas jurnal dan mendapatkan akreditasi yang diinginkan.",
      author: "Dr. Budi Santoso",
      role: "Ketua Redaksi Jurnal Pendidikan Indonesia",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Tim sangat profesional dalam membantu kami menyusun dan menerbitkan book chapter. Hasilnya memuaskan dan sesuai dengan standar internasional.",
      author: "Prof. Ani Wijaya",
      role: "Peneliti Senior Universitas Terkemuka",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "Layanan OJS yang diberikan sangat membantu kami dalam mengelola jurnal online. Responsif dan solusi yang diberikan tepat sasaran.",
      author: "Dr. Citra Dewi",
      role: "Editor Jurnal Ilmu Komputer",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Apa Kata Mereka</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Testimoni dari klien yang telah menggunakan layanan kami
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

