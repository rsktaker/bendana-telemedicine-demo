export type Service = {
  id: string;
  name: string;
  category: "Telemedicina" | "Laboratorio" | "Imágenes" | "Consulta" | "Paquete";
  icon: string;
  shortDescription: string;
  longDescription: string;
  includes: string[];
  priceCordobas: number;
  telemedicine: boolean;
  inPersonRequired?: boolean;
};

export const services: Service[] = [
  {
    id: "consulta-general-online",
    name: "Consulta médica general por video",
    category: "Telemedicina",
    icon: "🎥",
    shortDescription:
      "Conéctate con un médico general por videollamada desde tu casa.",
    longDescription:
      "Consulta clínica por video con un médico general del Hospital Bendaña. Ideal para síntomas leves, dudas de salud, seguimiento, recetas y referencias a estudios.",
    includes: [
      "Videollamada de hasta 20 minutos",
      "Receta médica digital (si aplica)",
      "Orden para exámenes de laboratorio o imágenes (si aplica)",
      "Resumen escrito enviado al correo",
    ],
    priceCordobas: 450,
    telemedicine: true,
  },
  {
    id: "control-dermatologia-online",
    name: "Dermatología — seguimiento por video",
    category: "Telemedicina",
    icon: "🩺",
    shortDescription:
      "Seguimiento dermatológico con fotos previas y videollamada.",
    longDescription:
      "Consulta de seguimiento con dermatología del Hospital Bendaña. Envía fotos antes de la cita y revisa con el especialista por video.",
    includes: [
      "Revisión de fotos previas",
      "Videollamada de 15 minutos",
      "Plan de tratamiento por escrito",
    ],
    priceCordobas: 950,
    telemedicine: true,
  },
  {
    id: "control-cronicos",
    name: "Control de enfermedades crónicas (HTA / DM)",
    category: "Telemedicina",
    icon: "💊",
    shortDescription:
      "Seguimiento mensual para hipertensión o diabetes sin salir de casa.",
    longDescription:
      "Atención mensual de seguimiento para pacientes con hipertensión o diabetes. Revisión de exámenes recientes, ajuste de medicamentos y plan.",
    includes: [
      "Revisión de exámenes recientes",
      "Videollamada de 20 minutos",
      "Ajuste y receta digital",
    ],
    priceCordobas: 600,
    telemedicine: true,
  },
  {
    id: "lab-quimica-sanguinea",
    name: "Química sanguínea completa",
    category: "Laboratorio",
    icon: "🧪",
    shortDescription:
      "Glucosa, urea, creatinina, perfil lipídico y más. Se toma en el hospital.",
    longDescription:
      "Paga en línea y preséntate en el laboratorio del Hospital Bendaña con tu código de orden. Resultados disponibles en línea en 24 horas.",
    includes: [
      "Toma de muestra en el hospital",
      "Glucosa, urea, creatinina, ácido úrico",
      "Perfil lipídico completo",
      "Resultados en línea",
    ],
    priceCordobas: 850,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "lab-hemograma",
    name: "Hemograma completo",
    category: "Laboratorio",
    icon: "🩸",
    shortDescription: "Conteo sanguíneo completo con interpretación.",
    longDescription:
      "Análisis hematológico completo. Paga en línea, presenta tu código en el hospital y recibe los resultados por correo y en tu portal.",
    includes: [
      "Toma de muestra en el hospital",
      "Hematíes, leucocitos y plaquetas",
      "Diferencial leucocitario",
      "Interpretación adjunta",
    ],
    priceCordobas: 350,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "rx-torax",
    name: "Rayos X de tórax",
    category: "Imágenes",
    icon: "🩻",
    shortDescription:
      "Radiografía PA y lateral con lectura por radiólogo.",
    longDescription:
      "Radiografía simple de tórax con dos proyecciones, leída por un radiólogo del Hospital Bendaña. Reporte enviado en menos de 24 horas.",
    includes: [
      "Radiografía PA y lateral",
      "Lectura por radiólogo",
      "Reporte digital",
    ],
    priceCordobas: 700,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "us-abdominal",
    name: "Ultrasonido abdominal",
    category: "Imágenes",
    icon: "📡",
    shortDescription:
      "Ultrasonido abdominal completo con reporte.",
    longDescription:
      "Estudio ecográfico de hígado, vesícula, páncreas, bazo, riñones. Reporte por radiólogo del Hospital Bendaña.",
    includes: [
      "Ultrasonido abdominal completo",
      "Reporte por radiólogo",
      "Imágenes digitales",
    ],
    priceCordobas: 1100,
    telemedicine: false,
    inPersonRequired: true,
  },
  {
    id: "paquete-chequeo",
    name: "Paquete: Chequeo preventivo anual",
    category: "Paquete",
    icon: "🛡️",
    shortDescription:
      "Consulta + laboratorio + ultrasonido + videollamada de resultados.",
    longDescription:
      "Paquete completo de chequeo anual. Toma de muestras y estudios en el hospital, y revisión de resultados por videollamada con un médico general.",
    includes: [
      "Química sanguínea + hemograma",
      "Ultrasonido abdominal",
      "Rayos X de tórax",
      "Videollamada de resultados (20 min)",
    ],
    priceCordobas: 2900,
    telemedicine: true,
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
