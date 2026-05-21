"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { getService } from "@/lib/services";
import { useLang } from "@/lib/i18n";
import { CheckoutForm } from "./checkout-form";

export default function ServicioDetailPage() {
  const params = useParams<{ id: string }>();
  const { lang, t } = useLang();
  const service = getService(params.id);
  if (!service) {
    notFound();
  }

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Link href="/servicios" className="muted">
          {t("back_to_services")}
        </Link>
      </div>
      <div className="detail">
        <div>
          <div style={{ fontSize: 40, marginBottom: 8 }}>{service.icon}</div>
          <h1>{service.name[lang]}</h1>
          <p className="lede">{service.longDescription[lang]}</p>

          <span className={`badge ${service.telemedicine ? "badge-tele" : ""}`}>
            {service.telemedicine
              ? t("attention_video")
              : t("attention_in_person")}
          </span>

          <h3 style={{ marginTop: 24, marginBottom: 6, fontSize: 16 }}>
            {t("includes")}
          </h3>
          <ul>
            {service.includes[lang].map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <CheckoutForm
          serviceId={service.id}
          serviceName={service.name[lang]}
          priceCordobas={service.priceCordobas}
          telemedicine={service.telemedicine}
        />
      </div>
    </>
  );
}
