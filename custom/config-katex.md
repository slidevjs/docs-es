# Configurar KaTeX

<Environment type="node" />

Crea `./setup/katex.ts` con el siguiente contenido:

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

Con la configuración, puedes proporcionar la configuración personalizada para las [opciones de KaTex](https://katex.org/docs/options.html). Consulta las definiciones de tipo y su documentación para obtener más detalles.
