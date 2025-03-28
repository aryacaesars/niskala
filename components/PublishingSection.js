import Link from "next/link"
import { BookOpen, FileText } from "lucide-react" // Import ikon dari lucide-react

export default function Publishing() {
  return (
    <section className="py-12" id="publish">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-blue-900 mb-8 pb-10 pt-6 md:pt-12 text-center">Publishing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-center">
          {/* Card 1: Journal */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full flex flex-col items-center">
            <div className="bg-blue-200 p-4 text-center w-full">
              <FileText size={100} stroke="currentColor" className="text-blue-600 mx-auto mb-4" /> {/* Ikon untuk Journal */}
            </div>
            <div className="p-6 text-center flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Journal</h3>
            </div>
            <div className="pb-6">
              <a href="https://journal.publinesia.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-900 transform transition hover:scale-105 duration-300 ease-in-out">
                  Link Jurnal
                </button>
              </a>
            </div>
          </div>

          {/* Card 2: Book Chapter */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full flex flex-col items-center">
            <div className="bg-blue-200 p-4 text-center w-full">
              <BookOpen size={100} stroke="currentColor" className="text-blue-600 mx-auto mb-4" /> {/* Ikon untuk Book Chapter */}
            </div>
            <div className="p-6 text-center flex-grow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Book Chapter</h3>
            </div>
            <div className="pb-6">
              <Link href="/services/book-chapter">
                <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-900 transform transition hover:scale-105 duration-300 ease-in-out">
                  Book Chapter
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}