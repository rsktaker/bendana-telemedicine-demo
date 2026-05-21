"use client";

import Link from "next/link";
import { services } from "@/lib/services";
import { useLang } from "@/lib/i18n";

export default function HomePage() {
  const { lang, t } = useLang();
  const featured = services.slice(0, 3);
  return (
    <>
      <section className="hero">
        <h1>{t("hero_title")}</h1>
        <p>{t("hero_body")}</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            className="btn btn-primary"
            href="/consulta?service=Demo%20de%20videollamada&name=Invitado&room=bendana-demo-publica"
          >
            {t("cta_try_video")}
          </Link>
          <Link className="btn btn-secondary" href="/servicios">
            {t("cta_see_services")}
          </Link>
          <Link className="btn btn-secondary" href="/como-funciona">
            {t("cta_how_it_works")}
          </Link>
        </div>
      </section>

      <section className="tele-banner">
        <div>
          <h2>{t("tele_banner_title")}</h2>
          <p>{t("tele_banner_body")}</p>
        </div>
        <Link
          className="btn btn-dark"
          href="/consulta?service=Demo%20de%20videollamada&name=Invitado&room=bendana-demo-publica"
        >
          {t("tele_banner_cta")}
        </Link>
      </section>

      <div className="section-h">
        <h2>{t("featured_title")}</h2>
        <p>
          <Link href="/servicios">{t("see_all")}</Link>
        </p>
      </div>

      <div className="grid">
        {featured.map((s) => (
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
                {s.telemedicine ? t("badge_video") : t(s.categoryKey)}
              </span>
              <span className="price">
                C$ {s.priceCordobas.toLocaleString("es-NI")}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="section-h">
        <h2>{t("why_online_title")}</h2>
      </div>
      <div className="steps">
        <div className="step">
          <b>{t("step1_label")}</b>
          {t("step1_body")}
        </div>
        <div className="step">
          <b>{t("step2_label")}</b>
          {t("step2_body")}
        </div>
        <div className="step">
          <b>{t("step3_label")}</b>
          {t("step3_body")}
        </div>
      </div>
    </>
  );
}
