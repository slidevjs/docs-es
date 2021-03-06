# Configurar Windi CSS

<Environment type="node" />

Markdown soporta por defecto las etiquetas HTML incrustadas. Por lo tanto, puedes estilizar tu contenido de la manera que quieras. Por conveniencia, tenemos [Windi CSS](https://github.com/windicss/windicss) incorporado, por lo que puedes estilizar el marcado directamente usando clases de utilidades.

Por ejemplo:

```html
<div class="grid pt-4 gap-4 grids-cols-[100px,1fr]">

### Nombre

- Ítem 1
- Ítem 2

</div>
```

El modo de [attributify](https://windicss.org/posts/v30.html#attributify-mode) en [Windi CSS v3.0](https://windicss.org/posts/v30.html) está activado por defecto.

## Configuraciones

Para configurar Windi CSS, crea `setup/windicss.ts` con el siguiente contenido para extender las configuraciones por defecto:

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extendiendo las configuraciones por defecto de windicss
export default defineWindiSetup(() => ({
  shortcuts: {
    // personalizar el fondo por defecto
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // las fuentes pueden ser reemplazadas aquí, recuerda actualizar los enlaces de las fuentes web en `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Lee más sobre [las configuraciones de Windi CSS](https://windicss.org/guide/configuration.html).
