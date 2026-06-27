import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Barcode,
  BarChart3,
  Boxes,
  Building2,
  Check,
  ChevronDown,
  Coffee,
  CreditCard,
  FileSpreadsheet,
  Instagram,
  Layers,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Moon,
  PackageCheck,
  PackageMinus,
  Percent,
  Phone,
  Printer,
  QrCode,
  ReceiptText,
  Search,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Store,
  Sun,
  Ticket,
  TrendingUp,
  Users,
  Wallet,
  X,
  type LucideIcon,
} from "lucide-react";

const LOGIN_URL = "https://merchant.zonakasir.com/";
const REGISTER_URL = "https://merchant.zonakasir.com/";
const WA_URL = "https://wa.me/62859106997680";
const CONTACT_URL =
  "https://wa.me/62859106997680?text=Halo%20Zona%20Kasir%2C%20saya%20tertarik%20dengan%20paket%20BUSINESS.";

const NAV_LINKS = [
  { label: "Fitur", href: "#fitur" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Harga", href: "#harga" },
  { label: "FAQ", href: "#faq" },
];

const springEase = [0.16, 1, 0.3, 1] as const;

// Teks brand yang otomatis menyesuaikan kontras di light dan dark.
const BRAND_TEXT = "text-brand-700 dark:text-brand-300";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.64, delay, ease: springEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={isDark}
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <span className="relative h-5 w-5">
        <Sun className="absolute inset-0 h-5 w-5 rotate-0 scale-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute inset-0 h-5 w-5 rotate-90 scale-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] dark:rotate-0 dark:scale-100" />
      </span>
    </button>
  );
}

function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-[0_12px_32px_-24px_rgba(25,135,209,0.55)] backdrop-blur dark:text-brand-300",
        className
      )}
    >
      {children}
    </span>
  );
}

function IconBox({
  icon: Icon,
  className,
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-transparent bg-accent text-accent-foreground",
        className
      )}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
  );
}

function PrimaryLink({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-brand-700 px-5 py-3 text-sm font-bold text-white shadow-[0_22px_50px_-28px_rgba(25,135,209,0.85)] transition-[transform,background-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:bg-brand-800 active:translate-y-0 active:scale-[0.98]",
        className
      )}
    >
      <span>{children}</span>
      <span className="grid h-7 w-7 place-items-center rounded-xl bg-white/16 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}

function SecondaryLink({
  href,
  children,
  className,
  target,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={target ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-bold text-foreground shadow-[0_20px_46px_-34px_rgba(15,23,42,0.42)] transition-[transform,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-brand-300 hover:bg-accent active:translate-y-0 active:scale-[0.98]",
        className
      )}
    >
      {children}
    </a>
  );
}

function SectionIntro({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      )}
    >
      <p className={cn("mb-4 text-sm font-bold tracking-wide", BRAND_TEXT)}>
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-extrabold tracking-[-0.02em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {desc ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 text-muted-foreground sm:text-lg",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function Logo() {
  return (
    <a
      href="#beranda"
      className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      aria-label="Beranda Zona Kasir"
    >
      <img
        src="/zona-kasir-icon.png"
        alt="Logo Zona Kasir"
        className="h-10 w-10 rounded-2xl object-contain dark:hidden"
        width="40"
        height="40"
      />
      <img
        src="/logo-baru-putih.png"
        alt="Logo Zona Kasir"
        className="hidden h-10 w-10 rounded-2xl object-contain dark:block"
        width="40"
        height="40"
      />
      <span className="text-base font-extrabold tracking-[0.08em] text-foreground sm:text-lg">
        ZONA KASIR
      </span>
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 shadow-[0_18px_60px_-44px_rgba(15,23,42,0.38)] backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <Logo />

        <div className="hidden items-center gap-1 rounded-2xl border border-border bg-card/70 p-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <SecondaryLink href={LOGIN_URL} className="min-h-10 rounded-xl px-4 py-2">
            Login
          </SecondaryLink>
          <PrimaryLink href={REGISTER_URL} className="min-h-10 rounded-xl px-4 py-2">
            Mulai gratis
          </PrimaryLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-2xl border border-border bg-card text-foreground transition-colors hover:bg-accent"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: springEase }}
            className="border-t border-border bg-background md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-2 px-4 py-5 sm:px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-bold text-foreground hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <SecondaryLink href={LOGIN_URL} className="w-full">
                  Login
                </SecondaryLink>
                <PrimaryLink href={REGISTER_URL} className="w-full">
                  Gratis
                </PrimaryLink>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

const HERO_METRICS = [
  { label: "Transaksi hari ini", value: "128", tone: "text-foreground" },
  { label: "Omzet", value: "Rp4,8jt", tone: BRAND_TEXT },
  {
    label: "Stok menipis",
    value: "7 item",
    tone: "text-amber-600 dark:text-amber-400",
  },
];

const RECEIPT_ITEMS = [
  { name: "Kopi susu aren", qty: "2", price: "36.000" },
  { name: "Croissant", qty: "1", price: "22.000" },
  { name: "Es teh", qty: "1", price: "8.000" },
];

function HeroDashboardMockup() {
  return (
    <div className="relative mx-auto max-w-2xl lg:ml-auto">
      <div className="absolute -right-3 top-10 hidden w-44 rotate-3 rounded-[1.65rem] border border-border bg-card p-4 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)] sm:block">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-muted-foreground">Struk</span>
          <ReceiptText className={cn("h-4 w-4", BRAND_TEXT)} aria-hidden="true" />
        </div>
        <div className="space-y-2">
          {RECEIPT_ITEMS.map((item) => (
            <div key={item.name} className="flex justify-between gap-3 text-[11px]">
              <span className="text-muted-foreground">
                {item.qty}x {item.name}
              </span>
              <span className="font-semibold text-foreground">{item.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-dashed border-border pt-3">
          <div className="flex justify-between text-xs font-extrabold text-foreground">
            <span>Total</span>
            <span>Rp66.000</span>
          </div>
        </div>
      </div>

      <div className="absolute -left-2 bottom-8 hidden w-48 -rotate-2 rounded-[1.65rem] border border-transparent bg-accent p-4 shadow-[0_26px_72px_-44px_rgba(25,135,209,0.65)] sm:block">
        <div className="flex items-center gap-3">
          <span className={cn("grid h-10 w-10 place-items-center rounded-2xl bg-card", BRAND_TEXT)}>
            <QrCode className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className={cn("text-xs font-semibold", BRAND_TEXT)}>QRIS merchant</p>
            <p className="text-sm font-extrabold text-foreground">Manual check</p>
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] border border-border bg-muted p-2 shadow-[0_34px_110px_-72px_rgba(15,23,42,0.5)]">
        <div className="overflow-hidden rounded-[1.55rem] border border-border bg-card">
          <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-brand-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="rounded-lg bg-card px-3 py-1 text-[11px] font-bold text-muted-foreground">
              Dashboard kasir
            </span>
          </div>

          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-border bg-[linear-gradient(180deg,hsl(var(--primary)/0.10),hsl(var(--card)/0.98))] p-4 text-foreground lg:border-b-0 lg:border-r">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Shift pagi</p>
                  <p className="text-lg font-extrabold">Kopi Senja</p>
                </div>
                <span className="rounded-xl border border-brand-200/70 bg-card/80 px-3 py-1 text-xs font-bold text-brand-700 dark:border-brand-800 dark:text-brand-300">
                  Online
                </span>
              </div>
              <picture>
                <source srcSet="/assets/pos.webp" type="image/webp" />
                <img
                  src="/assets/pos.jpg"
                  alt="Preview aplikasi kasir Zona Kasir pada perangkat toko"
                  width="1280"
                  height="960"
                  loading="eager"
                  decoding="async"
                  className="aspect-[4/3] rounded-2xl border border-border object-cover"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (!image.dataset.fallback) {
                      image.dataset.fallback = "1";
                      image.src = "/og-image.png";
                    }
                  }}
                />
              </picture>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-card/70 p-3">
                  <p className="text-[11px] text-muted-foreground">Item</p>
                  <p className="mt-1 text-lg font-extrabold">42</p>
                </div>
                <div className="rounded-2xl border border-border bg-card/70 p-3">
                  <p className="text-[11px] text-muted-foreground">Kasir</p>
                  <p className="mt-1 text-lg font-extrabold">2 aktif</p>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="grid grid-cols-3 gap-3">
                {HERO_METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-border bg-muted/50 p-3"
                  >
                    <p className="text-[11px] leading-4 text-muted-foreground">
                      {metric.label}
                    </p>
                    <p className={cn("mt-2 text-base font-extrabold", metric.tone)}>
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-border p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm font-extrabold text-foreground">
                    Penjualan 7 hari
                  </p>
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                    +18,4%
                  </span>
                </div>
                <div className="flex h-28 items-end gap-2">
                  {[46, 58, 42, 72, 64, 88, 76].map((height, index) => (
                    <motion.span
                      key={`${height}-${index}`}
                      initial={{ scaleY: 0.2 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.55, delay: index * 0.035, ease: springEase }}
                      style={{ height: `${height}%` }}
                      className="origin-bottom flex-1 rounded-t-xl bg-brand-500"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {[
                  { icon: Search, text: "Cari produk cepat dengan barcode" },
                  { icon: PackageMinus, text: "Stok berkurang otomatis" },
                  { icon: Printer, text: "Cetak struk thermal 58mm/80mm" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-2xl bg-muted/50 px-3 py-2.5"
                  >
                    <span className={cn("grid h-8 w-8 place-items-center rounded-xl bg-card", BRAND_TEXT)}>
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold text-muted-foreground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_-10%,hsl(var(--primary)/0.16),transparent_42%),radial-gradient(circle_at_88%_20%,hsl(var(--emerald)/0.08),transparent_46%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-hero-grid"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid min-h-[calc(100dvh-5rem)] max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8 lg:py-20">
        <div>
          <Reveal>
            <Badge className="mb-6">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              POS online untuk operasional harian
            </Badge>
          </Reveal>

          <Reveal delay={0.04}>
            <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl">
              Kasir cepat, stok rapi, laporan langsung terbaca
            </h1>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Zona Kasir membantu toko, coffee shop, retail, dan UMKM mencatat
              transaksi, memantau stok, mencetak struk, dan melihat penjualan
              tanpa rekap manual.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryLink href={REGISTER_URL} className="w-full sm:w-auto">
                Mulai gratis
              </PrimaryLink>
              <SecondaryLink href="#dashboard" className="w-full sm:w-auto">
                Lihat demo fitur
              </SecondaryLink>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { value: "Rp0", label: "paket awal" },
                { value: "20", label: "produk gratis" },
                { value: "58/80mm", label: "struk thermal" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-border bg-card/70 p-4"
                >
                  <p className="text-2xl font-extrabold tracking-[-0.02em] text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <HeroDashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}

const TRUST_STATS = [
  {
    icon: Store,
    value: "Retail, F&B, UMKM",
    label: "alur dibuat untuk usaha kecil yang butuh kasir mudah dipakai",
  },
  {
    icon: QrCode,
    value: "QRIS merchant",
    label: "tampilkan kode pembayaran usaha di alur kasir yang sama",
  },
  {
    icon: MonitorSmartphone,
    value: "Multi device",
    label: "bisa dibuka dari laptop kasir, tablet, atau smartphone",
  },
  {
    icon: Layers,
    value: "Free ke Pro",
    label: "mulai sederhana, lalu upgrade saat produk dan tim bertambah",
  },
];

function TrustStrip() {
  return (
    <section className="bg-page-base py-10" aria-label="Indikator kepercayaan">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-border bg-border px-0 sm:grid-cols-2 lg:grid-cols-4">
        {TRUST_STATS.map((stat, index) => (
          <Reveal key={stat.value} delay={index * 0.04}>
            <article className="h-full bg-card p-6">
              <IconBox icon={stat.icon} className="h-10 w-10 rounded-2xl" />
              <h2 className="mt-5 text-lg font-extrabold text-foreground">
                {stat.value}
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {stat.label}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: ShoppingCart,
    title: "Kasir POS cepat",
    desc: "Tampilan transaksi dibuat ringkas agar staf bisa memilih produk, metode bayar, dan cetak struk tanpa banyak langkah.",
    points: ["Cash, QRIS, transfer", "Diskon transaksi", "Struk thermal"],
    className: "lg:col-span-5",
  },
  {
    icon: Boxes,
    title: "Produk dan stok",
    desc: "Kelola SKU, barcode, kategori, harga, dan stok masuk-keluar dari satu tempat.",
    points: ["Import Excel/CSV", "Stok otomatis", "Alert stok tipis"],
    className: "lg:col-span-7",
  },
  {
    icon: Store,
    title: "Katalog online",
    desc: "Bagikan link etalase agar pelanggan bisa melihat produk dan info toko sebelum datang.",
    points: ["Link toko", "Kategori produk", "Info kontak"],
    className: "lg:col-span-4",
  },
  {
    icon: ReceiptText,
    title: "Open Bill F&B",
    desc: "Cocok untuk cafe dan resto yang perlu menahan tagihan sebelum pelanggan membayar.",
    points: ["Tagihan berjalan", "Service charge", "Pajak"],
    className: "lg:col-span-4",
  },
  {
    icon: BarChart3,
    title: "Laporan penjualan",
    desc: "Lihat omzet, modal, laba kotor, produk terlaris, kasir aktif, dan stok menipis tanpa rekap spreadsheet.",
    points: ["Omzet harian", "Produk terlaris", "Rekap kasir"],
    className: "lg:col-span-4",
  },
];

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.04} className={feature.className}>
      <article className="group h-full rounded-[2rem] border border-border bg-card p-6 shadow-[0_18px_60px_-48px_rgba(15,23,42,0.5)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-brand-300 hover:shadow-[0_28px_80px_-56px_rgba(25,135,209,0.5)] dark:hover:border-brand-700">
        <IconBox icon={feature.icon} />
        <h3 className="mt-6 text-xl font-extrabold tracking-[-0.01em] text-foreground">
          {feature.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
          {feature.desc}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {feature.points.map((point) => (
            <span
              key={point}
              className="rounded-xl bg-muted px-3 py-2 text-xs font-bold text-foreground/80"
            >
              {point}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

const FEATURE_ROWS = [
  { icon: CreditCard, text: "Cash, QRIS, transfer" },
  { icon: Barcode, text: "Barcode dan SKU" },
  { icon: FileSpreadsheet, text: "Import produk Excel/CSV" },
  { icon: Ticket, text: "Voucher dan promo" },
  { icon: Percent, text: "Pajak dan service charge" },
  { icon: Users, text: "Admin dan kasir" },
  { icon: Printer, text: "Printer thermal" },
  { icon: PackageCheck, text: "Stok otomatis" },
];

function Features() {
  return (
    <section id="fitur" className="bg-page-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Fitur utama"
            title="Modul inti untuk toko yang ingin lebih tertib"
            desc="Fitur disusun mengikuti pekerjaan harian: transaksi di meja kasir, update stok, katalog produk, sampai laporan yang bisa dibaca pemilik usaha."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        <Reveal delay={0.14}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_ROWS.map((row) => (
              <div key={row.text} className="flex items-center gap-3 bg-card p-4">
                <IconBox icon={row.icon} className="h-9 w-9 rounded-xl" />
                <span className="text-sm font-bold text-foreground">{row.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    title: "Tidak lagi menebak stok",
    desc: "Barang keluar tercatat dari transaksi, sehingga pembelian ulang bisa diputuskan dari data.",
  },
  {
    title: "Kasir baru lebih cepat belajar",
    desc: "Alur transaksi dibuat sederhana, cocok untuk tim kecil yang sering berganti shift.",
  },
  {
    title: "Laporan siap dibaca pemilik",
    desc: "Omzet, laba kotor, dan produk terlaris tampil dalam ringkasan yang mudah dipahami.",
  },
  {
    title: "Toko terlihat lebih profesional",
    desc: "Struk thermal, katalog online, dan QRIS merchant memberi pengalaman yang lebih rapi ke pelanggan.",
  },
];

function Benefits() {
  return (
    <section className="bg-page-base py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionIntro
              eyebrow="Benefit untuk pemilik usaha"
              title="Lebih mudah mengontrol toko tanpa menambah kerumitan"
              desc="Zona Kasir mengurangi pekerjaan manual yang biasanya menyita waktu: menghitung stok, mengumpulkan rekap kasir, dan menyusun laporan penjualan."
              align="left"
            />
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {[
                "Transaksi lebih cepat",
                "Stok lebih terkontrol",
                "Rekap kasir lebih mudah",
                "Laporan siap dibaca pemilik usaha",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <PrimaryLink href={REGISTER_URL}>Coba mulai gratis</PrimaryLink>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <figure className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_24px_70px_-60px_rgba(15,23,42,0.5)]">
              <picture>
                <source srcSet="/assets/owner.webp" type="image/webp" />
                <img
                  src="/assets/owner.jpg"
                  alt="Pemilik usaha melihat laporan closing kasir Zona Kasir"
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover object-top"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (!image.dataset.fallback) {
                      image.dataset.fallback = "1";
                      image.src = "/og-image.png";
                    }
                  }}
                />
              </picture>
              <figcaption className="border-t border-border bg-muted/40 px-4 py-2.5 text-xs text-muted-foreground">
                Laporan closing yang mudah dipahami pemilik usaha.
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-[2rem] border border-border bg-surface p-6">
                <span className={cn("text-sm font-extrabold", BRAND_TEXT)}>
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold tracking-[-0.01em] text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {benefit.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const USE_CASES = [
  {
    icon: Coffee,
    title: "Coffee shop dan cafe",
    desc: "Open Bill, pajak, service charge, struk thermal, dan laporan menu terlaris.",
  },
  {
    icon: ShoppingBag,
    title: "Retail dan minimarket",
    desc: "Barcode, stok otomatis, produk banyak, dan pencarian cepat di meja kasir.",
  },
  {
    icon: Store,
    title: "Toko kelontong",
    desc: "Mulai dari pencatatan transaksi dasar tanpa biaya bulanan di awal.",
  },
  {
    icon: Building2,
    title: "UMKM berkembang",
    desc: "Upgrade saat mulai butuh kasir tambahan, voucher, dan laporan lebih lengkap.",
  },
];

function UseCases() {
  return (
    <section className="bg-page-base py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Cocok untuk siapa"
            title="Dibuat untuk usaha yang butuh sistem kasir rapi, bukan sistem yang rumit"
            desc="Setiap jenis usaha bisa memakai fitur inti yang sama, lalu mengaktifkan fitur Pro saat operasional mulai lebih padat."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-[2rem] border border-border bg-card p-6">
                <IconBox icon={item.icon} />
                <h3 className="mt-7 text-lg font-extrabold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const DASHBOARD_STATS = [
  { label: "Omzet bersih", value: "Rp48,2jt", icon: Wallet },
  { label: "Modal / HPP", value: "Rp31,5jt", icon: Boxes },
  { label: "Laba kotor", value: "Rp16,7jt", icon: TrendingUp },
  { label: "Transaksi", value: "1.284", icon: ReceiptText },
];

const CATALOG_ITEMS = [
  { name: "Kopi Susu Gula Aren", category: "Minuman", price: "Rp18.000" },
  { name: "Americano", category: "Minuman", price: "Rp15.000" },
  { name: "Croissant Butter", category: "Roti", price: "Rp22.000" },
];

function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-page-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Preview dashboard"
            title="Data transaksi, stok, dan katalog ada dalam satu alur kerja"
            desc="Contoh tampilan berikut menggambarkan bagaimana pemilik usaha bisa melihat performa toko dan mengelola katalog tanpa berpindah-pindah alat."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-7 mt-8 grid items-stretch gap-5 lg:grid-cols-2">
            <figure className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_90px_-68px_rgba(15,23,42,0.5)]">
              <picture>
                <source srcSet="/assets/presentasi.webp" type="image/webp" />
                <img
                  src="/assets/presentasi.jpg"
                  alt="Presentasi dashboard laporan Zona Kasir"
                  width="1280"
                  height="720"
                  loading="lazy"
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                  onError={(event) => {
                    const image = event.currentTarget;
                    if (!image.dataset.fallback) {
                      image.dataset.fallback = "1";
                      image.src = "/og-image.png";
                    }
                  }}
                />
              </picture>
              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-slate-900/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                Dashboard real-time
              </span>
            </figure>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Boxes, title: "Stok otomatis tercatat", desc: "Setiap penjualan langsung memotong stok produk." },
                { icon: QrCode, title: "QRIS merchant sendiri", desc: "Terima pembayaran QRIS atas nama tokomu." },
                { icon: FileSpreadsheet, title: "Laporan harian rapi", desc: "Omzet, laba, dan closing kasir per hari." },
                { icon: MonitorSmartphone, title: "Tablet & desktop", desc: "Jalan di browser, tanpa instal aplikasi." },
              ].map((feature) => (
                <article
                  key={feature.title}
                  className="flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-sm font-extrabold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-6 text-muted-foreground">
                    {feature.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-[0_30px_90px_-68px_rgba(15,23,42,0.5)]">
              <div className="flex flex-col gap-4 border-b border-border bg-muted/50 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-foreground">
                    Ringkasan bulan ini
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Omzet, HPP, laba, transaksi, dan performa produk.
                  </p>
                </div>
                <Badge>
                  <BarChart3 className="h-3.5 w-3.5" aria-hidden="true" />
                  Laporan usaha
                </Badge>
              </div>

              <div className="grid gap-px bg-border sm:grid-cols-4">
                {DASHBOARD_STATS.map((stat) => (
                  <div key={stat.label} className="bg-card p-5">
                    <stat.icon className={cn("h-5 w-5", BRAND_TEXT)} aria-hidden="true" />
                    <p className="mt-5 text-xs font-semibold text-muted-foreground">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-2xl font-extrabold tracking-[-0.02em] text-foreground">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid gap-6 p-5 lg:grid-cols-[1fr_0.72fr]">
                <div className="rounded-[1.5rem] border border-border p-5">
                  <div className="mb-5 flex items-center justify-between">
                    <p className="text-sm font-extrabold text-foreground">
                      Penjualan 12 minggu
                    </p>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      Stabil naik
                    </span>
                  </div>
                  <div className="flex h-52 items-end gap-2">
                    {[52, 64, 48, 70, 66, 82, 76, 92, 84, 98, 88, 100].map(
                      (height, index) => (
                        <motion.span
                          key={`${height}-${index}`}
                          initial={{ scaleY: 0.08 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.58,
                            delay: index * 0.025,
                            ease: springEase,
                          }}
                          style={{ height: `${height}%` }}
                          className="origin-bottom flex-1 rounded-t-xl bg-brand-500"
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="flex h-full flex-col rounded-[1.5rem] border border-brand-200/70 bg-accent p-5 dark:border-brand-900/70">
                  <div className="flex items-center gap-3">
                    <IconBox icon={PackageMinus} className="bg-card text-brand-700 dark:text-brand-300" />
                    <div>
                      <p className="text-sm font-extrabold text-foreground">Stok menipis</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Bahan dan produk yang perlu dicek.
                      </p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-1 flex-col justify-center gap-3">
                    {[
                      { name: "Susu UHT", qty: "5 tersisa" },
                      { name: "Gula aren", qty: "8 tersisa" },
                      { name: "Cup 12 oz", qty: "14 tersisa" },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-2xl bg-card/80 px-3 py-2.5 text-sm text-foreground"
                      >
                        <span>{item.name}</span>
                        <span className="font-bold">{item.qty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[2rem] border border-border bg-card p-4">
              <div className="rounded-[1.55rem] bg-brand-700 p-5 text-white">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15">
                    <Coffee className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-extrabold">Kopi Senja</h3>
                    <p className="text-xs text-white/75">
                      zonakasir.com/store/kopi-senja
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-4">
                {CATALOG_ITEMS.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 rounded-[1.35rem] bg-muted/50 p-4"
                  >
                    <div>
                      <p className="text-sm font-extrabold text-foreground">
                        {item.name}
                      </p>
                      <p className="mt-1 text-xs font-medium text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                    <p className={cn("shrink-0 text-sm font-extrabold", BRAND_TEXT)}>
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1.35rem] border border-dashed border-brand-300/60 bg-card p-4">
                <p className="text-sm font-extrabold text-foreground">
                  Katalog sebagai etalase
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Produk, harga, kategori, dan info toko tampil rapi untuk
                  pelanggan. Transaksi tetap dicatat lewat POS.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const PLANS = [
  {
    name: "FREE",
    price: "Rp0",
    period: "selamanya",
    desc: "Untuk mulai mencatat transaksi dan produk dasar tanpa biaya bulanan.",
    cta: "Mulai Gratis",
    href: REGISTER_URL,
    highlight: false,
    features: [
      "Maksimal 20 produk",
      "1 akun kasir",
      "Kasir POS",
      "QRIS Dinamis",
      "Katalog online",
      "Struk dengan branding Zona Kasir",
    ],
  },
  {
    name: "PRO",
    price: "Rp50.000",
    period: "/bulan",
    desc: "Untuk toko dan cafe yang mulai butuh operasional lebih lengkap.",
    cta: "Upgrade Pro",
    href: REGISTER_URL,
    highlight: true,
    features: [
      "Produk tanpa batas",
      "Multiple kasir",
      "QRIS Dinamis",
      "Rekapitulasi laporan lengkap",
      "Open Bill",
      "Voucher dan promo",
      "Pajak dan service charge",
      "Struk tanpa branding Zona Kasir",
    ],
  },
  {
    name: "BUSINESS",
    price: "Custom",
    period: "sesuai kebutuhan",
    desc: "Cocok untuk bisnis yang membutuhkan aplikasi dengan penyesuaian brand, setup khusus, dan QRIS statis milik merchant.",
    cta: "Konsultasi Business",
    href: CONTACT_URL,
    target: "_blank",
    highlight: false,
    features: [
      "QRIS Statis khusus merchant",
      "Custom aplikasi",
      "Custom branding",
      "Setup khusus",
      "Support prioritas",
    ],
  },
];

function Pricing() {
  return (
    <section id="harga" className="bg-page-accent py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Pricing"
            title="Mulai gratis, upgrade saat operasional mulai ramai"
            desc="Paket dibuat sederhana agar pemilik usaha bisa mencoba dulu, lalu pindah ke Pro ketika produk, kasir, dan kebutuhan laporan bertambah."
          />
        </Reveal>

        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 0.05}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-[2rem] border bg-card p-6 shadow-[0_26px_80px_-60px_rgba(15,23,42,0.48)]",
                  plan.highlight
                    ? "border-brand-400 ring-4 ring-brand-500/15 dark:ring-brand-500/25"
                    : "border-border"
                )}
              >
                {plan.highlight ? (
                  <span className="absolute right-5 top-5 rounded-xl bg-brand-700 px-3 py-1.5 text-xs font-extrabold text-white">
                    Rekomendasi
                  </span>
                ) : null}
                <div className="min-h-[13.5rem]">
                  <h3 className="text-xl font-extrabold text-foreground">{plan.name}</h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                    {plan.desc}
                  </p>
                  <div className="mt-7 flex flex-wrap items-end gap-x-2 gap-y-1">
                    <span className="text-4xl font-extrabold tracking-[-0.035em] text-foreground sm:text-5xl">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm font-semibold text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                      <span className="font-semibold text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.highlight ? (
                  <PrimaryLink href={plan.href} target={plan.target} className="mt-8 w-full">
                    {plan.cta}
                  </PrimaryLink>
                ) : (
                  <SecondaryLink href={plan.href} target={plan.target} className="mt-8 w-full">
                    {plan.cta}
                  </SecondaryLink>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "Saat jam ramai, kami tidak lagi bolak-balik cek catatan. Transaksi, menu terjual, dan stok yang mulai tipis sudah terlihat dari dashboard setelah toko tutup.",
    name: "Frestiono",
    role: "Pimpinan Koperasi KPRI Upaya, Kepanjen",
  },
  {
    quote:
      "Kasir baru lebih cepat jalan karena alurnya sederhana. Saya bisa cek penjualan harian tanpa menunggu rekap manual dari masing-masing shift.",
    name: "Maya Lestari",
    role: "Owner toko Lestari, Sidoarjo",
  },
  {
    quote:
      "Kami mulai dari produk yang belum tertata dan struk masih seadanya. Setelah transaksi harian makin banyak, laporan penjualan dan struk tanpa branding membuat operasional terlihat jauh lebih rapi.",
    name: "Dimas Wicaksono",
    role: "Owner Warung Fatimah, Bangil",
  },
];

function Testimonials() {
  return (
    <section className="bg-page-base py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="Cerita pengguna"
            title="Masalah kecil di kasir bisa jadi pekerjaan besar kalau terus manual"
            desc="Contoh testimoni berikut menggambarkan situasi nyata yang sering dialami pemilik usaha kecil saat mulai merapikan operasional."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="h-full rounded-[2rem] border border-border bg-surface p-6">
                <div className="mb-5 flex items-center gap-1.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-muted-foreground">
                    Dipercaya pengguna UMKM
                  </span>
                </div>
                <p className="text-base font-semibold leading-8 text-foreground/90">
                  "{item.quote}"
                </p>
                <div className="mt-8 border-t border-border pt-5">
                  <p className="font-extrabold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Apa itu Zona Kasir?",
    a: "Zona Kasir adalah aplikasi kasir online dan POS berbasis web untuk mengelola transaksi, produk, stok, QRIS merchant, katalog, struk, dan laporan usaha.",
  },
  {
    q: "Apakah Zona Kasir bisa digunakan gratis?",
    a: "Bisa. Paket FREE seharga Rp0 mendukung kasir POS, tampilan QRIS merchant, katalog online, maksimal 20 produk, dan 1 akun kasir.",
  },
  {
    q: "Apa perbedaan FREE, PRO, dan BUSINESS?",
    a: "FREE cocok untuk mulai dengan maksimal 20 produk. PRO Rp50.000/bulan menambah produk tanpa batas, multiple kasir, Open Bill, promo, pajak, service charge, dan laporan lengkap. BUSINESS mulai Rp1 jutaan/tahun untuk custom aplikasi, custom branding, setup khusus, dan QRIS dinamis.",
  },
  {
    q: "Apakah katalog bisa dipakai untuk order online?",
    a: "Tidak. Katalog Zona Kasir dibuat sebagai etalase informasi untuk melihat produk, harga, kategori, dan info toko. Transaksi tetap dicatat melalui kasir POS.",
  },
  {
    q: "Apakah bisa menggunakan QRIS sendiri?",
    a: "Bisa. Zona Kasir dapat menampilkan QRIS merchant milik usaha Anda di alur kasir, sehingga proses pembayaran tetap rapi dan mudah dicek oleh kasir.",
  },
  {
    q: "Apakah bisa cetak struk thermal?",
    a: "Bisa. Zona Kasir mendukung printer thermal 58mm dan 80mm untuk kebutuhan kasir toko, retail, dan F&B.",
  },
  {
    q: "Apakah tersedia QRIS dinamis?",
    a: "Opsi pembayaran yang lebih otomatis dapat dibahas di paket BUSINESS sesuai kebutuhan dan kesiapan operasional merchant.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-page-surface py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
        <Reveal>
          <SectionIntro
            eyebrow="FAQ"
            title="Pertanyaan yang biasanya muncul sebelum mencoba"
            desc="Jawaban singkat tentang paket, QRIS, katalog, struk, dan fitur untuk usaha kecil."
            align="left"
          />
          <SecondaryLink href={REGISTER_URL}>Coba Paket FREE</SecondaryLink>
        </Reveal>

        <div className="divide-y divide-border rounded-[2rem] border border-border bg-card px-5">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div key={faq.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-extrabold text-foreground">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      BRAND_TEXT,
                      isOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: springEase }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-5 text-sm leading-7 text-muted-foreground sm:text-base">
                        {faq.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-page-base pb-16 pt-12 lg:pb-24 lg:pt-16">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-surface" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.2rem] border border-brand-200/80 bg-[linear-gradient(135deg,hsl(var(--accent)),hsl(var(--card))_62%,hsl(var(--background)))] p-7 text-foreground shadow-[0_36px_110px_-78px_rgba(25,135,209,0.7)] dark:border-brand-900/80 sm:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_-20%,hsl(var(--primary)/0.18),transparent_45%)]"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <Badge>
                  Mulai dari Rp0
                </Badge>
                <h2 className="mt-6 max-w-4xl text-balance text-3xl font-extrabold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
                  Rapikan transaksi, stok, dan laporan tanpa menunggu toko besar dulu
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                  Daftarkan toko, masukkan produk, unggah QRIS merchant, lalu
                  gunakan Zona Kasir untuk transaksi harian.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <PrimaryLink href={REGISTER_URL} className="w-full sm:w-auto lg:w-full">
                  Daftar gratis
                </PrimaryLink>
                <SecondaryLink
                  href={CONTACT_URL}
                  target="_blank"
                  className="w-full sm:w-auto lg:w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Konsultasi BUSINESS
                </SecondaryLink>
              </div>
            </div>

            <div className="relative mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-brand-200/60 pt-6 dark:border-brand-900/60">
              {[
                "Gratis selamanya untuk 20 produk",
                "Tanpa biaya pemasangan",
                "QRIS atas nama tokomu",
                "Jalan di browser, tanpa instal",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Aplikasi kasir online dan POS untuk toko, UMKM, retail, coffee
              shop, dan F&B di Indonesia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-foreground">Produk</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-muted-foreground">
              {[
                ["Fitur", "#fitur"],
                ["Dashboard", "#dashboard"],
                ["Harga", "#harga"],
                ["FAQ", "#faq"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-foreground">Akun</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-muted-foreground">
              <li>
                <a href={LOGIN_URL} className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
                  Login
                </a>
              </li>
              <li>
                <a href={REGISTER_URL} className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
                  Daftar gratis
                </a>
              </li>
              <li>
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-600 dark:hover:text-brand-300">
                  BUSINESS
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-extrabold text-foreground">Kontak</h3>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-muted-foreground">
              <li>
                <a
                  href="https://www.instagram.com/zona.kasir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @zona.kasir
                </a>
              </li>
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  +62 859-1069-97680
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@zonakasir.com"
                  className="flex items-center gap-2 transition-colors hover:text-brand-600 dark:hover:text-brand-300"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  support@zonakasir.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-center text-xs font-semibold text-muted-foreground sm:flex-row">
          <span>&copy; 2026 Zona Kasir</span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:support@zonakasir.com?subject=Kebijakan%20privasi%20Zona%20Kasir"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              Kebijakan privasi
            </a>
            <a
              href="mailto:support@zonakasir.com?subject=Syarat%20layanan%20Zona%20Kasir"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
            >
              Syarat layanan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function ZonaKasirLandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground antialiased">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustStrip />
        <Features />
        <Benefits />
        <UseCases />
        <DashboardPreview />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
