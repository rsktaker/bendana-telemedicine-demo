"use client";

import { useLang } from "@/lib/i18n";

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <span>{t("footer_demo")}</span>
      <span>Hospital Bendaña</span>
    </footer>
  );
}
