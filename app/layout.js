import "./globals.css"

export const metadata = {
  title: "Niskala Publikasi Indonesia - Layanan Jurnal Nasional",
  description: "Harga layanan jurnal nasional dari Niskala Publikasi Indonesia",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" dir="ltr">
      <head>
        {/* Meta Tags untuk SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Harga layanan jurnal nasional dari Niskala Publikasi Indonesia. Kami menyediakan layanan publikasi jurnal berkualitas tinggi dengan harga terjangkau." />
        <meta name="keywords" content="jurnal nasional, publikasi jurnal, layanan jurnal, Niskala Publikasi Indonesia, harga jurnal nasional" />
        <meta name="author" content="Niskala Publikasi Indonesia" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Niskala Publikasi Indonesia - Layanan Jurnal Nasional" />
        <meta property="og:description" content="Harga layanan jurnal nasional dari Niskala Publikasi Indonesia. Kami menyediakan layanan publikasi jurnal berkualitas tinggi dengan harga terjangkau." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://niskala-publikasi.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Niskala Publikasi Indonesia - Layanan Jurnal Nasional" />
        <meta name="twitter:description" content="Harga layanan jurnal nasional dari Niskala Publikasi Indonesia. Kami menyediakan layanan publikasi jurnal berkualitas tinggi dengan harga terjangkau." />
        <meta name="twitter:image" content="/twitter-image.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Title */}
        <title>Niskala Publikasi Indonesia - Layanan Jurnal Nasional</title>
      </head>
      <body>{children}</body>
    </html>
  )
}