# Capas globales

> Available since v0.17

Las capas globales le permiten tener componentes personalizados que **persisten** a través de las diapositivas. Esto podría ser útil para tener pies de página, animaciones entre diapositivas, efectos globales, etc.

Slidev proporciona tres capas para este uso, crea `global-top.vue` o `global-bottom.vue` o `custom-nav-controls.vue` en la raíz de tu proyecto y lo detectará automáticamente.

Relación de capas:

- Global superior (`global-top.vue`)
- Diapositivas
- Global inferior (`global-bottom.vue`)
- Controles de navegación
  - Controles de navegación personalizados (`custom-nav-controls.vue`)

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
  <button class="icon-btn" title="Siguiente" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

El botón "Siguiente" aparecerá en la navegación.

<<<<<<< HEAD
Para habilitarlo condicionalmente, puedes aplicarlo con el [contexto global de Vue](/custom/vue-context).
=======
To enable it conditionally, you can apply it with the [Vue Global Context](/custom/vue-context).
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

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
<!-- oculta el botón en el modo presentador -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
