# Zona Kasir — Landing Page

Landing page marketing untuk **Zona Kasir**, aplikasi kasir (POS) berbasis web untuk toko, retail, UMKM, coffee shop, cafe, dan bisnis F&B.

Pesan utama: **“Transaksi Cepat, Usaha Lebih Terkontrol.”**

Dibangun dengan React + TypeScript + Tailwind CSS (struktur shadcn/ui), lucide-react untuk ikon, dan framer-motion untuk animasi ringan. SEO-friendly dengan meta lengkap + structured data JSON-LD.

---

## 1. Cara menjalankan di lokal (tutorial)

> Prasyarat: **Node.js 18+** dan **npm** sudah terinstall. Cek dengan `node -v`.

### Langkah-langkah

```bash
# 1. Masuk ke folder project
cd pos-landing

# 2. Install semua dependency
npm install

# 3. Jalankan development server
npm run dev
```

Setelah `npm run dev`, buka URL yang muncul di terminal (default: **http://localhost:5173**).
Halaman akan auto-reload setiap kali file diubah.

### Build untuk production

```bash
npm run build      # output ke folder dist/
npm run preview    # preview hasil build di http://localhost:4173
```

> Catatan: project ini sudah diverifikasi `npm run build` **berhasil tanpa error** (TypeScript + Vite).

---

## 2. Dependency yang perlu diinstall

Semua sudah tercantum di `package.json`, cukup jalankan `npm install`. Paket utamanya:

**Runtime**

- `react`, `react-dom` — UI library
- `framer-motion` — animasi ringan (fade-up, float, accordion)
- `lucide-react` — ikon
- `class-variance-authority`, `clsx`, `tailwind-merge` — utilitas styling ala shadcn/ui

**Dev / build**

- `vite`, `@vitejs/plugin-react` — bundler & dev server
- `typescript`, `@types/react`, `@types/react-dom`, `@types/node`
- `tailwindcss`, `postcss`, `autoprefixer`

---

## 3. Setup singkat (jika mulai dari project kosong)

Project ini **sudah dikonfigurasi penuh**. Jika Anda ingin mereplikasi setup dari nol:

```bash
npm create vite@latest pos-landing -- --template react-ts
cd pos-landing
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge
```

Lalu salin file konfigurasi (`tailwind.config.js`, `src/index.css`, dll) dan folder `src/components/ui`.

---

## 4. File yang dibuat / diubah

```
pos-landing/
├─ index.html                  # SEO META + JSON-LD (lihat bagian SEO di bawah)
├─ package.json                # dependency & script
├─ vite.config.ts              # alias "@" -> ./src
├─ tsconfig.json / tsconfig.node.json
├─ tailwind.config.js          # theme + warna brand (Biru Laut #2563EB)
├─ postcss.config.js
├─ public/
│  ├─ favicon.svg              # logo Zona Kasir
│  └─ og-image.png             # gambar share (1200x630) untuk WA/FB/LinkedIn
└─ src/
   ├─ main.tsx                 # entry point
   ├─ App.tsx                  # render <ZonaKasirLandingPage />
   ├─ index.css                # Tailwind + CSS variables (shadcn-style theme)
   ├─ lib/utils.ts             # helper cn()
   └─ components/ui/
      ├─ button.tsx            # komponen Button (shadcn-style + cva)
      ├─ card.tsx              # Card, CardHeader, CardTitle, CardContent
      ├─ badge.tsx             # Badge
      ├─ accordion.tsx         # AccordionItem untuk FAQ (animasi framer-motion)
      └─ zona-kasir-landing-page.tsx   # KOMPONEN UTAMA landing page
```

---

## 5. Komponen utama

File **`src/components/ui/zona-kasir-landing-page.tsx`** berisi seluruh section
(masing-masing sebagai sub-komponen di dalam satu file):

| Komponen           | Section                                                       |
| ------------------ | ------------------------------------------------------------ |
| `Navbar`           | Logo, menu (Fitur/Harga/Katalog/FAQ), Login, Daftar Gratis   |
| `Hero`             | H1, subheadline, CTA, highlight, mockup dashboard POS        |
| `DashboardMockup`  | Visual kartu dashboard, chart, transaksi, QRIS, stok         |
| `Keunggulan`       | 6 card keunggulan (termasuk Open Bill PRO)                   |
| `FiturPOS`         | 9 fitur POS + catatan QRIS statis manual                    |
| `Pricing`          | Paket FREE (Rp0) & PRO (Rp50.000/bln)                       |
| `KatalogOnline`    | Penjelasan `/store/{slug}` + mockup katalog ala Linktree     |
| `DashboardLaporan` | Statistik omzet, modal, laba, produk terlaris, stok menipis  |
| `TargetPengguna`   | Retail, minimarket, cafe, fashion, UMKM, multi-perangkat     |
| `SeoIntro`         | Paragraf SEO (aplikasi kasir gratis, FREE vs PRO)            |
| `FAQ`              | 10 pertanyaan (accordion animasi)                            |
| `CTASection`       | CTA penutup: Daftar Gratis + Hubungi Kami                   |
| `Footer`           | Link internal + CTA                                          |

Komponen di-import oleh `App.tsx`. Untuk menampilkannya cukup `npm run dev`.

---

## 6. SEO — di mana diletakkan?

Karena ini **Vite SPA**, metadata statis diletakkan langsung di **`index.html`**
(di dalam `<head>`) agar langsung terbaca crawler tanpa eksekusi JavaScript:

- **Meta title & description** sesuai brief
- **Meta keywords** (aplikasi kasir gratis, POS, software kasir, dll)
- **Canonical URL** → `https://zonakasir.id/`
- **Open Graph** (og:title, og:description, og:image, og:locale `id_ID`)
- **Twitter Card** (`summary_large_image`)
- **Favicon** (`/favicon.svg`) & **og:image** (`/og-image.png`)
- **JSON-LD structured data**: `SoftwareApplication`, `Organization`, `FAQPage`

Struktur heading mengikuti aturan SEO:

- **1 buah `<h1>`** di Hero: _“Aplikasi Kasir Gratis untuk Toko, UMKM, dan Coffee Shop”_
- **`<h2>`** per section (Kenapa Memilih, Fitur, Paket Harga, Katalog, Laporan, FAQ, dll)
- **`<h3>`** untuk judul card & item FAQ
- HTML semantik: `<header>`, `<main>`, `<section>`, `<footer>`, plus `alt`/`aria-label` pada ikon & link.

> Ganti domain `https://zonakasir.id/` di `index.html` dengan domain asli Anda
> saat deploy (canonical, og:url, og:image).

---

## 7. Warna / Theme

- Primary brand: **Biru Laut `#2563EB`** (bukan hijau fintech).
- Didefinisikan via CSS variables di `src/index.css` (`--primary`, dll) dan skala
  `brand.50–950` di `tailwind.config.js`.
- Untuk menyelaraskan dengan `pos-frontend`, cukup ubah nilai `--primary` di
  `src/index.css` dan skala `brand` di `tailwind.config.js`.

### Integrasi ke project `pos-frontend` yang sudah ada

Jika ingin memasang ke project utama (bukan berdiri sendiri):

1. Salin `src/components/ui/zona-kasir-landing-page.tsx` (dan `button/card/badge/accordion.tsx` bila belum ada) ke folder `components/ui` project Anda.
2. Pastikan `framer-motion`, `lucide-react`, `class-variance-authority`, `clsx`, `tailwind-merge` terinstall.
3. Samakan token warna `brand` & `--primary` dengan theme `pos-frontend`.
4. Pindahkan tag SEO `<head>` / JSON-LD sesuai framework (mis. komponen `<Head>` di Next.js, atau `react-helmet`).
