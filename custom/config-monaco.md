# Configurar Monaco

<Environment type="client" />

Crea `./setup/monaco.ts` con el siguiente contenido:

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

Por defecto, Monaco sólo funcionará en modo `dev`. Si también quieres tenerlo disponible en el SPA exportado, puedes configurarlo en tu frontmatter:

```yaml
---
monaco: true # default "dev"
---
```

## Instalación automática de tipos

Cuando se utiliza TypeScript con Monaco, los tipos para las dependencias se instalarán en el lado del cliente automáticamente.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

En el ejemplo anterior, solo asegúrate de que `vue` y `@vueuse/core` están instalados localmente bajo `dependencies` / `devDependencies`, ¡Slidev se encargará del resto y tu editor funcionará mágicamente!

## Configurar un tema
El tema es controlado por Slidev basado en el tema claro/oscuro. Si quieres personalizarlo, puedes pasar el id del tema a las funciones de configuración:

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

Si quieres cargar temas personalizados:

```ts
import { defineMonacoSetup } from '@slidev/types'

// cambios a tus temas
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

> Si estás creando un tema para Slidev, puedes usar el `import()` dinámico dentro de la función de configuración para obtener resultados con tree-shaking o code-splitting.
