import type { Bilingual } from "./i18n";

export type ServiceCategoryKey =
  | "cat_telemedicine"
  | "cat_lab"
  | "cat_imaging"
  | "cat_consult"
  | "cat_package";

export type Service = {
  id: string;
  categoryKey: ServiceCategoryKey;
  icon: string;
  name: Bilingual;
  shortDescription: Bilingual;
  longDescription: Bilingual;
  includes: Bilingual<string[]>;
  priceCordobas: number;
  telemedicine: boolean;
  inPersonRequired?: boolean;
};

export const services: Service[] = [
  {
    id: "consulta-general-online",
    categoryKey: "cat_telemedicine",
    icon: "🎥",
    name: {
      es: "Consulta médica general por video",
      en: "General medical consultation by video",
    },
    shortDescription: {
      es: "Conéctate con un médico general por videollamada desde tu casa.",
      en: "Connect with a general practitioner by video call from home.",
    },
    longDescription: {
      es: "Consulta clínica por video con un médico general del Hospital Bendaña. Ideal para síntomas leves, dudas de salud, seguimiento, recetas y referencias a estudios.",
      en: "Video consultation with a general practitioner from Hospital Bendaña. Ideal for mild symptoms, health questions, follow-ups, prescriptions, and referrals.",
    },
    includes: {
      es: [
        "Videollamada de hasta 20 minutos",
        "Receta médica digital (si aplica)",
        "Orden para exámenes de laboratorio o imágenes (si aplica)",
        "Resumen escrito enviado al correo",
      ],
      en: [
        "Up to a 20-minute video call",
        "Digital prescription (if applicable)",
        "Order for lab work or imaging (if applicable)",
        "Written summary sent by email",
      ],
    },
    priceCordobas: 450,
    telemedicine: true,
  },
  {
    id: "control-dermatologia-online",
    categoryKey: "cat_telemedicine",
    icon: "🩺",
    name: {
      es: "Dermatología — seguimiento por video",
      en: "Dermatology — video follow-up",
    },
    shortDescription: {
      es: "Seguimiento dermatológico con fotos previas y videollamada.",
      en: "Dermatology follow-up with photos in advance and a video call.",
    },
    longDescription: {
      es: "Consulta de seguimiento con dermatología del Hospital Bendaña. Envía fotos antes de la cita y revisa con el especialista por video.",
      en: "Dermatology follow-up at Hospital Bendaña. Send photos before the appointment and review with the specialist by video.",
    },
    includes: {
      es: [
        "Revisión de fotos previas",
        "Videollamada de 15 minutos",
        "Plan de tratamiento por escrito",
      ],
      en: [
        "Review of photos sent in advance",
        "15-minute video call",
        "Written treatment plan",
      ],
    },
    priceCordobas: 950,
    telemedicine: true,
  },
  {
    id: "control-cronicos",
    categoryKey: "cat_telemedicine",
    icon: "💊",
    name: {
      es: "Control de enfermedades crónicas (HTA / DM)",
      en: "Chronic disease check-in (hypertension / diabetes)",
    },
    shortDescription: {
      es: "Seguimiento mensual para hipertensión o diabetes sin salir de casa.",
      en: "Monthly follow-up for hypertension or diabetes without leaving home.",
    },
    longDescription: {
      es: "Atención mensual de seguimiento para pacientes con hipertensión o diabetes. Revisión de exámenes recientes, ajuste de medicamentos y plan.",
      en: "Monthly follow-up care for patients with hypertension or diabetes. Recent labs review, medication adjustments, and care plan.",
    },
    includes: {
      es: [
        "Revisión de exámenes recientes",
        "Videollamada de 20 minutos",
        "Ajuste y receta digital",
      ],
      en: [
        "Recent labs reviewed",
        "20-minute video call",
        "Medication adjustment and digital prescription",
      ],
    },
    priceCordobas: 600,
    telemedicine: true,
  },
  {
    id: "lab-quimica-sanguinea",
    categoryKey: "cat_lab",
    icon: "🧪",
    name: {
      es: "Química sanguínea completa",
      en: "Complete blood chemistry panel",
    },
    shortDescription: {
      es: "Glucosa, urea, creatinina, perfil lipídico y más. Se toma en el hospital.",
      en: "Glucose, urea, creatinine, lipid panel and more. Sample taken at the hospital.",
    },
    longDescription: {
      es: "Paga en línea y preséntate en el laboratorio del Hospital Bendaña con tu código de orden. Resultados disponibles en línea en 24 horas.",
      en: "Pay online and come to the Hospital Bendaña lab with your order code. Results available online within 24 hours.",
    },
    includes: {
      es: [
        "Toma de muestra en el hospital",
        "Glucosa, urea, creatinina, ácido úrico",
        "Perfil lipídico completo",
        "Resultados en línea",
      ],
      en: [
        "Sample drawn at the hospital",
        "Glucose, urea, creatinine, uric acid",
        "Complete lipid panel",
        "Results delivered online",
      ],
    },
    priceCordobas: 850,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "lab-hemograma",
    categoryKey: "cat_lab",
    icon: "🩸",
    name: { es: "Hemograma completo", en: "Complete blood count (CBC)" },
    shortDescription: {
      es: "Conteo sanguíneo completo con interpretación.",
      en: "Complete blood count with interpretation.",
    },
    longDescription: {
      es: "Análisis hematológico completo. Paga en línea, presenta tu código en el hospital y recibe los resultados por correo y en tu portal.",
      en: "Complete hematology workup. Pay online, show your code at the hospital, and get results by email and in your portal.",
    },
    includes: {
      es: [
        "Toma de muestra en el hospital",
        "Hematíes, leucocitos y plaquetas",
        "Diferencial leucocitario",
        "Interpretación adjunta",
      ],
      en: [
        "Sample drawn at the hospital",
        "Red cells, white cells, and platelets",
        "White cell differential",
        "Interpretation included",
      ],
    },
    priceCordobas: 350,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "rx-torax",
    categoryKey: "cat_imaging",
    icon: "🩻",
    name: { es: "Rayos X de tórax", en: "Chest X-ray" },
    shortDescription: {
      es: "Radiografía PA y lateral con lectura por radiólogo.",
      en: "PA and lateral views read by a radiologist.",
    },
    longDescription: {
      es: "Radiografía simple de tórax con dos proyecciones, leída por un radiólogo del Hospital Bendaña. Reporte enviado en menos de 24 horas.",
      en: "Standard chest X-ray with two views, read by a Hospital Bendaña radiologist. Report delivered in under 24 hours.",
    },
    includes: {
      es: [
        "Radiografía PA y lateral",
        "Lectura por radiólogo",
        "Reporte digital",
      ],
      en: [
        "PA and lateral X-ray views",
        "Read by a radiologist",
        "Digital report",
      ],
    },
    priceCordobas: 700,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "us-abdominal",
    categoryKey: "cat_imaging",
    icon: "📡",
    name: { es: "Ultrasonido abdominal", en: "Abdominal ultrasound" },
    shortDescription: {
      es: "Ultrasonido abdominal completo con reporte.",
      en: "Complete abdominal ultrasound with report.",
    },
    longDescription: {
      es: "Estudio ecográfico de hígado, vesícula, páncreas, bazo, riñones. Reporte por radiólogo del Hospital Bendaña.",
      en: "Ultrasound of liver, gallbladder, pancreas, spleen, and kidneys. Report by a Hospital Bendaña radiologist.",
    },
    includes: {
      es: [
        "Ultrasonido abdominal completo",
        "Reporte por radiólogo",
        "Imágenes digitales",
      ],
      en: [
        "Complete abdominal ultrasound",
        "Radiologist report",
        "Digital images",
      ],
    },
    priceCordobas: 1100,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "paquete-chequeo",
    categoryKey: "cat_package",
    icon: "🛡️",
    name: {
      es: "Paquete: Chequeo preventivo anual",
      en: "Package: Annual preventive check-up",
    },
    shortDescription: {
      es: "Consulta + laboratorio + ultrasonido + videollamada de resultados.",
      en: "Consultation + lab + ultrasound + video review of results.",
    },
    longDescription: {
      es: "Paquete completo de chequeo anual. Toma de muestras y estudios en el hospital, y revisión de resultados por videollamada con un médico general.",
      en: "Full annual check-up package. Samples and studies done at the hospital, then a video call with a general practitioner to review results.",
    },
    includes: {
      es: [
        "Química sanguínea + hemograma",
        "Ultrasonido abdominal",
        "Rayos X de tórax",
        "Videollamada de resultados (20 min)",
      ],
      en: [
        "Blood chemistry + CBC",
        "Abdominal ultrasound",
        "Chest X-ray",
        "Video review of results (20 min)",
      ],
    },
    priceCordobas: 2900,
    telemedicine: true,
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
