import Link from "next/link";
import { services } from "@/lib/services";

export default function ServiciosPage() {
  const grouped = services.reduce<Record<string, typeof services>>((acc, s) => {
    (acc[s.category] ||= []).push(s);
    return acc;
  }, {});
  return (
    <>
      <div className="section-h">
        <h2>Todos los servicios</h2>
        <p>Paga en línea y atiéndete por video o en el hospital.</p>
      </div>

      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat} style={{ marginBottom: 28 }}>
          <h3 style={{ margin: "18px 0 12px", fontSize: 16, color: "var(--ink-soft)" }}>
            {cat}
          </h3>
          <div className="grid">
            {items.map((s) => (
              <Link
                key={s.id}
                href={`/servicios/${s.id}`}
                className="card"
                style={{ color: "inherit" }}
              >
                <div className="card-icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <p className="card-desc">{s.shortDescription}</p>
                <div className="card-row">
                  <span className={`badge ${s.telemedicine ? "badge-tele" : ""}`}>
                    {s.telemedicine ? "Por video" : "Presencial"}
                  </span>
                  <span className="price">
                    C$ {s.priceCordobas.toLocaleString("es-NI")}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
