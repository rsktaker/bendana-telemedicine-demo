import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/services";
import { CheckoutForm } from "./checkout-form";

export function generateStaticParams() {
  return services.map((s) => ({ id: s.id }));
}

export default async function ServicioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getService(id);
  if (!service) notFound();

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Link href="/servicios" className="muted">
          ← Volver a servicios
        </Link>
      </div>
      <div className="detail">
        <div>
          <div style={{ fontSize: 40, marginBottom: 8 }}>{service.icon}</div>
          <h1>{service.name}</h1>
          <p className="lede">{service.longDescription}</p>

          <span className={`badge ${service.telemedicine ? "badge-tele" : ""}`}>
            {service.telemedicine
              ? "Atención por videollamada"
              : "Atención presencial en el hospital"}
          </span>

          <h3 style={{ marginTop: 24, marginBottom: 6, fontSize: 16 }}>Incluye</h3>
          <ul>
            {service.includes.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <CheckoutForm
          serviceId={service.id}
          serviceName={service.name}
          priceCordobas={service.priceCordobas}
          telemedicine={service.telemedicine}
        />
      </div>
    </>
  );
}
