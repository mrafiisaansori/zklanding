import { useEffect, useMemo, useState } from "react";

// Target rilis: 4 Juli 2026, 00:00 WIB (Asia/Jakarta, UTC+7).
export const LAUNCH_DATE = new Date("2026-07-04T00:00:00+07:00");

type Remaining = { days: number; hours: number; minutes: number; seconds: number; done: boolean };

function getRemaining(target: Date): Remaining {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative grid h-20 w-20 place-items-center rounded-2xl border border-border bg-card/80 shadow-[0_20px_60px_-40px_rgba(19,134,209,0.6)] backdrop-blur sm:h-28 sm:w-28">
        <span className="bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-3xl font-extrabold tabular-nums tracking-tight text-transparent sm:text-5xl">
          {pad(value)}
        </span>
      </div>
      <span className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function ComingSoon({ onLaunch }: { onLaunch?: () => void }) {
  const [time, setTime] = useState<Remaining>(() => getRemaining(LAUNCH_DATE));

  useEffect(() => {
    const id = setInterval(() => {
      const next = getRemaining(LAUNCH_DATE);
      setTime(next);
      if (next.done) {
        clearInterval(id);
        onLaunch?.();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [onLaunch]);

  const launchLabel = useMemo(
    () =>
      LAUNCH_DATE.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "Asia/Jakarta",
      }),
    []
  );

  return (
    <main className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-page-base px-5 py-14 text-center">
      {/* Aksen latar halus */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-brand-200/30 blur-3xl dark:bg-brand-900/30" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-[-12rem] right-[-8rem] h-[26rem] w-[26rem] rounded-full bg-brand-100/40 blur-3xl dark:bg-brand-950/40" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        {/* Logo */}
        <div className="animate-fade-up flex items-center gap-3" style={{ animationDelay: "0ms" }}>
          <img
            src="/zona-kasir-icon.png"
            alt="Zona Kasir"
            width={56}
            height={56}
            className="h-12 w-12 rounded-2xl object-contain dark:hidden sm:h-14 sm:w-14"
          />
          <img
            src="/logo-baru-putih.png"
            alt="Zona Kasir"
            width={56}
            height={56}
            className="hidden h-12 w-12 rounded-2xl object-contain dark:block sm:h-14 sm:w-14"
          />
          <span className="text-xl font-extrabold tracking-[0.1em] text-foreground sm:text-2xl">ZONA KASIR</span>
        </div>

        {/* Badge */}
        <span
          className="animate-fade-up mt-9 inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-card/70 px-4 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur dark:border-brand-800 dark:text-brand-300"
          style={{ animationDelay: "80ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
          </span>
          Segera hadir
        </span>

        {/* Judul */}
        <h1
          className="animate-fade-up mt-6 text-5xl font-black tracking-[-0.03em] text-foreground sm:text-7xl"
          style={{ animationDelay: "140ms" }}
        >
          COMING&nbsp;SOON
        </h1>

        {/* Subjudul */}
        <p
          className="animate-fade-up mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          Zona Kasir akan segera hadir dengan pengalaman yang lebih baik untuk
          mengelola transaksi, stok, dan laporan usaha Anda.
        </p>

        {/* Tanggal rilis */}
        <p
          className="animate-fade-up mt-7 inline-flex items-center gap-2 text-sm font-semibold text-foreground sm:text-base"
          style={{ animationDelay: "300ms" }}
        >
          <span className="h-px w-8 bg-border" />
          Ready on {launchLabel}
          <span className="h-px w-8 bg-border" />
        </p>

        {/* Countdown */}
        <div className="animate-fade-up mt-9 flex items-start justify-center gap-3 sm:gap-5" style={{ animationDelay: "380ms" }}>
          <CountUnit value={time.days} label="Hari" />
          <span className="pt-5 text-2xl font-bold text-brand-400 sm:pt-9 sm:text-4xl">:</span>
          <CountUnit value={time.hours} label="Jam" />
          <span className="pt-5 text-2xl font-bold text-brand-400 sm:pt-9 sm:text-4xl">:</span>
          <CountUnit value={time.minutes} label="Menit" />
          <span className="pt-5 text-2xl font-bold text-brand-400 sm:pt-9 sm:text-4xl">:</span>
          <CountUnit value={time.seconds} label="Detik" />
        </div>

        <p className="mt-12 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Zona Kasir &middot; Point of Sale
        </p>
      </div>
    </main>
  );
}
