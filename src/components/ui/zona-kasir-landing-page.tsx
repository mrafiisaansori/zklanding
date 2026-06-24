import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Store,
  QrCode,
  Boxes,
  LinkIcon,
  BarChart3,
  ReceiptText,
  ShoppingCart,
  CreditCard,
  Printer,
  Barcode,
  FileSpreadsheet,
  Ticket,
  Percent,
  Share2,
  Users,
  Check,
  X,
  Menu,
  Smartphone,
  Monitor,
  Coffee,
  Shirt,
  ShoppingBag,
  Building2,
  TrendingUp,
  Wallet,
  PackageMinus,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AccordionItem } from "@/components/ui/accordion";

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Harga", href: "#harga" },
  { label: "Katalog", href: "#katalog" },
  { label: "FAQ", href: "#faq" },
];

const LOGIN_URL = "https://merchant.zonakasir.web.id/";
const REGISTER_URL = "https://merchant.zonakasir.web.id/";
const CONTACT_URL = "https://wa.me/62859106997680?text=Halo%20Zona%20Kasir%2C%20saya%20tertarik%20dengan%20paket%20BUSINESS.";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Badge variant="soft" className="mb-4">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </Badge>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {desc && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {desc}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Navbar                                                              */
/* ------------------------------------------------------------------ */

function Logo() {
  return (
    <a href="#beranda" className="flex items-center gap-2.5" aria-label="Beranda Zona Kasir">
      <img
        src="/zona-kasir-icon.png"
        alt="Logo Zona Kasir - Aplikasi POS dan Kasir Online"
        className="h-10 w-10 rounded-xl object-contain shadow-soft"
        width="40"
        height="40"
      />
      <span className="text-xl font-black tracking-[0.04em] text-foreground">ZONAKASIR</span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between" aria-label="Navigasi utama">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-brand-600"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <a href={LOGIN_URL}>
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </a>
          <a href={REGISTER_URL}>
            <Button size="sm">Daftar Gratis</Button>
          </a>
        </div>
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-foreground md:hidden"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-border bg-background md:hidden"
        >
          <div className="container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <a href={LOGIN_URL}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </a>
              <a href={REGISTER_URL}>
                <Button className="w-full">Daftar Gratis</Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero + Dashboard mockup                                             */
/* ------------------------------------------------------------------ */

const HERO_HIGHLIGHTS = [
  { icon: Monitor, text: "Komputer, tablet & smartphone" },
  { icon: QrCode, text: "QRIS milik merchant sendiri" },
  { icon: Store, text: "Cocok untuk retail & F&B" },
  { icon: Sparkles, text: "Tersedia paket FREE, PRO & BUSINESS" },
];

function DashboardMockup() {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      {/* main dashboard card */}
      <Card className="overflow-hidden shadow-card">
        <div className="flex items-center justify-between border-b border-border bg-secondary/50 px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-100" />
          </div>
          <span className="text-xs font-medium text-muted-foreground">
            Dashboard Zona Kasir
          </span>
        </div>
        <CardContent className="space-y-4 p-5">
          {/* stat row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Omzet Hari Ini", value: "Rp4,8jt", up: "+12%" },
              { label: "Transaksi", value: "128", up: "+8%" },
              { label: "Laba Kotor", value: "Rp1,6jt", up: "+5%" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-secondary/60 p-3">
                <p className="text-[11px] text-muted-foreground">{s.label}</p>
                <p className="mt-1 text-base font-bold text-foreground">{s.value}</p>
                <span className="text-[10px] font-semibold text-brand-600">
                  {s.up}
                </span>
              </div>
            ))}
          </div>
          {/* mini chart */}
          <div className="rounded-xl border border-border p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">Penjualan 7 Hari</p>
              <Badge variant="soft" className="text-[10px]">
                <TrendingUp className="h-3 w-3" /> Naik
              </Badge>
            </div>
            <div className="flex h-24 items-end gap-2">
              {[42, 58, 50, 70, 64, 88, 76].map((h, i) => (
                <motion.div
                  key={i}
                  initial={reduce ? false : { height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-brand-400"
                />
              ))}
            </div>
          </div>
          {/* transaction list */}
          <div className="space-y-2">
            {[
              { name: "Kopi Susu Gula Aren", qty: "x2", price: "Rp36.000", pay: "QRIS" },
              { name: "Roti Bakar Cokelat", qty: "x1", price: "Rp18.000", pay: "Cash" },
              { name: "Es Teh Manis", qty: "x3", price: "Rp24.000", pay: "Transfer" },
            ].map((t) => (
              <div
                key={t.name}
                className="flex items-center justify-between rounded-lg bg-secondary/40 px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-brand-100 text-brand-700">
                    <ReceiptText className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium text-foreground">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground">{t.qty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-foreground">{t.price}</p>
                  <p className="text-[10px] text-brand-600">{t.pay}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* floating QRIS card */}
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-5 hidden w-40 sm:block"
      >
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <QrCode className="h-4 w-4 text-brand-600" />
              <span className="text-xs font-semibold text-foreground">QRIS Merchant</span>
            </div>
            <div className="grid h-16 w-full place-items-center rounded-lg bg-secondary/70">
              <QrCode className="h-10 w-10 text-brand-700" />
            </div>
            <p className="mt-2 text-center text-[10px] text-muted-foreground">
              Dana langsung ke rekening Anda
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* floating stock card */}
      <motion.div
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-4 hidden w-44 sm:block"
      >
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="mb-2 flex items-center gap-2">
              <Boxes className="h-4 w-4 text-brand-600" />
              <span className="text-xs font-semibold text-foreground">Stok Otomatis</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Gula Aren</span>
                <span className="font-semibold text-foreground">24</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-muted-foreground">Susu UHT</span>
                <span className="font-semibold text-amber-600">5 menipis</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-32 right-0 -z-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="container grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <Reveal>
            <Badge variant="soft" className="mb-5">
              <img src="/zona-kasir-icon.png" alt="" aria-hidden="true" className="h-4 w-4 rounded object-contain" />
              POS Modern untuk Bisnis yang Ingin Tumbuh
            </Badge>
          </Reveal>
          {/* H1 — single, keyword-rich */}
          <Reveal delay={0.05}>
            <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              Transaksi Lebih Cepat,{" "}
              <span className="text-brand-600">Bisnis Lebih Terkontrol</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Zona Kasir adalah aplikasi kasir online dan aplikasi POS modern
              untuk mengelola transaksi, stok barang, QRIS, katalog, dan laporan
              usaha dalam satu platform. Mulai sebagai aplikasi kasir gratis,
              lalu tingkatkan fitur saat bisnis berkembang.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={REGISTER_URL}>
                <Button size="lg" className="w-full sm:w-auto">
                  Mulai Gratis <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <a href="#fitur">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Lihat Fitur
                </Button>
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <ul className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {HERO_HIGHLIGHTS.map((h) => (
                <li key={h.text} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-100 text-brand-700">
                    <h.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">{h.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={0.15} className="lg:pl-6">
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Keunggulan                                                          */
/* ------------------------------------------------------------------ */

const KEUNGGULAN = [
  {
    icon: ShoppingCart,
    title: "Kasir cepat & mudah",
    desc: "Antarmuka kasir yang ringan dan simpel, mudah dipakai siapa saja tanpa training panjang.",
  },
  {
    icon: QrCode,
    title: "QRIS mandiri merchant",
    desc: "Pakai QRIS statis milik usaha Anda sendiri. Dana pembayaran langsung masuk ke rekening Anda.",
  },
  {
    icon: Boxes,
    title: "Stok otomatis & tercatat",
    desc: "Setiap transaksi mengurangi stok otomatis, lengkap dengan peringatan stok menipis.",
  },
  {
    icon: LinkIcon,
    title: "Katalog online",
    desc: "Punya etalase produk online yang bisa dibagikan, tanpa perlu membuat website tambahan.",
  },
  {
    icon: BarChart3,
    title: "Laporan omzet & laba",
    desc: "Pantau omzet, modal, dan laba kotor usaha Anda secara jelas dan real-time.",
  },
  {
    icon: ReceiptText,
    title: "Open Bill cafe & resto",
    desc: "Buka tagihan per meja untuk cafe dan restoran. Tersedia khusus paket PRO.",
    pro: true,
  },
];

function Keunggulan() {
  return (
    <section id="keunggulan" className="border-t border-border bg-secondary/30 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Keunggulan"
          title="Kenapa Memilih Zona Kasir?"
          desc="Semua yang dibutuhkan toko, UMKM, dan F&B untuk berjualan lebih cepat dan terkontrol — dalam satu aplikasi kasir."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {KEUNGGULAN.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-card">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                      <f.icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    {f.pro && <Badge>PRO</Badge>}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Fitur POS                                                           */
/* ------------------------------------------------------------------ */

const FITUR = [
  { icon: ShoppingCart, title: "Transaksi kasir", desc: "Proses penjualan cepat dengan tampilan kasir yang ringan." },
  { icon: CreditCard, title: "Cash, QRIS & Transfer", desc: "Terima pembayaran tunai, QRIS merchant, dan transfer bank." },
  { icon: Printer, title: "Cetak struk thermal", desc: "Dukungan printer thermal ukuran 58mm dan 80mm." },
  { icon: Barcode, title: "Produk & barcode", desc: "Kelola produk lengkap dengan dukungan barcode." },
  { icon: FileSpreadsheet, title: "Import Excel/CSV", desc: "Tambah produk massal lewat impor file Excel atau CSV." },
  { icon: Ticket, title: "Voucher & promo", desc: "Buat voucher dan promo untuk pelanggan.", pro: true },
  { icon: Percent, title: "Pajak & service charge", desc: "Atur PPN dan service charge secara terpisah." },
  { icon: Share2, title: "Katalog shareable", desc: "Bagikan katalog produk online ke pelanggan." },
  { icon: Users, title: "Multiuser admin & kasir", desc: "Kelola hak akses untuk admin dan kasir." },
];

function FiturPOS() {
  return (
    <section id="fitur" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Fitur"
          title="Fitur Aplikasi Kasir Online Zona Kasir"
          desc="Fitur lengkap aplikasi POS untuk operasional harian toko dan F&B, dari transaksi hingga laporan."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FITUR.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:border-brand-200 hover:shadow-card">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground">{f.title}</h3>
                    {f.pro && <Badge className="text-[10px]">PRO</Badge>}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mx-auto mt-8 max-w-2xl rounded-xl border border-border bg-secondary/40 px-5 py-3 text-center text-xs text-muted-foreground">
            Catatan: QRIS yang digunakan adalah QRIS statis milik merchant dengan
            konfirmasi pembayaran manual.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* ------------------------------------------------------------------ */

const PLANS = [
  {
    name: "FREE",
    price: "Rp0",
    period: "selamanya",
    desc: "Cocok untuk mulai jualan.",
    cta: "Mulai Gratis",
    href: REGISTER_URL,
    highlight: false,
    features: [
      "Maksimal 50 produk",
      "1 akun kasir",
      "Kasir POS",
      "QRIS merchant",
      "Katalog online",
      "Import produk sampai batas plan",
      "Struk dengan branding Zona Kasir",
    ],
  },
  {
    name: "PRO",
    price: "Rp50.000",
    period: "/bulan",
    desc: "Cocok untuk toko/cafe yang mulai berkembang.",
    cta: "Upgrade PRO",
    href: REGISTER_URL,
    highlight: true,
    features: [
      "Produk lebih dari 50",
      "Multiple kasir",
      "Open Bill",
      "Voucher/promo",
      "Pajak & service charge",
      "Rekapitulasi laporan lengkap",
      "Struk tanpa branding Zona Kasir",
    ],
  },
  {
    name: "BUSINESS",
    price: "Mulai Rp1 jutaan",
    period: "/tahun",
    desc: "Cocok untuk bisnis yang butuh sistem lebih profesional.",
    cta: "Hubungi Kami",
    href: CONTACT_URL,
    highlight: false,
    features: [
      "Semua fitur PRO",
      "Custom aplikasi / custom branding",
      "Setup khusus",
      "Payment gateway QRIS dinamis Midtrans",
      "Status pembayaran otomatis",
      "Webhook pembayaran",
      "Priority support",
    ],
  },
];

function Pricing() {
  return (
    <section id="harga" className="border-t border-border bg-secondary/30 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Harga"
          title="Paket Harga: FREE, PRO, dan BUSINESS"
          desc="Mulai gratis tanpa biaya. Upgrade ke PRO Rp50.000/bulan saat usaha berkembang, atau BUSINESS mulai Rp1 jutaan/tahun untuk custom aplikasi & payment gateway QRIS dinamis."
        />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <Card
                className={
                  p.highlight
                    ? "relative h-full border-brand-300 ring-2 ring-brand-500 shadow-card"
                    : "h-full"
                }
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Paling Populer</Badge>
                  </div>
                )}
                <CardContent className="flex h-full flex-col p-7">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-foreground">
                      {p.price}
                    </span>
                    <span className="pb-1 text-sm text-muted-foreground">{p.period}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                        <span className="text-foreground/90">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={p.href} target={p.name === "BUSINESS" ? "_blank" : undefined} rel={p.name === "BUSINESS" ? "noopener noreferrer" : undefined} className="mt-7">
                    <Button
                      className="w-full"
                      variant={p.highlight ? "default" : "outline"}
                      size="lg"
                    >
                      {p.cta}
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Katalog Online                                                      */
/* ------------------------------------------------------------------ */

const KATALOG_POINTS = [
  "Produk tampil online dengan rapi",
  "Bisa dibagikan ke pelanggan lewat satu link",
  "Cocok untuk UMKM yang belum punya website",
];

function KatalogOnline() {
  return (
    <section id="katalog" className="py-20">
      <div className="container grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Badge variant="soft" className="mb-4">
            <LinkIcon className="h-3.5 w-3.5" /> Katalog Online
          </Badge>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Katalog Online untuk Setiap Toko
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Setiap merchant mendapat link katalog publik seperti{" "}
            <code className="rounded-md bg-secondary px-1.5 py-0.5 text-sm font-medium text-brand-700">
              /store/{"{slug}"}
            </code>
            . Seperti Linktree, tapi lengkap dengan etalase produk.
          </p>
          <ul className="mt-6 space-y-3">
            {KATALOG_POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-medium text-foreground">{p}</span>
              </li>
            ))}
          </ul>
          <a href="#harga" className="mt-7 inline-block">
            <Button>
              Lihat Paket <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </Reveal>

        {/* Catalog mockup */}
        <Reveal delay={0.1}>
          <Card className="mx-auto max-w-sm overflow-hidden shadow-card">
            <div className="bg-gradient-to-br from-brand-600 to-brand-700 p-6 text-center text-white">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-white/15 backdrop-blur">
                <Coffee className="h-8 w-8" />
              </div>
              <h3 className="mt-3 text-lg font-bold">Kopi Senja</h3>
              <p className="text-xs text-white/80">zonakasir.id/store/kopi-senja</p>
            </div>
            <CardContent className="space-y-3 p-5">
              {[
                { name: "Kopi Susu Gula Aren", price: "Rp18.000" },
                { name: "Americano", price: "Rp15.000" },
                { name: "Croissant Butter", price: "Rp22.000" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-border p-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-600">
                      <Coffee className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.price}</p>
                    </div>
                  </div>
                  <Button size="sm" className="h-8 px-3 text-xs">
                    <MessageCircle className="h-3.5 w-3.5" /> Pesan
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Dashboard & Laporan                                                 */
/* ------------------------------------------------------------------ */

const REPORT_STATS = [
  { icon: Wallet, label: "Omzet bersih", value: "Rp48,2jt" },
  { icon: TrendingUp, label: "Penerimaan bruto", value: "Rp54,0jt" },
  { icon: Boxes, label: "Modal / HPP", value: "Rp31,5jt" },
  { icon: BarChart3, label: "Laba kotor", value: "Rp16,7jt" },
];

function DashboardLaporan() {
  const reduce = useReducedMotion();
  return (
    <section id="laporan" className="border-t border-border bg-secondary/30 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Dashboard"
          title="Laporan Penjualan dan Stok Barang"
          desc="Lihat kondisi usaha Anda secara menyeluruh: omzet, modal, laba, produk terlaris, hingga stok menipis."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {/* stat cards */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {REPORT_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <Card className="h-full">
                  <CardContent className="p-5">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <p className="mt-3 text-xs text-muted-foreground">{s.label}</p>
                    <p className="mt-1 text-2xl font-bold tracking-tight text-foreground">
                      {s.value}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
            <Reveal delay={0.2} className="col-span-2">
              <Card>
                <CardContent className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-foreground">
                      Omzet Bulanan
                    </p>
                    <Badge variant="soft" className="text-[10px]">
                      PPN & service charge terpisah
                    </Badge>
                  </div>
                  <div className="flex h-32 items-end gap-2">
                    {[55, 62, 48, 70, 65, 80, 72, 90, 84, 95, 88, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={reduce ? false : { height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.04 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-brand-500 to-brand-300"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>

          {/* side lists */}
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <Card>
                <CardContent className="p-5">
                  <p className="mb-3 text-sm font-semibold text-foreground">
                    Produk Terlaris
                  </p>
                  <div className="space-y-2.5">
                    {[
                      { n: "Kopi Susu Gula Aren", q: "312 terjual" },
                      { n: "Es Teh Manis", q: "248 terjual" },
                      { n: "Roti Bakar Cokelat", q: "190 terjual" },
                    ].map((p) => (
                      <div key={p.n} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-foreground">{p.n}</span>
                        <span className="text-[11px] text-muted-foreground">{p.q}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
            <Reveal delay={0.15}>
              <Card>
                <CardContent className="p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <PackageMinus className="h-4 w-4 text-amber-500" />
                    <p className="text-sm font-semibold text-foreground">Stok Menipis</p>
                  </div>
                  <div className="space-y-2.5">
                    {[
                      { n: "Susu UHT", q: "5 tersisa" },
                      { n: "Gula Aren", q: "8 tersisa" },
                    ].map((p) => (
                      <div key={p.n} className="flex items-center justify-between">
                        <span className="text-xs font-medium text-foreground">{p.n}</span>
                        <span className="text-[11px] font-semibold text-amber-600">
                          {p.q}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Target Pengguna                                                     */
/* ------------------------------------------------------------------ */

const TARGETS = [
  { icon: Store, title: "Toko retail", desc: "Penjualan cepat dengan stok dan barcode rapi." },
  { icon: ShoppingBag, title: "Minimarket & warung", desc: "Kelola banyak produk dan transaksi harian." },
  { icon: Coffee, title: "Coffee shop, cafe & resto", desc: "Open Bill, pajak, dan struk thermal." },
  { icon: Shirt, title: "Pakaian, kosmetik & bakery", desc: "Katalog online untuk menjangkau pelanggan." },
  { icon: Building2, title: "UMKM", desc: "Butuh kasir, stok, QRIS, dan laporan dalam satu app." },
  { icon: Smartphone, title: "Multi perangkat", desc: "Jalan di komputer, tablet, dan smartphone." },
];

function TargetPengguna() {
  return (
    <section id="pengguna" className="py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Untuk Siapa"
          title="Aplikasi POS untuk Retail dan F&B"
          desc="Zona Kasir dirancang fleksibel untuk berbagai jenis usaha di Indonesia."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TARGETS.map((t, i) => (
            <Reveal key={t.title} delay={(i % 3) * 0.05}>
              <Card className="group h-full transition-all hover:-translate-y-1 hover:shadow-card">
                <CardContent className="flex items-start gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                    <t.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* SEO copy block                                                      */
/* ------------------------------------------------------------------ */

function SeoIntro() {
  return (
    <section className="border-t border-border bg-secondary/30 py-16">
      <div className="container max-w-3xl text-center">
        <Reveal>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Aplikasi Kasir Gratis untuk Memulai Usaha Kecil
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Zona Kasir adalah aplikasi kasir gratis yang bisa langsung digunakan
            untuk memulai usaha. Paket FREE cocok untuk toko kecil dengan maksimal
            50 produk dan satu akun kasir — lengkap dengan kasir POS, QRIS
            merchant, dan katalog online tanpa biaya.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Saat usaha berkembang, paket PRO seharga Rp50.000/bulan membuka produk
            yang lebih banyak, banyak akun kasir, Open Bill untuk cafe dan resto,
            voucher, pajak &amp; service charge, rekapitulasi laporan lengkap, serta
            struk tanpa branding Zona Kasir. Dengan dukungan stok barang, laporan
            penjualan, QRIS merchant, dan katalog online, Zona Kasir menjadi
            software kasir yang tumbuh bersama bisnis Anda.
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Untuk bisnis yang ingin sistem lebih profesional, paket BUSINESS mulai
            dari Rp1 jutaan/tahun menghadirkan custom aplikasi, custom branding,
            setup khusus, serta payment gateway QRIS dinamis Midtrans dengan status
            pembayaran otomatis melalui webhook. Harga BUSINESS menyesuaikan
            kebutuhan masing-masing merchant.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: "Apa itu Zona Kasir?",
    a: "Zona Kasir adalah aplikasi kasir online dan POS berbasis web untuk toko, UMKM, retail, coffee shop, dan bisnis F&B. Anda bisa mengelola transaksi, stok barang, QRIS merchant, katalog online, struk, dan laporan usaha dalam satu sistem.",
  },
  {
    q: "Apakah Zona Kasir bisa digunakan gratis?",
    a: "Ya. Paket FREE seharga Rp0 sudah mencakup kasir POS, QRIS merchant, katalog online, hingga 50 produk dan 1 akun kasir. Cocok untuk memulai usaha kecil.",
  },
  {
    q: "Apa beda paket FREE dan PRO?",
    a: "Paket FREE dibatasi 50 produk dan 1 akun kasir dengan struk berbranding Zona Kasir. Paket PRO Rp50.000/bulan memberi produk lebih banyak, banyak akun kasir, voucher & pajak, Open Bill untuk cafe/resto, import produk tanpa batas plan, dan struk tanpa branding.",
  },
  {
    q: "Apakah Zona Kasir cocok untuk toko retail?",
    a: "Sangat cocok. Zona Kasir mendukung manajemen produk dan barcode, stok otomatis, serta laporan penjualan untuk minimarket, warung, toko pakaian, kosmetik, dan bakery.",
  },
  {
    q: "Apakah Zona Kasir cocok untuk coffee shop dan cafe?",
    a: "Ya. Untuk coffee shop, cafe, dan resto tersedia fitur Open Bill di paket PRO, pajak dan service charge, serta cetak struk thermal.",
  },
  {
    q: "Apakah bisa menggunakan QRIS sendiri?",
    a: "Bisa. Zona Kasir menggunakan QRIS statis milik merchant Anda sendiri dengan konfirmasi pembayaran manual, sehingga dana langsung masuk ke rekening usaha Anda.",
  },
  {
    q: "Apakah bisa cetak struk thermal?",
    a: "Bisa. Zona Kasir mendukung cetak struk thermal ukuran 58mm dan 80mm.",
  },
  {
    q: "Apakah bisa import produk dari Excel?",
    a: "Bisa. Anda dapat mengimpor produk dari file Excel/CSV. Paket FREE mengikuti batas plan, sedangkan paket PRO tanpa batas plan.",
  },
  {
    q: "Apakah tersedia katalog online?",
    a: "Ya. Setiap merchant mendapat link katalog publik seperti /store/{slug} yang bisa dibagikan ke pelanggan, dengan order via WhatsApp tanpa perlu website tambahan.",
  },
  {
    q: "Apakah data setiap merchant terpisah?",
    a: "Ya. Setiap merchant memiliki data produk, transaksi, stok, dan laporan yang terpisah dan aman.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-20">
      <div className="container max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan Seputar Aplikasi Kasir Gratis"
          desc="Belum menemukan jawaban? Hubungi tim kami kapan saja."
        />
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={f.q}
              question={f.q}
              answer={f.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA Penutup                                                         */
/* ------------------------------------------------------------------ */

function CTASection() {
  return (
    <section className="py-20">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-16 text-center text-white sm:px-12">
            <div className="absolute inset-0 bg-grid [background-size:32px_32px] opacity-20" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Siap Mengelola Usaha dengan Lebih Mudah?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Daftarkan toko, masukkan produk, unggah QRIS usaha Anda, dan mulai
                transaksi bersama Zona Kasir.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a href={REGISTER_URL}>
                  <Button
                    size="lg"
                    className="w-full bg-white text-brand-700 hover:bg-brand-50 sm:w-auto"
                  >
                    Daftar Gratis Sekarang <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-white/40 bg-transparent text-white hover:bg-white/10 hover:border-white sm:w-auto"
                  >
                    <MessageCircle className="h-4 w-4" /> Hubungi Kami
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Aplikasi kasir gratis dan POS modern untuk toko, UMKM, retail,
              coffee shop, dan F&B di Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Produk</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#fitur" className="hover:text-brand-600">Fitur</a></li>
              <li><a href="#harga" className="hover:text-brand-600">Harga</a></li>
              <li><a href="#katalog" className="hover:text-brand-600">Katalog</a></li>
              <li><a href="#laporan" className="hover:text-brand-600">Laporan</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Perusahaan</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#faq" className="hover:text-brand-600">FAQ</a></li>
              <li><a href={CONTACT_URL} className="hover:text-brand-600">Hubungi Kami</a></li>
              <li><a href={LOGIN_URL} className="hover:text-brand-600">Login</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Mulai Sekarang</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Daftar gratis dan kelola usaha Anda hari ini.
            </p>
            <a href={REGISTER_URL} className="mt-4 inline-block">
              <Button size="sm">Daftar Gratis</Button>
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Zona Kasir. Aplikasi kasir online & POS untuk
          UMKM Indonesia.
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function ZonaKasirLandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Keunggulan />
        <FiturPOS />
        <Pricing />
        <KatalogOnline />
        <DashboardLaporan />
        <TargetPengguna />
        <SeoIntro />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
