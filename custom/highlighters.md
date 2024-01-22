# Resaltadores

Slidev viene con dos resaltadores de sintaxis para que tú puedes elegir:

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)
- [Shikiji](https://github.com/antfu/shikiji)

**Prism** es uno de los resaltadores de sintaxis más populares. El resaltado se hace añadiendo clases de token al código y se colorea usando CSS. Puedes navegar a través de sus [temas oficiales](https://github.com/PrismJS/prism-themes), o crear/personalizar uno tú mismo muy fácilmente usando [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

**Shiki**, por otro lado, es un resaltador de sintaxis basado en la gramática de TextMate. Genera tokens de colores, por lo que no se necesita CSS adicional. Dado que tiene un gran soporte gramatical, los colores generados son muy precisos, igual que lo que verás en VS Code. Shiki también viene con [un montón de temas incorporados](https://github.com/shikijs/shiki/blob/master/docs/themes.md). La desventaja de Shiki es que también requiere temas de TextMate (compatibles con el tema de VS Code) para hacer el resaltado, lo que puede ser un poco más difícil de personalizar.

<<<<<<< HEAD
Los temas de Slidev normalmente soportan tanto Prism como Shiki, pero dependiendo del tema que estés usando, puede que sólo soporte uno de ellos.
=======
**Shikiji** is a ESM rewrite of Shiki bringing many improvements and new features. You could have [AST-based transformers](https://github.com/antfu/shikiji#hast-transformers) to customize how the code is rendered. And the [TwoSlash](#twoslash) support is also built-in.

Slidev themes usually support both Prism and Shiki, but depending on the theme you are using, it might only support one of them.
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

Cuando tienes la opción, el intercambio es básicamente:

<<<<<<< HEAD
- **Prism** para una personalización más fácil
- **Shiki** para un resaltado más preciso

Por defecto, Slidev utiliza Prism. Puedes cambiarlo modificando tu frontmatter:
=======
- **Prism** for easier customization
- **Shiki** for more accurate highlighting
- **Shikiji** on top of Shiki, it also enables [TwoSlash](#twoslash) support and custom transformers addons. 

Slidev uses Prism by default for compatibility. We recommend using Shikiji for more accurate and feature-rich highlighting, you can switch to it by adding the following to your `slides.md`:
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

```yaml
---
highlighter: shikiji
---
```

<<<<<<< HEAD
## Configurar Prism
=======
## TwoSlash Integration

This feature is only available when you set `highlighter` to `shikiji`.

[TwoSlash](https://www.typescriptlang.org/dev/twoslash/) is a powerful tool for rendering TypeScript code blocks with type informations on hover or inlined. It's quite useful for preapring slides for JavaScript/TypeScript related topics.

To use it, you can add `twoslash` to the code block's language identifier:

~~~md
```ts twoslash
console.log('hello')
```
~~~

And example of TwoSlash enabled code snippet [can be found here](https://antfu.me/posts/shikiji-twoslash).

## Configure Prism
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

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
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```

## Configure Shikiji

<Environment type="node" />

Create `./setup/shikiji.ts` file with the following content:

```ts
/* ./setup/shikiji.ts */
import { defineShikijiSetup } from '@slidev/types'

export default defineShikijiSetup(() => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'vitesse-light',
    },
    transformers: [
      ...
    ]
  }
})
```

Refer to [Shikiji's docs](https://github.com/antfu/shikji) for all available options.

> It make it easier for the community to adapt, when no `shikiji.ts` it presented, we will look for `shiki.ts` and try to convert it to Shikiji options.
