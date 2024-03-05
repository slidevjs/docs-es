# Resaltadores

<<<<<<< HEAD
Slidev viene con dos resaltadores de sintaxis para que tú puedes elegir:
=======
Slidev comes with two syntax highlighters for you to choose from:
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**Prism** es uno de los resaltadores de sintaxis más populares. El resaltado se hace añadiendo clases de token al código y se colorea usando CSS. Puedes navegar a través de sus [temas oficiales](https://github.com/PrismJS/prism-themes), o crear/personalizar uno tú mismo muy fácilmente usando [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars).

<<<<<<< HEAD
**Shiki**, por otro lado, es un resaltador de sintaxis basado en la gramática de TextMate. Genera tokens de colores, por lo que no se necesita CSS adicional. Dado que tiene un gran soporte gramatical, los colores generados son muy precisos, igual que lo que verás en VS Code. Shiki también viene con [un montón de temas incorporados](https://github.com/shikijs/shiki/blob/master/docs/themes.md). La desventaja de Shiki es que también requiere temas de TextMate (compatibles con el tema de VS Code) para hacer el resaltado, lo que puede ser un poco más difícil de personalizar.
=======
**Shiki** is a TextMate grammar-powered syntax highlighter. It generates colored tokens, so there is no additional CSS needed. Since it has great grammar support, the generated colors are very accurate, just like what you will see in VS Code. Shiki also comes with [a bunch of built-in themes](https://shiki.style/themes). In Slidev, we also provided the [TwoSlash](#twoslash-integration) support is also built-in.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Los temas de Slidev normalmente soportan tanto Prism como Shiki, pero dependiendo del tema que estés usando, puede que sólo soporte uno de ellos.

Cuando tienes la opción, el intercambio es básicamente:

<<<<<<< HEAD
- **Prism** para una personalización más fácil
- **Shiki** para un resaltado más preciso

Por defecto, Slidev utiliza Prism. Puedes cambiarlo modificando tu frontmatter:
=======
- **Prism** for easier customization
- **Shiki** for accurate highlighting

Slidev uses Shiki by default since v0.47. You can switch to it by adding the following to your `slides.md`:
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```yaml
---
highlighter: Prism
---
```

<<<<<<< HEAD
## Configurar Prism

Para configurar tu Prism, puedes simplemente importar el tema css o usar [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) para configurar los temas para el modo claro y oscuro. Consulta su documentación para más detalles.

## Configurar Shiki
=======
## Configure Shiki
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

<Environment type="node" />

Create `./setup/shiki.ts` file with the following content

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
    ]
  }
})
```

<<<<<<< HEAD
Consulta los nombres de los temas disponibles en [Shiki's docs](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes).

O si quieres usar tu propio tema:
=======
Refer to [Shiki's docs](https://shiki.style) for available theme names.

## Configure Prism
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

To configure your Prism, you can just import the theme CSS or use [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) to configure themes for both light and dark mode. Refer to its docs for more details.
