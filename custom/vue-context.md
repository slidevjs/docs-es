# Contexto global de Vue

Slidev inyecta un [contexto global de Vue](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev` para condiciones avanzadas o controles de navegación.

## Uso

Puedes acceder a ello en cualquier parte de tu Vue o Markdown, con [la sintaxis "Mustache"](https://v3.vuejs.org/guide/template-syntax.html#interpolations).

```md
<!-- slides.md -->

# Página 1

La página actual es: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Título: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Siguiente diapositiva</button>
</template>
```

## Propiedades

### `$clicks`

`$clicks` hold a number of clicks on the current slide. Can be used conditionally to show different content on clicks.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page` holds the number of the current page, 1-indexed.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext` holds the current render context, can be `slide`, `overview`, `presenter` or `previewNext`

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

Un objeto reactivo que contiene las propiedades y controles de la navegación de las diapositivas. Por ejemplo:

```js
$slidev.nav.next() // ir al siguiente paso

$slidev.nav.nextSlide() // ir a la siguiente diapositva (saltar v-clicks)

$slidev.nav.go(10) // ir a la diapositiva #10
```

```js
$slidev.nav.currentPage // número de la diapositiva actual

<<<<<<< HEAD
$slidev.nav.currentLayout // plantilla (layout) actual

$slidev.nav.clicks // contador actual de clics
=======
$slidev.nav.currentLayout // current layout id
>>>>>>> 11d34750b965b68677cad6bd79bec396dc878cea
```

Para conocer más propiedades disponibles, consulta los miembros exportados por [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

> Note: `$slidev.nav.clicks` is a global state while `$clicks` is local to each slide. It's recommended to **use `$clicks` over `$slidev.nav.clicks`** to avoid clicks changed been triggered on page transitions.

### `$slidev.configs`

Un objeto reactivo que contiene las [configuraciones en el primer frontmatter](/custom/#frontmatter-configures) analizadas de tu `slides.md`. Por ejemplo

```yaml
---
title: ¡Mi primer Slidev!
---
```

```
{{ $slidev.configs.title }} // '¡Mi primer Slidev!'
```

### `$slidev.themeConfigs`

Un objeto reactivo que contiene las configuraciones analizadas del tema.

```yaml
---
title: ¡Mi primer Slidev!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> Available since v0.43.0

A shorthand of `$slidev.nav`.
