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

````md
```js {monaco} // [!code ++]
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
<<<<<<< HEAD
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
=======
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
```
````

<<<<<<< HEAD
## Instalación automática de tipos
=======
## TypeScript Types
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

Cuando se utiliza TypeScript con Monaco, los tipos para las dependencias se instalarán en el lado del cliente automáticamente.

````md
```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
```
````

<<<<<<< HEAD
En el ejemplo anterior, solo asegúrate de que `vue` y `@vueuse/core` están instalados localmente bajo `dependencies` / `devDependencies`, ¡Slidev se encargará del resto y tu editor funcionará mágicamente!

## Configurar un tema
El tema es controlado por Slidev basado en el tema claro/oscuro. Si quieres personalizarlo, puedes pasar el id del tema a las funciones de configuración:
=======
In the example above, make sure `vue` and `@vueuse/core` are installed locally as dependencies / devDependencies, Slidev will handle the rest to get the types working for the editor automatically. When deploy as SPA, those types will also be bundled for static hosting.

### Additional Types

Slidev will scan all the monaco codeblocks in your slides and import the types for those used libraries for you. In case it missed some, you can explicitly specify extra packages to import the types for:

```md
---
monacoTypesAdditionalPackages:
  - lodash-es
  - foo
---
```

### Auto Type Acquisition

You can optionally switch to load types from CDN by setting the following headmatter:

```md
---
monacoTypesSource: ata
---
```

This feature is powered by [`@typescript/ata`](https://github.com/microsoft/TypeScript-Website/tree/v2/packages/ata) and runs completely on the client-side.

## Configure Themes

Since v0.48.0, Monaco will reuse the Shiki theme you configured in [Shiki's setup file](/custom/highlighters#configure-shiki), powered by [`@shikijs/monaco`](https://shiki.style/packages/monaco). You don't need to worry about it anymore and it will have a consistent style with the rest of your code blocks.

## Configure the Editor

> Available since v0.43.0

If you would like to customize the Monaco editor you may pass an `editorOptions` object that matches the [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) definition.

````md
```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
```
````

Alternatively if you would like these options to be applied to every Monaco instance, you can return them in the `defineMonacoSetup` function
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```

<<<<<<< HEAD
Si quieres cargar temas personalizados:
=======
## Disabling
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2

Since v0.48.0, Monaco editor is enabled by default and only be bundled when you use it. If you want to disable it, you can set `monaco` to `false` in the frontmatter of your slide:

<<<<<<< HEAD
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
=======
```yaml
---
monaco: false # can also be `dev` or `build` tp conditionally enable it
---
```
>>>>>>> 948b75ddb1f4429a20b0d68bd24bebbaedf0bcd2
