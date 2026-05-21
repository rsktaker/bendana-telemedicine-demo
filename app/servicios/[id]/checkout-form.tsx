"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      const params = new URLSearchParams({
        name,
        room,
        service: slug,
      });
      router.push(`/consulta?${params.toString()}`);
    } else {
      const params = new URLSearchParams({
        name,
        code,
        service: slug,
      });
      router.push(`/confirmacion?${params.toString()}`);
    }
  }

  return (
    <form className="checkout" onSubmit={onSubmit}>
      <h3>Reserva y pago</h3>
      <div className="total">
        <span>Total</span>
        <strong>C$ {priceCordobas.toLocaleString("es-NI")}</strong>
      </div>

      <label className="field">
        <span>Nombre completo</span>
        <input name="name" required placeholder="María Pérez" />
      </label>
      <label className="field">
        <span>Correo electrónico</span>
        <input name="email" type="email" required placeholder="maria@correo.com" />
      </label>
      <label className="field">
        <span>Teléfono</span>
        <input name="phone" required placeholder="+505 8888 8888" />
      </label>

      <h4 style={{ margin: "16px 0 8px", fontSize: 14 }}>Pago (demo)</h4>
      <label className="field">
        <span>Tarjeta</span>
        <input
          name="card"
          inputMode="numeric"
          placeholder="4242 4242 4242 4242"
          defaultValue="4242 4242 4242 4242"
        />
      </label>
      <div className="field-row">
        <label className="field">
          <span>Vence</span>
          <input name="exp" placeholder="12/29" defaultValue="12/29" />
        </label>
        <label className="field">
          <span>CVC</span>
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
          ? "Procesando…"
          : telemedicine
            ? "Pagar y entrar a la videollamada"
            : "Pagar y obtener código"}
      </button>
      <p className="muted" style={{ marginTop: 10 }}>
        Demo — no se cobra dinero real ni se guardan datos.
      </p>
    </form>
  );
}
