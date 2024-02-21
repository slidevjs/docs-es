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


## Estilos/tema personalizados

En caso de que quieras crear tus temas o estilos personalizados para Mermaid, puedes hacerlo definiendo `themeVariables` como en el siguiente ejemplo:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
<<<<<<< HEAD
      // Variables del tema
      noteBkgColor: "#181d29",
      noteTextColor: "#F3EFF5cc",
      noteBorderColor: "#404551",

      // Variables de las secuencias del diagrama
      actorBkg: "#0E131F",
      actorBorder: "#44FFD2",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
=======
      // General theme variables
      noteBkgColor: '#181d29',
      noteTextColor: '#F3EFF5cc',
      noteBorderColor: '#404551',

      // Sequence diagram variables
      actorBkg: '#0E131F',
      actorBorder: '#44FFD2',
      actorTextColor: '#F3EFF5',
      actorLineColor: '#F3EFF5',
      signalColor: '#F3EFF5',
      signalTextColor: '#F3EFF5',
>>>>>>> c3c1774bdf48295664f5b30d7ba7bfbda5a0f3d2
    }
  }
})
```

Puedes encontrar todas las variables del tema en la página [de Mermaid](https://mermaid.js.org/config/theming.html).

