"use client"
import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const services = [
    { name: "Pendampingan Akreditasi Jurnal", href: "/services/akreditasi-jurnal" },
    { name: "Pembuatan Jurnal", href: "/services/pembuatan-jurnal" },
    { name: "Pendampingan Penulisan Artikel", href: "/services/penulisan-artikel" },
    { name: "Pembuatan Book Chapter", href: "/services/book-chapter" },
    { name: "OJS Service", href: "/services/ojs-service" },
  ]

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
            <img
  className="h-12 w-auto object-contain"
  src="/svgg.svg"
  alt="Logo"
/>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-800">
              Beranda
            </Link>

            {/* Services Dropdown - Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="px-3 py-2 text-gray-700 hover:text-blue-800 flex items-center"
              >
                Layanan
                {isServicesOpen ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />}
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                        role="menuitem"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/contact" className="px-3 py-2 text-gray-700 hover:text-blue-800">
              Kontak
            </Link>
            <Link href="/contact" className="ml-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700">
              Konsultasi
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-800 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>

            {/* Services Dropdown - Mobile */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-blue-800 flex items-center justify-between"
              >
                <span>Layanan</span>
                {isServicesOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {isServicesOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-800"
                      onClick={() => {
                        setIsServicesOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 mt-2 text-center bg-blue-800 text-white rounded-md hover:bg-blue-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Konsultasi
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

