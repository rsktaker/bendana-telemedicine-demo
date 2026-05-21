"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useLang } from "@/lib/i18n";
import { JitsiRoom } from "./jitsi-room";

export function ConsultaView() {
  const sp = useSearchParams();
  const { t } = useLang();

  const name = sp.get("name") || "Paciente";
  const service = sp.get("service") || "Consulta";
  const room = useMemo(
    () =>
      sp.get("room") ||
      `bendana-demo-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
    [sp],
  );

  return (
    <>
      <div className="banner">
        <strong>{t("payment_received")}</strong> {t("connecting_now")}
      </div>

      <div className="room-meta">
        <div>
          <h1>{decodeURIComponent(service)}</h1>
          <p className="muted" style={{ margin: "4px 0 0" }}>
            {t("room")}: <code>{room}</code> · {t("patient")}: {name}
          </p>
        </div>
        <Link className="btn btn-ghost" href="/servicios">
          {t("exit")}
        </Link>
      </div>

      <JitsiRoom room={room} name={name} />

      <div className="room-tip">
        <strong>Tip:</strong> {t("room_tip")}
      </div>
    </>
  );
}
