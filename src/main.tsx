import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Hilangkan preloader setelah React mount (fade-out lalu hapus dari DOM).
function hidePreloader() {
  const el = document.getElementById("zk-preloader");
  if (!el) return;
  el.classList.add("zk-hide");
  setTimeout(() => el.remove(), 500);
}
if (document.readyState === "complete") {
  requestAnimationFrame(hidePreloader);
} else {
  window.addEventListener("load", () => requestAnimationFrame(hidePreloader));
}
