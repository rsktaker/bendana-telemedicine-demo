import { Suspense } from "react";
import { ConfirmacionView } from "./confirmacion-view";

export default function ConfirmacionPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmacionView />
    </Suspense>
  );
}
