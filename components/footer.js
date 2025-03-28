import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        {/* Logo di Tengah */}
        <div className="flex justify-center">
          <Image
            src="/svgg.svg" // Ganti dengan path logo Anda
            alt="Logo AcademicServices"
            width={240} // Tentukan lebar logo
            height={60} // Tentukan tinggi logo
            className="object-contain"
          />
        </div>
      </div>
    </footer>
  )
}