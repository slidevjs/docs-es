# Configurar Monaco

<Environment type="client" />

> Por defecto, Mónaco sólo está habilitado en el modo 'dev'. Para que funcione en el modo SPA, añade `monaco: true` a tu configuración de frontmatter.

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

En el ejemplo anterior, sólo asegúrate de que `vue` y `@vueuse/core` están instalados localmente como dependencias / devDependencies, ¡Slidev se encargará del resto y tu editor simplemente funcionará!

