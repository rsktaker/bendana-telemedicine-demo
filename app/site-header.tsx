"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark" aria-hidden>
          +
        </span>
        <span>
          <strong>Hospital Bendaña</strong>
          <small>{t("brand_sub")}</small>
        </span>
      </Link>
      <nav>
        <Link href="/servicios">{t("nav_services")}</Link>
        <Link href="/como-funciona">{t("nav_how")}</Link>
        <div className="lang-toggle" role="group" aria-label={t("lang_toggle_label")}>
          <button
            type="button"
            className={lang === "es" ? "active" : ""}
            onClick={() => setLang("es")}
            aria-pressed={lang === "es"}
          >
            ES
          </button>
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
