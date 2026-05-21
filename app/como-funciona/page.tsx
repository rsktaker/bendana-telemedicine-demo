import Link from "next/link";

export default function ComoFuncionaPage() {
  return (
    <>
      <div className="section-h">
        <h2>Cómo funciona</h2>
        <p>Tres pasos para atenderte con el Hospital Bendaña en línea.</p>
      </div>

      <div className="steps">
        <div className="step">
          <b>1 · Elige tu servicio</b>
          Consultas por video, exámenes de laboratorio, estudios de imágenes o
          un paquete completo. Cada servicio tiene su precio claro y lo que
          incluye.
        </div>
        <div className="step">
          <b>2 · Paga en línea</b>
          Con tarjeta, transferencia o billetera móvil. Recibes confirmación al
          instante por correo y por SMS.
        </div>
        <div className="step">
          <b>3 · Atiéndete</b>
          Si elegiste consulta por video, te conectamos en el momento por
          videollamada. Si es un examen presencial, llegas al hospital con tu
          código y te atendemos directo.
        </div>
      </div>

      <div className="section-h">
        <h2>Preguntas frecuentes</h2>
      </div>
      <div className="grid">
        <div className="card">
          <h3>¿Es seguro pagar en línea?</h3>
          <p className="card-desc">
            Sí. Esta demo no procesa pagos reales, pero en producción usaría una
            pasarela bancaria local con cumplimiento PCI.
          </p>
        </div>
        <div className="card">
          <h3>¿Necesito instalar algo para el video?</h3>
          <p className="card-desc">
            No. La videollamada corre en el navegador. Solo necesitas permitir
            cámara y micrófono.
          </p>
        </div>
        <div className="card">
          <h3>¿Y si vivo fuera de Managua?</h3>
          <p className="card-desc">
            Las consultas por video son para cualquier persona en Nicaragua.
            Para exámenes presenciales, tu código te espera cuando puedas venir.
          </p>
        </div>
        <div className="card">
          <h3>¿Y la receta?</h3>
          <p className="card-desc">
            El médico la envía como documento digital firmado, válido en las
            farmacias afiliadas.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <Link className="btn btn-dark" href="/servicios">
          Ver servicios
        </Link>
      </div>
    </>
  );
}
