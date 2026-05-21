import Link from "next/link";
import { services } from "@/lib/services";

export default function HomePage() {
  const featured = services.slice(0, 3);
  return (
    <>
      <section className="hero">
        <h1>Atención médica al alcance de un clic.</h1>
        <p>
          Compra en línea consultas por video, exámenes de laboratorio, imágenes y
          paquetes del Hospital Bendaña. Paga desde donde estés y atiéndete por
          videollamada o pasa al hospital con tu código.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link className="btn btn-primary" href="/servicios">
            Ver servicios
          </Link>
          <Link className="btn btn-secondary" href="/como-funciona">
            Cómo funciona
          </Link>
        </div>
      </section>

      <div className="section-h">
        <h2>Servicios destacados</h2>
        <p>
          <Link href="/servicios">Ver todos →</Link>
        </p>
      </div>

      <div className="grid">
        {featured.map((s) => (
          <Link key={s.id} href={`/servicios/${s.id}`} className="card" style={{ color: "inherit" }}>
            <div className="card-icon">{s.icon}</div>
            <h3>{s.name}</h3>
            <p className="card-desc">{s.shortDescription}</p>
            <div className="card-row">
              <span className={`badge ${s.telemedicine ? "badge-tele" : ""}`}>
                {s.telemedicine ? "Por video" : s.category}
              </span>
              <span className="price">C$ {s.priceCordobas.toLocaleString("es-NI")}</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="section-h">
        <h2>¿Por qué en línea?</h2>
      </div>
      <div className="steps">
        <div className="step">
          <b>1 · Elige</b>
          Consulta, laboratorio, imágenes o un paquete completo.
        </div>
        <div className="step">
          <b>2 · Paga</b>
          Tarjeta, transferencia o billetera móvil — todo en línea.
        </div>
        <div className="step">
          <b>3 · Atiéndete</b>
          Por video desde casa, o presenta tu código en el hospital.
        </div>
      </div>
    </>
  );
}
