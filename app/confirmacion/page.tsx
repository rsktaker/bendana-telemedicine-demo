import Link from "next/link";

export default async function ConfirmacionPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; code?: string; service?: string }>;
}) {
  const sp = await searchParams;
  const name = sp.name || "Paciente";
  const code = sp.code || "XXXXXX";
  const service = sp.service ? decodeURIComponent(sp.service) : "Servicio";

  return (
    <>
      <div className="banner">
        <strong>¡Pago recibido!</strong> Te enviamos los detalles por correo.
      </div>

      <div className="detail" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <h1>Reservación confirmada</h1>
          <p className="lede">
            Hola, {name}. Tu servicio <strong>{service}</strong> está pagado.
          </p>

          <div
            style={{
              background: "#fbfcfe",
              border: "1px solid var(--line)",
              borderRadius: 12,
              padding: 20,
              margin: "16px 0",
              textAlign: "center",
            }}
          >
            <div className="muted" style={{ marginBottom: 6 }}>
              Tu código de orden
            </div>
            <div
              style={{
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "var(--brand-strong)",
              }}
            >
              {code}
            </div>
          </div>

          <h3 style={{ marginBottom: 6, fontSize: 16 }}>¿Qué sigue?</h3>
          <ul>
            <li>
              Preséntate en el Hospital Bendaña con este código y un documento
              de identidad.
            </li>
            <li>
              Horario del laboratorio e imágenes: lunes a sábado, 6:30 a.m. a 5:00 p.m.
            </li>
            <li>Los resultados se publican en tu portal en línea.</li>
          </ul>

          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-dark" href="/servicios">
              Ver más servicios
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
