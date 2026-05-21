# Hospital Bendaña — Demo de servicios en línea

Demo en español que muestra cómo podría verse un portal del Hospital Bendaña
para comprar consultas, exámenes y paquetes en línea, con telemedicina por
videollamada.

- **Stack:** Next.js 16 (App Router) + React 19, sin dependencias externas.
- **Video:** Jitsi Meet embebido por iframe (gratis, sin API key). En
  producción se reemplazaría por un servidor propio o un proveedor con
  cumplimiento local.
- **Pagos:** simulados. Cualquier tarjeta funciona, nada se cobra.

## Páginas

- `/` Landing
- `/servicios` Catálogo
- `/servicios/[id]` Detalle + checkout simulado
- `/consulta?...` Sala de videollamada (Jitsi)
- `/confirmacion?...` Confirmación con código para servicios presenciales
- `/como-funciona` Explicación + FAQ

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir <http://localhost:3000>.
