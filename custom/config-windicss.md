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

<<<<<<< HEAD
Para configurar Windi CSS, tendrás que ampliar la configuración base de Windi CSS.
=======
To configure Windi CSS, create `setup/windicss.ts` with the following content to extend the builtin configurations
>>>>>>> 2725558a0fdb273102dde01cb9b3cfb80a5a7b43

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

Learn more about [Windi CSS configurations](https://windicss.org/guide/configuration.html)
