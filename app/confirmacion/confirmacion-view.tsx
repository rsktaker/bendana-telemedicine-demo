"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLang } from "@/lib/i18n";

export function ConfirmacionView() {
  const sp = useSearchParams();
  const { t } = useLang();
  const name = sp.get("name") || "Paciente";
  const code = sp.get("code") || "XXXXXX";
  const service = sp.get("service") ? decodeURIComponent(sp.get("service")!) : "Servicio";

  const helloLine = t("hello_paid")
    .replace("{name}", name)
    .replace("{service}", service);

  return (
    <>
      <div className="banner">
        <strong>{t("payment_received")}</strong> {t("details_emailed")}
      </div>

      <div className="detail" style={{ gridTemplateColumns: "1fr" }}>
        <div>
          <h1>{t("reservation_confirmed")}</h1>
          <p className="lede">{helloLine}</p>

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
              {t("your_order_code")}
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

          <h3 style={{ marginBottom: 6, fontSize: 16 }}>{t("whats_next")}</h3>
          <ul>
            <li>{t("next_1")}</li>
            <li>{t("next_2")}</li>
            <li>{t("next_3")}</li>
          </ul>

          <div style={{ marginTop: 20 }}>
            <Link className="btn btn-dark" href="/servicios">
              {t("see_more_services")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
