import Image from "next/image"

export default function OrderFlow() {
  const steps = [
    {
      text: "Langkah awal yakni menghubungi admin/cs ruang jurnal.",
      number: 1,
    },
    {
      text: "Jika sudah sepakat dengan langkah awal, maka dilanjutkan dengan pembuatan judul.",
      number: 2,
    },
    {
      text: "Admin akan memberikan invoice.",
      number: 3,
    },
    {
      text: "Admin akan mengintruksikan pengerjaan sesuai antrian yang sedang berlangsung dengan awal pengerjaan Bab 1 – 3.",
      number: 4,
    },
    {
      text: "Dilanjutkan pengerjaan Bab 4 – 5.",
      number: 5,
    },
    {
      text: "Jika pengerjaan telah selesai, maka harus melalui tahap mendeley dan parafrase.",
      number: 6,
    },
    {
      text: "Jurnal yang sudah selesai di tahap 6, akan masuk tahap translate. Namun, tahap ini tergantung kebutuhan, bisa dilakukan bisa juga tidak.",
      number: 7,
    },
    {
      text: "Setelah tahap 7 selesai. Maka jurnal akan melalui proses proofread.",
      number: 8,
    },
    {
      text: "Apabila sudah selesai pada tahap 8, jurnal akan di-submit",
      number: 9,
    },
    {
      text: "Setelah submit, membutuhkan waktu sekitar 1 – 6 bulan untuk mendapatkan LOA.",
      number: 10,
    },
    {
      text: "Jurnal yang telah di-submit akan mendapatkan tanggapan, apabila ada revisi, maka kami akan merevisi.",
      number: 11,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 bg-gray-300 w-1/4"></div>
            <h2 className="px-6 text-2xl font-bold text-blue-500">ALUR PEMESANAN</h2>
            <div className="h-0.5 bg-gray-300 w-1/4"></div>
        </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ul className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-2 mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm">{step.text}</span>
                </li>
              ))}
            </ul>

          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/success.svg"
              alt="Alur Pemesanan Ilustrasi"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
  <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full transition duration-300 text-lg font-medium">
    Konsultasi Sekarang
  </button>
</div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/6289524396489"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>Konsultasi Sekarang</span>
        </a>
      </div>
    </section>
  )
}

