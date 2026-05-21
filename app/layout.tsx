import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

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
        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
