# Resaltadores

Slidev viene con dos resaltadores de sintaxis para que tú puedes elegir:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** es uno de los resaltadores de sintaxis más populares. El resaltado se hace añadiendo clases de token al código y se colorea usando CSS. Puedes navegar a través de sus [temas oficiales](https://github.com/PrismJS/prism-themes), o crear/personalizar uno tú mismo muy fácilmente usando [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, por otro lado, es un resaltador de sintaxis basado en la gramática de TextMate. Genera tokens de colores, por lo que no se necesita CSS adicional. Dado que tiene un gran soporte gramatical, los colores generados son muy precisos, igual que lo que verás en VS Code. Shiki también viene con [un montón de temas incorporados](https://github.com/shikijs/shiki/blob/master/docs/themes.md). La desventaja de Shiki es que también requiere temas de TextMate (compatibles con el tema de VS Code) para hacer el resaltado, lo que puede ser un poco más difícil de personalizar.

Los temas de Slidev normalmente soportan tanto Prism como Shiki, pero dependiendo del tema que estés usando, puede que sólo soporte uno de ellos.

Cuando tienes la opción, el intercambio es básicamente:

- **Prism** para una personalización más fácil
- **Shiki** para un resaltado más preciso

Por defecto, Slidev utiliza Prism. Puedes cambiarlo modificando tu frontmatter:

```yaml
---
highlighter: shiki
---
```

## Configurar Prism

Para configurar tu Prism, puedes simplemente importar el tema css o usar [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) para configurar los temas para el modo claro y oscuro. Consulta su documentación para más detalles.

## Configurar Shiki

<Environment type="node" />

Create `./setup/shiki.ts` file with the following content

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

Consulta los nombres de los temas disponibles en [Shiki's docs](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

O si quieres usar tu propio tema:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json')),
      light: await loadTheme('path/to/theme.json')),
    },
  }
})
```
