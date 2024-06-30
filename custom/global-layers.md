# Capas globales

<<<<<<< HEAD
> Available since v0.17

Las capas globales le permiten tener componentes personalizados que **persisten** a través de las diapositivas. Esto podría ser útil para tener pies de página, animaciones entre diapositivas, efectos globales, etc.
=======
Global layers allow you to have custom components that **persist** across slides. This could be useful for having footers, cross-slide animations, global effects, etc.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Slidev proporciona tres capas para este uso, crea `global-top.vue` o `global-bottom.vue` o `custom-nav-controls.vue` en la raíz de tu proyecto y lo detectará automáticamente.

<<<<<<< HEAD
Relación de capas:

- Global superior (`global-top.vue`)
- Diapositivas
- Global inferior (`global-bottom.vue`)
- Controles de navegación
  - Controles de navegación personalizados (`custom-nav-controls.vue`)
=======
There are also layers for **each** slide: `layouts/slide-top.vue` and `layouts/slide-bottom.vue`. The usage is similar to the global layers, but they are applied to every slide, so there may be more than one instance of them.

::: tip
When exporting, the `--per-slide` option should be used to ensure the global layers are applied to each slide correctly.
:::

## Layers relationship

At z-axis, from top to bottom:

- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)
- Global Top (`global-top.vue`) - single instance
- Slide Top (`slide-top.vue`) - instance per slide
- Slide Content
- Slide Bottom (`slide-bottom.vue`) - instance per slide
- Global Bottom (`global-bottom.vue`) - single instance
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Ejemplo

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Tu nombre</footer>
</template>
```

El texto `Tu nombre` aparecerá en todas tus diapositivas.


```html
<!-- custom-nav-controls -->
<template>
<<<<<<< HEAD
  <button class="icon-btn" title="Siguiente" @click="$slidev.nav.next">
=======
  <button class="icon-btn" title="Next" @click="$nav.next">
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
    <carbon:arrow-right />
  </button>
</template>
```

El botón "Siguiente" aparecerá en la navegación.

Para habilitarlo condicionalmente, puedes aplicarlo con el [contexto global de Vue](/custom/vue-context).

```html
<!-- oculta el pie de página de la página 4 -->
<template>
  <footer
    v-if="$nav.currentPage !== 4"
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
    v-if="$nav.currentLayout !== 'cover'"
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
    v-if="$nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- oculta el botón en el modo presentador -->
<template>
  <button v-if="!$nav.isPresenter" class="icon-btn" title="Next" @click="$nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
