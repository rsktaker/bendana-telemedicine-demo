import { Suspense } from "react";
import { ConsultaView } from "./consulta-view";

export default function ConsultaPage() {
  return (
    <Suspense fallback={null}>
      <ConsultaView />
    </Suspense>
  );
}
