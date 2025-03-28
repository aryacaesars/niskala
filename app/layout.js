import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
        <WhatsAppButton />
      </body>
    </html>
  )
}

export const metadata = {
  title: "Academic Services - Journal & Publication Support",
  description:
    "Professional services for journal accreditation, article writing, book chapter creation, and OJS management",
    generator: 'v0.dev'
}



import './globals.css'
import WhatsAppButton from "@/components/whatsapp"
