import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-blue-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Siap untuk meningkatkan kualitas publikasi akademik Anda?</span>
          <span className="block text-blue-300">Konsultasikan kebutuhan Anda dengan kami sekarang.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-800 bg-white hover:bg-gray-100"
            >
              Hubungi Kami
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              href="/cek"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Cek Status
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

