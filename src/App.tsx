import { useState } from "react";
import ZonaKasirLandingPage from "@/components/ui/zona-kasir-landing-page";
import ComingSoon, { LAUNCH_DATE } from "@/components/ui/coming-soon";

export default function App() {
  // Tampilkan landing asli bila waktu sekarang sudah mencapai/melewati tanggal rilis.
  const [launched, setLaunched] = useState(() => Date.now() >= LAUNCH_DATE.getTime());

  if (!launched) {
    // Saat countdown habis, onLaunch men-switch otomatis ke landing tanpa reload.
    return <ComingSoon onLaunch={() => setLaunched(true)} />;
  }

  return <ZonaKasirLandingPage />;
}
