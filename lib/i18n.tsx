"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "es" | "en";

export type Bilingual<T = string> = { es: T; en: T };

export function pick<T>(value: Bilingual<T>, lang: Lang): T {
  return value[lang];
}

const STORAGE_KEY = "bendana-lang";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof dict) => string;
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      (localStorage.getItem(STORAGE_KEY) as Lang | null)) as Lang | null;
    if (saved === "es" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, l);
  }, []);

  const t = useCallback((key: keyof typeof dict) => dict[key][lang], [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}

export const dict = {
  // Header / footer
  brand_sub: {
    es: "Servicios en línea — demo",
    en: "Online services — demo",
  },
  nav_services: { es: "Servicios", en: "Services" },
  nav_how: { es: "Cómo funciona", en: "How it works" },
  footer_demo: {
    es: "Demo interna · No procesa pagos reales.",
    en: "Internal demo · No real payments are processed.",
  },

  // Landing
  hero_title: {
    es: "Atención médica al alcance de un clic.",
    en: "Healthcare a click away.",
  },
  hero_body: {
    es: "Compra en línea consultas por video, exámenes de laboratorio, imágenes y paquetes del Hospital Bendaña. Paga desde donde estés y atiéndete por videollamada o pasa al hospital con tu código.",
    en: "Buy video consultations, lab work, imaging, and full health packages from Hospital Bendaña online. Pay from wherever you are and either join a video visit or walk into the hospital with your code.",
  },
  cta_see_services: { es: "Ver servicios", en: "See services" },
  cta_how_it_works: { es: "Cómo funciona", en: "How it works" },
  cta_try_video: {
    es: "Probar la videollamada ahora →",
    en: "Try the video call now →",
  },
  tele_banner_title: {
    es: "🎥 Telemedicina por video — incluida en la demo",
    en: "🎥 Telemedicine by video — included in this demo",
  },
  tele_banner_body: {
    es: "Pulsa el botón y entrarás a una sala de video real, sin pagar nada. Comparte el enlace con alguien más y prueben una consulta en vivo.",
    en: "Tap the button to drop into a real video room — no payment needed. Share the link with someone else and try a live consultation together.",
  },
  tele_banner_cta: {
    es: "Entrar a una sala de demostración",
    en: "Enter a demo room",
  },
  featured_title: { es: "Servicios destacados", en: "Featured services" },
  see_all: { es: "Ver todos →", en: "See all →" },
  why_online_title: { es: "¿Por qué en línea?", en: "Why online?" },
  step1_label: { es: "1 · Elige", en: "1 · Choose" },
  step1_body: {
    es: "Consulta, laboratorio, imágenes o un paquete completo.",
    en: "Consultation, lab work, imaging, or a full package.",
  },
  step2_label: { es: "2 · Paga", en: "2 · Pay" },
  step2_body: {
    es: "Tarjeta, transferencia o billetera móvil — todo en línea.",
    en: "Card, bank transfer, or mobile wallet — all online.",
  },
  step3_label: { es: "3 · Atiéndete", en: "3 · Get care" },
  step3_body: {
    es: "Por video desde casa, o presenta tu código en el hospital.",
    en: "By video from home, or show your code at the hospital.",
  },

  // Catalog
  all_services_title: { es: "Todos los servicios", en: "All services" },
  all_services_sub: {
    es: "Paga en línea y atiéndete por video o en el hospital.",
    en: "Pay online and get care by video or in person.",
  },
  badge_video: { es: "Por video", en: "By video" },
  badge_in_person: { es: "Presencial", en: "In person" },

  // Detail
  back_to_services: { es: "← Volver a servicios", en: "← Back to services" },
  attention_video: {
    es: "Atención por videollamada",
    en: "Care delivered by video call",
  },
  attention_in_person: {
    es: "Atención presencial en el hospital",
    en: "Care delivered in person at the hospital",
  },
  includes: { es: "Incluye", en: "What's included" },

  // Checkout
  reserve_pay: { es: "Reserva y pago", en: "Book and pay" },
  total: { es: "Total", en: "Total" },
  full_name: { es: "Nombre completo", en: "Full name" },
  full_name_ph: { es: "María Pérez", en: "Maria Perez" },
  email: { es: "Correo electrónico", en: "Email" },
  email_ph: { es: "maria@correo.com", en: "maria@example.com" },
  phone: { es: "Teléfono", en: "Phone" },
  phone_ph: { es: "+505 8888 8888", en: "+505 8888 8888" },
  payment_demo: { es: "Pago (demo)", en: "Payment (demo)" },
  card: { es: "Tarjeta", en: "Card" },
  expires: { es: "Vence", en: "Expires" },
  cvc: { es: "CVC", en: "CVC" },
  processing: { es: "Procesando…", en: "Processing…" },
  pay_join_video: {
    es: "Pagar y entrar a la videollamada",
    en: "Pay and join the video call",
  },
  pay_get_code: { es: "Pagar y obtener código", en: "Pay and get code" },
  demo_notice: {
    es: "Demo — no se cobra dinero real ni se guardan datos.",
    en: "Demo — no real money is charged and no data is stored.",
  },

  // Consulta (room)
  payment_received: { es: "¡Pago recibido!", en: "Payment received!" },
  connecting_now: {
    es: "Te conectamos con tu médico ahora. Esta sala es privada y solo accesible con este enlace.",
    en: "Connecting you with your doctor now. This room is private and only accessible via this link.",
  },
  room: { es: "Sala", en: "Room" },
  patient: { es: "Paciente", en: "Patient" },
  exit: { es: "Salir", en: "Exit" },
  room_tip: {
    es: "Tip: permite el acceso a tu cámara y micrófono cuando el navegador lo pida. La llamada se ejecuta sobre Jitsi Meet en un servidor público y es gratuita — en producción se reemplazaría por un servidor de video del hospital o un proveedor con HIPAA/cumplimiento local.",
    en: "Tip: allow camera and microphone access when your browser asks. The call runs on the public Jitsi Meet service for free — in production this would be swapped for a hospital-hosted server or a provider with HIPAA / local compliance.",
  },

  // Confirmación
  details_emailed: {
    es: "Te enviamos los detalles por correo.",
    en: "We've emailed you the details.",
  },
  reservation_confirmed: {
    es: "Reservación confirmada",
    en: "Reservation confirmed",
  },
  hello_paid: {
    es: "Hola, {name}. Tu servicio {service} está pagado.",
    en: "Hi {name}, your {service} is paid for.",
  },
  your_order_code: { es: "Tu código de orden", en: "Your order code" },
  whats_next: { es: "¿Qué sigue?", en: "What's next?" },
  next_1: {
    es: "Preséntate en el Hospital Bendaña con este código y un documento de identidad.",
    en: "Come to Hospital Bendaña with this code and a photo ID.",
  },
  next_2: {
    es: "Horario del laboratorio e imágenes: lunes a sábado, 6:30 a.m. a 5:00 p.m.",
    en: "Lab and imaging hours: Monday to Saturday, 6:30 a.m. to 5:00 p.m.",
  },
  next_3: {
    es: "Los resultados se publican en tu portal en línea.",
    en: "Results are published to your online portal.",
  },
  see_more_services: { es: "Ver más servicios", en: "See more services" },

  // How it works
  how_title: { es: "Cómo funciona", en: "How it works" },
  how_sub: {
    es: "Tres pasos para atenderte con el Hospital Bendaña en línea.",
    en: "Three steps to get care from Hospital Bendaña online.",
  },
  how_step1_label: { es: "1 · Elige tu servicio", en: "1 · Choose your service" },
  how_step1_body: {
    es: "Consultas por video, exámenes de laboratorio, estudios de imágenes o un paquete completo. Cada servicio tiene su precio claro y lo que incluye.",
    en: "Video consultations, lab tests, imaging studies, or a complete package. Each service has a clear price and what's included.",
  },
  how_step2_label: { es: "2 · Paga en línea", en: "2 · Pay online" },
  how_step2_body: {
    es: "Con tarjeta, transferencia o billetera móvil. Recibes confirmación al instante por correo y por SMS.",
    en: "By card, bank transfer, or mobile wallet. You get instant confirmation by email and SMS.",
  },
  how_step3_label: { es: "3 · Atiéndete", en: "3 · Get care" },
  how_step3_body: {
    es: "Si elegiste consulta por video, te conectamos en el momento por videollamada. Si es un examen presencial, llegas al hospital con tu código y te atendemos directo.",
    en: "If you chose a video consultation, we connect you immediately. If it's an in-person exam, just arrive at the hospital with your code.",
  },
  faq_title: { es: "Preguntas frecuentes", en: "Frequently asked questions" },
  faq1_q: {
    es: "¿Es seguro pagar en línea?",
    en: "Is it safe to pay online?",
  },
  faq1_a: {
    es: "Sí. Esta demo no procesa pagos reales, pero en producción usaría una pasarela bancaria local con cumplimiento PCI.",
    en: "Yes. This demo doesn't process real payments, but in production it would use a local bank gateway with PCI compliance.",
  },
  faq2_q: {
    es: "¿Necesito instalar algo para el video?",
    en: "Do I need to install anything for the video?",
  },
  faq2_a: {
    es: "No. La videollamada corre en el navegador. Solo necesitas permitir cámara y micrófono.",
    en: "No. The video call runs in your browser. You just need to allow camera and microphone.",
  },
  faq3_q: {
    es: "¿Y si vivo fuera de Managua?",
    en: "What if I live outside Managua?",
  },
  faq3_a: {
    es: "Las consultas por video son para cualquier persona en Nicaragua. Para exámenes presenciales, tu código te espera cuando puedas venir.",
    en: "Video consultations are open to anyone in Nicaragua. For in-person exams, your code waits for you whenever you can come.",
  },
  faq4_q: { es: "¿Y la receta?", en: "What about prescriptions?" },
  faq4_a: {
    es: "El médico la envía como documento digital firmado, válido en las farmacias afiliadas.",
    en: "The doctor sends a signed digital prescription, valid at partner pharmacies.",
  },

  // Categories
  cat_telemedicine: { es: "Telemedicina", en: "Telemedicine" },
  cat_lab: { es: "Laboratorio", en: "Lab" },
  cat_imaging: { es: "Imágenes", en: "Imaging" },
  cat_consult: { es: "Consulta", en: "Consultation" },
  cat_package: { es: "Paquete", en: "Package" },

  // Language toggle
  lang_toggle_label: { es: "Idioma", en: "Language" },
} satisfies Record<string, Bilingual>;
