"use client";

import Image from "next/image"
import OrderFlow from "../components/order-flow"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center">
          <Image src="/svgg.svg" alt="Niskala Publikasi Indonesia" width={200} height={50} priority />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Price List Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 bg-gray-300 w-1/4"></div>
            <h2 className="px-6 text-2xl font-medium text-gray-800">PRICE LIST</h2>
            <div className="h-0.5 bg-gray-300 w-1/4"></div>
          </div>
          <h1 className="text-3xl font-bold text-blue-500">Harga Layanan Jurnal Nasional</h1>
        </div>

        {/* Pricing Cards - First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {/* Card 1 */}
          <PricingCard
            title="Prosiding Nasional ISSN"
            price="Rp.1.500.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
          />

          {/* Card 2 */}
          <PricingCard
            title="Jurnal Nasional ISSN"
            price="Rp.2.000.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
          />

          {/* Card 3 */}
          <PricingCard
            title="Jurnal Nasional SINTA 5-6"
            price="Rp.2.000.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
          />
        </div>

        {/* Pricing Cards - Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 4 */}
          <PricingCard
            title="Jurnal Nasional Sinta 3-4"
            price="Rp.3.000.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
          />

          {/* Card 5 */}
          <PricingCard
            title="Jurnal Nasional Sinta 2"
            price="Rp.4.000.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
          />
        </div>

        {/* International Journal Pricing Section */}
        <div className="text-center mb-8 mt-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 bg-gray-300 w-1/4"></div>
            <h2 className="px-6 text-2xl font-medium text-gray-800">PRICE LIST</h2>
            <div className="h-0.5 bg-gray-300 w-1/4"></div>
          </div>
          <h1 className="text-3xl font-bold text-blue-500">Harga Layanan Jurnal Internasional</h1>
        </div>

        {/* International Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 - International */}
          <PricingCard
            title="Prosiding Internasional ISSN"
            price="Rp.7.000.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
            note="Sudah Termasuk Biaya Publikasi"
          />

          {/* Card 2 - International */}
          <PricingCard
            title="Jurnal Internasional ISSN (INDEX COPERNICUS, DOAJ, DLL)"
            price="Rp.7.000.000"
            features={[
              { text: "Penentuan Tema / Judul", included: true },
              { text: "Pembuatan Jurnal", included: true },
              {
                text: "Struktur Jurnal : Abstrak, Latar Belakang, Literatur Review, Metodologi, Hasil, Pembahasan",
                included: true,
              },
              {
                text: "Pemilihan Referensi Nasional dan International Bereputasi (Minimal 35 referensi)",
                included: true,
              },
              { text: "Penataan Tatabahasa, Keterbaruan, dan Kedalaman isi", included: true },
              { text: "Pengumpulan Data", included: true },
              { text: "Analisis Statistik", included: true },
              { text: "Translate", included: true },
              { text: "Proofread", included: true },
              { text: "Proses Mendeley (Daftar Pustaka)", included: true },
              { text: "Cek Plagiasi (Turnitin minimal 15%)", included: true },
              { text: "Layouting Jurnal Sesuai Templet", included: true },
              { text: "Memilih Target publikasi sesuai prosiding", included: true },
              { text: "Proses Pendampingan publikasi/penerbitan jurnal", included: true },
              { text: "Proses Submission", included: true },
              { text: "Perbaikan/Revisi", included: true },
              { text: "Korespondensi", included: true },
              { text: "Lama Pembuatan Jurnal 1-2 Minggu", included: true },
              { text: "Submit ke beberapa Publisher 1 Minggu", included: true },
              { text: "Penerimaan LOA (Letter of Acceptance) 1-6 Bulan*", included: true },
              { text: "Publish 3-8 Bulan*", included: true },
            ]}
            note="Sudah Termasuk Biaya Publikasi"
          />

</div>

        <div className="text-center text-sm text-gray-500 mt-8 mb-16">
          <p>*Tergantung Tujuan Jurnal</p>
        </div>
      </main>

      {/* Order Flow Section */}
      <OrderFlow />
    </div>
  )
}



function PricingCard({ title, price, features, note = "Sudah Termasuk Biaya Publikasi" }) {
  const handleWhatsAppRedirect = () => {
    const message = `Halo, saya tertarik dengan layanan "${title}". Bisa dijelaskan lebih lanjut?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6289524396489?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="w-16 h-0.5 bg-blue-500 mx-auto my-3"></div>
        <div className="font-bold text-xl">Start From</div>
        <div className="font-bold text-blue-500 text-xl">{price}</div>
      </div>

      <ul className="flex-1 space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span
              className={`flex-shrink-0 w-5 h-5 rounded-full ${feature.included ? "bg-blue-500 text-white" : "bg-gray-200"} flex items-center justify-center text-xs mr-2 mt-0.5`}
            >
              {feature.included ? "✓" : "•"}
            </span>
            <span className="text-sm">{feature.text}</span>
          </li>
        ))}
      </ul>

      <div className="text-center mt-4">
        <p className="text-sm text-gray-600 mb-4">{note}</p>
        <button
          onClick={handleWhatsAppRedirect}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </div>
  );
}

