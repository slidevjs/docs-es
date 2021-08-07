# Configurar Monaco

<Environment type="client" />

<<<<<<< HEAD
> Por defecto, Mónaco sólo está habilitado en el modo 'dev'. Para que funcione en el modo SPA, añade `monaco: true` a tu configuración de frontmatter.

Crea `./setup/monaco.ts` con el siguiente contenido:
=======
Create `./setup/monaco.ts` with the following content:
>>>>>>> 1167e7a94ea649de6b3cd27aec6585258f0d477e

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // usa `monaco` para configurarlo
})
```

Revisa más información sobre la [configuración de Mónaco](https://github.com/Microsoft/monaco-editor).

## Uso

Para usar Monaco en tus diapositivas, simplemente añade `{monaco}` a tus fragmentos de código:

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

A

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## Exportando

<<<<<<< HEAD
Por defecto, Monaco sólo funcionará en modo `dev`. Si también quieres tenerlo disponible en el SPA exportado, puedes configurarlo en tu frontmatter:
=======
By default, Monaco will ONLY work on `dev` mode. If you would like to have it available in the exported SPA, configure it in your frontmatter:
>>>>>>> 1167e7a94ea649de6b3cd27aec6585258f0d477e

```yaml
---
monaco: true # default "dev"
---
```

## Instalación automática de tipos

<<<<<<< HEAD
Cuando se utiliza TypeScript con Monaco, los tipos para las dependencias se instalarán en el lado del cliente automáticamente.
=======
When use TypeScript with Monaco, types for dependencies will be installed to the client-side automatically.
>>>>>>> 1167e7a94ea649de6b3cd27aec6585258f0d477e

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

<<<<<<< HEAD
En el ejemplo anterior, sólo asegúrate de que `vue` y `@vueuse/core` están instalados localmente como dependencias / devDependencies, ¡Slidev se encargará del resto y tu editor simplemente funcionará!

=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically!

## Configure Themes

The theme is controlled by Slidev based on the light/dark theme. If you want to customize it, you can pass the theme id to the setup function:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

If you want to load custom themes:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> If you are creating a theme for Slidev, use dynamic `import()` inside the setup function to get better tree-shaking and code-splitting results.
>>>>>>> 1167e7a94ea649de6b3cd27aec6585258f0d477e
