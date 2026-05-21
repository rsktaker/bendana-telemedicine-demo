"use client";

import Link from "next/link";
import { services, type Service } from "@/lib/services";
import { useLang } from "@/lib/i18n";

export default function ServiciosPage() {
  const { lang, t } = useLang();
  const grouped = services.reduce<Record<string, Service[]>>((acc, s) => {
    (acc[s.categoryKey] ||= []).push(s);
    return acc;
  }, {});
  return (
    <>
      <div className="section-h">
        <h2>{t("all_services_title")}</h2>
        <p>{t("all_services_sub")}</p>
      </div>

      {Object.entries(grouped).map(([cat, items]) => (
        <section key={cat} style={{ marginBottom: 28 }}>
          <h3
            style={{ margin: "18px 0 12px", fontSize: 16, color: "var(--ink-soft)" }}
          >
            {t(cat as keyof typeof import("@/lib/i18n").dict)}
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
                <h3>{s.name[lang]}</h3>
                <p className="card-desc">{s.shortDescription[lang]}</p>
                <div className="card-row">
                  <span className={`badge ${s.telemedicine ? "badge-tele" : ""}`}>
                    {s.telemedicine ? t("badge_video") : t("badge_in_person")}
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
