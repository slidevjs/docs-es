# Configurar Mermaid

<Environment type="client" />

Crea `./setup/mermaid.ts` con el siguiente contenido:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

Con la configuración, puede proporcionar una configuración personalizada por defecto para [Mermaid](https://mermaid-js.github.io/). Consulta las definiciones de tipo y su documentación para obtener más detalles.
