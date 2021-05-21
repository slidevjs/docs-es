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

With the setup, you can provide a custom default setting for [Mermaid](https://mermaid-js.github.io/). Refer to the type definitions and its documentation for more details.
