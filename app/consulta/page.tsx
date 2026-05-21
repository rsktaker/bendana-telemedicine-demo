import Link from "next/link";
import { JitsiRoom } from "./jitsi-room";

export default async function ConsultaPage({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; room?: string; service?: string }>;
}) {
  const sp = await searchParams;
  const name = sp.name || "Paciente";
  const service = sp.service || "Consulta médica";
  const room =
    sp.room ||
    `bendana-demo-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

  return (
    <>
      <div className="banner">
        <strong>¡Pago recibido!</strong> Te conectamos con tu médico ahora.
        Esta sala es privada y solo accesible con este enlace.
      </div>

      <div className="room-meta">
        <div>
          <h1>{decodeURIComponent(service)}</h1>
          <p className="muted" style={{ margin: "4px 0 0" }}>
            Sala: <code>{room}</code> · Paciente: {name}
          </p>
        </div>
        <Link className="btn btn-ghost" href="/servicios">
          Salir
        </Link>
      </div>

      <JitsiRoom room={room} name={name} />

      <div className="room-tip">
        <strong>Tip:</strong> permite el acceso a tu cámara y micrófono cuando el
        navegador lo pida. La llamada se ejecuta sobre Jitsi Meet en un servidor
        público y es gratuita — en producción se reemplazaría por un servidor de
        video del hospital o un proveedor con HIPAA/cumplimiento local.
      </div>
    </>
  );
}
