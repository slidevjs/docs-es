# Resaltadores

<<<<<<< HEAD
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
=======
Slidev uses [Shiki](https://github.com/shikijs/shiki) as the code highlighter. It's a TextMate grammar-powered syntax highlighter that generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Configurar Shiki

<Environment type="both" />

Create `./setup/shiki.ts` file with the following content:

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: 'min-dark',
      light: 'min-light',
    },
    transformers: [
      // ...
    ],
  }
})
```

<<<<<<< HEAD
Consulta los nombres de los temas disponibles en [Shiki's docs](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

O si quieres usar tu propio tema:
=======
If you want to add custom theme or language (TextMate grammar/themes in JSON), you can import them in the setup file:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './customTheme.tmTheme.json'
import customLanguage from './customLanguage.tmLanguage.json'

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: customTheme,
      light: 'min-light',
    },
    langs: [
      'js',
      'typescript',
      'cpp',
      customLanguage,
      // ...
    ],
    transformers: [
      // ...
    ],
  }
})
```

Check [Built-in languages](https://shiki.style/languages) and [Built-in themes](https://shiki.style/themes), and refer to [Shiki's docs](https://shiki.style) for more details.

:::info
For now, Shiki Magic Move does not support transformers.
:::

## Configure Prism

:::warning
Prism support is deprecated and will be removed in the future. Please consider using Shiki instead.
:::

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
