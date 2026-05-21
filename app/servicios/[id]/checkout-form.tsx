"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLang } from "@/lib/i18n";

type Props = {
  serviceId: string;
  serviceName: string;
  priceCordobas: number;
  telemedicine: boolean;
};

function randomCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

export function CheckoutForm({
  serviceId,
  serviceName,
  priceCordobas,
  telemedicine,
}: Props) {
  const router = useRouter();
  const { t } = useLang();
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const name = (form.get("name") as string) || "Paciente";
    const code = randomCode();
    const slug = encodeURIComponent(serviceName);
    if (telemedicine) {
      const room = `bendana-${serviceId}-${code}`;
      const params = new URLSearchParams({ name, room, service: slug });
      router.push(`/consulta?${params.toString()}`);
    } else {
      const params = new URLSearchParams({ name, code, service: slug });
      router.push(`/confirmacion?${params.toString()}`);
    }
  }

  return (
    <form className="checkout" onSubmit={onSubmit}>
      <h3>{t("reserve_pay")}</h3>
      <div className="total">
        <span>{t("total")}</span>
        <strong>C$ {priceCordobas.toLocaleString("es-NI")}</strong>
      </div>

      <label className="field">
        <span>{t("full_name")}</span>
        <input name="name" required placeholder={t("full_name_ph")} />
      </label>
      <label className="field">
        <span>{t("email")}</span>
        <input name="email" type="email" required placeholder={t("email_ph")} />
      </label>
      <label className="field">
        <span>{t("phone")}</span>
        <input name="phone" required placeholder={t("phone_ph")} />
      </label>

      <h4 style={{ margin: "16px 0 8px", fontSize: 14 }}>{t("payment_demo")}</h4>
      <label className="field">
        <span>{t("card")}</span>
        <input
          name="card"
          inputMode="numeric"
          placeholder="4242 4242 4242 4242"
          defaultValue="4242 4242 4242 4242"
        />
      </label>
      <div className="field-row">
        <label className="field">
          <span>{t("expires")}</span>
          <input name="exp" placeholder="12/29" defaultValue="12/29" />
        </label>
        <label className="field">
          <span>{t("cvc")}</span>
          <input name="cvc" placeholder="123" defaultValue="123" />
        </label>
      </div>

      <button
        className="btn btn-dark"
        style={{ width: "100%", justifyContent: "center" }}
        type="submit"
        disabled={submitting}
      >
        {submitting
          ? t("processing")
          : telemedicine
            ? t("pay_join_video")
            : t("pay_get_code")}
      </button>
      <p className="muted" style={{ marginTop: 10 }}>
        {t("demo_notice")}
      </p>
    </form>
  );
}
