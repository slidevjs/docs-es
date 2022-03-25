# Capas globales

> Available since v0.17

Las capas globales le permiten tener componentes personalizados que **persisten** a través de las diapositivas. Esto podría ser útil para tener pies de página, animaciones entre diapositivas, efectos globales, etc.

<<<<<<< HEAD
Slidev proporciona dos capas para este uso, crea `global-top.vue` o `global-bottom.vue` en la raíz de tu proyecto y lo detectará automáticamente.
=======
Slidev provides three layers for this usage, create `global-top.vue`, `global-bottom.vue` or `custom-nav-controls.vue` under your project root and it will pick up automatically.
>>>>>>> d68398ac58d3e8efc2f6d29119938f4a4382f617

Relación de capas:

<<<<<<< HEAD
- Global superior (`global-top.vue`)
- Diapositivas
- Global inferior (`global-bottom.vue`)
=======
- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
>>>>>>> d68398ac58d3e8efc2f6d29119938f4a4382f617

## Ejemplo

```html
<!-- global-top.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Tu nombre</footer>
</template>
```

El texto `Tu nombre` aparecerá en todas tus diapositivas.

<<<<<<< HEAD
Para habilitarlo condicionalmente, puedes aplicarlo con el [contexto global de Vue](/custom/vue-context).
=======
```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

The button `Next` will appear in NavControls.

To enabled it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> d68398ac58d3e8efc2f6d29119938f4a4382f617

```html
<!-- oculta el pie de página de la página 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Tu nombre
  </footer>
</template>
```

```html
<!-- ocultar el pie de página de la plantilla "portada" -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Tu nombre
  </footer>
</template>
```

```html
<!-- un ejemplo de pie de página -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
