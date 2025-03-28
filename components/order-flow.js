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
    
    </section>
  )
}

