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

Para configurar Windi CSS, tendrás que ampliar la configuración base de Windi CSS.

```ts
import { mergeWindicssConfig, defineConfig } from 'vite-plugin-windicss'
import BaseConfig from '@slidev/client/windi.config'
// or extending from the theme:
/* import BaseConfig from '@slidev/theme-seriph/windi.config' */

export default mergeWindicssConfig(
  BaseConfig,
  defineConfig({
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#42b883'
          }
        }
      }
    }
  })
)
```
