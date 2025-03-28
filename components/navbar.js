"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function Navbar() {
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
              <Image
                src="/svgg.svg"
                alt="Logo"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-800">
              Beranda
            </Link>

            {/* Services Dropdown - Desktop */}
            <div className="relative group">
              <button
                className="px-3 py-2 text-gray-700 hover:text-blue-800 flex items-center"
              >
                Layanan
                <ChevronDown className="ml-1 h-4 w-4 group-hover:hidden" />
                <ChevronUp className="ml-1 h-4 w-4 hidden group-hover:block" />
              </button>

              <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                      role="menuitem"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/pricing" className="px-3 py-2 text-gray-700 hover:text-blue-800">
              Harga            </Link>

            <Link href="/contact" className="ml-4 px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700">
              Konsultasi
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}