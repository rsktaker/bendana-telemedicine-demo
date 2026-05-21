"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function ComoFuncionaPage() {
  const { t } = useLang();
  return (
    <>
      <div className="section-h">
        <h2>{t("how_title")}</h2>
        <p>{t("how_sub")}</p>
      </div>

      <div className="steps">
        <div className="step">
          <b>{t("how_step1_label")}</b>
          {t("how_step1_body")}
        </div>
        <div className="step">
          <b>{t("how_step2_label")}</b>
          {t("how_step2_body")}
        </div>
        <div className="step">
          <b>{t("how_step3_label")}</b>
          {t("how_step3_body")}
        </div>
      </div>

      <div className="section-h">
        <h2>{t("faq_title")}</h2>
      </div>
      <div className="grid">
        <div className="card">
          <h3>{t("faq1_q")}</h3>
          <p className="card-desc">{t("faq1_a")}</p>
        </div>
        <div className="card">
          <h3>{t("faq2_q")}</h3>
          <p className="card-desc">{t("faq2_a")}</p>
        </div>
        <div className="card">
          <h3>{t("faq3_q")}</h3>
          <p className="card-desc">{t("faq3_a")}</p>
        </div>
        <div className="card">
          <h3>{t("faq4_q")}</h3>
          <p className="card-desc">{t("faq4_a")}</p>
        </div>
      </div>

      <div style={{ marginTop: 28 }}>
        <Link className="btn btn-dark" href="/servicios">
          {t("cta_see_services")}
        </Link>
      </div>
    </>
  );
}
