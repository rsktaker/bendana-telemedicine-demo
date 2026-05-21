import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hospital Bendaña — Servicios en línea",
  description:
    "Compra en línea servicios del Hospital Bendaña: laboratorio, imágenes, consultas y telemedicina.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <a className="brand" href="/">
            <span className="brand-mark" aria-hidden>+</span>
            <span>
              <strong>Hospital Bendaña</strong>
              <small>Servicios en línea — demo</small>
            </span>
          </a>
          <nav>
            <a href="/servicios">Servicios</a>
            <a href="/como-funciona">Cómo funciona</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>Demo interna · No procesa pagos reales.</span>
          <span>Hospital Bendaña</span>
        </footer>
      </body>
    </html>
  );
}
