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

### `$slidev.nav`

Un objeto reactivo que contiene las propiedades y controles de la navegación de las diapositivas. Por ejemplo:

```js
$slidev.nav.next() // ir al siguiente paso

$slidev.nav.nextSlide() // ir a la siguiente diapositva (saltar v-clicks)

$slidev.nav.go(10) // ir a la diapositiva #10
```

```js
$slidev.nav.currentPage // número de la diapositiva actual

$slidev.nav.currentLayout // plantilla (layout) actual

$slidev.nav.clicks // contador actual de clics
```

FPara conocer más propiedades disponibles, consulta los miembros exportados por [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts).

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
