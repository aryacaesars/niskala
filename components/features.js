import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Features() {
  const features = [
    "Tim ahli berpengalaman dalam publikasi akademik",
    "Pendampingan hingga proses selesai",
    "Konsultasi gratis untuk kebutuhan akademik Anda",
    "Jaminan kualitas dan kepuasan",
    "Harga yang kompetitif",
    "Proses yang cepat dan efisien",
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Gambar */}
          <div className="relative w-full h-[500px] rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/ojsbg.jpg"
              alt="Academic collaboration"
              layout="fill" // Memastikan gambar memenuhi container
              objectFit="cover" // Memastikan gambar tidak terpotong dan tetap proporsional
              className="rounded-lg"
            />
          </div>

          {/* Konten Teks */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Mengapa Memilih Kami?</h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Kami berkomitmen untuk memberikan layanan terbaik dalam mendukung kebutuhan akademik dan publikasi Anda
              dengan standar kualitas tertinggi.
            </p>
            <div className="mt-8">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}