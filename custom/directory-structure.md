# Estructura de directorios

Slidev emplea algunas convenciones de estructura de directorios para minimizar la superficie de configuración y hacer que las extensiones de funcionalidad sean flexibles e intuitivas.

La estructura básica es la siguiente:

```bash
tu-slidev/
  ├── components/       # componentes personalizados
  ├── layouts/          # plantillas personalizadas
  ├── public/           # archivos estáticos
  ├── setup/            # configuración personalizada y hooks de Vue
  ├── styles/           # estilos personalizados
  ├── index.html        # inyecciones a index.html
  ├── slides.md         # la entrada principal de las diapositivas
  ├── vite.config.ts    # extensiones de la configuración de vite```
  
Todas ellas son opcionales.

## Componentes

Convenciones: `./components/*.{vue,js,ts,jsx,tsx,md}`

Los componentes dentro de este directorio pueden ser utilizados directamente en las diapositivas Markdown con el mismo nombre de componente que el nombre del archivo.

Por ejemplo:

```bash
tu-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# Mi presentación

<MyComponent :count="4"/>

<!-- ambas formas funcionan -->

<hello-world foo="bar">
  Slot
</hello-world>
```

Esta función usa [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components), aprende más ahí.

Slidev también provee [componentes por defecto](/builtin/components) para tu uso.

## Plantillas

Convenciones: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
tu-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

Puedes usar cualquier nombre de archivo para tu diseño. A continuación, haz referencia a tu diseño en tu cabecera YAML utilizando el nombre del archivo.

```yaml
---
layout: my-cool-theme
---
```

Si el diseño que proporcionas tiene el mismo nombre que una plantilla por defecto o una plantilla de un tema, tu diseño personalizado tendrá prioridad sobre ellos. El orden de prioridad es `local > tema > integrado`.

En la plantilla, utilice `<slot/>` para el contenido de la diapositiva. Por ejemplo:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## Público

Convenciones: `./public/*`

Los activos de este directorio se servirán en la ruta raíz `/` durante el desarrollo, y se copiarán en la raíz del directorio dist tal cual. Más información sobre [el directorio `public` de Vite](https://vitejs.dev/guide/assets.html#the-public-directory).

## Estilo

Convenciones: `./style.css` | `./styles/index.{css,js,ts}`

Los archivos que sigan esta convención se inyectarán en la raíz de la aplicación. Si necesitas importar varias entradas css, puedes crear la siguiente estructura y gestionar tú mismo el orden de importación.

```bash
tu-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

<<<<<<< HEAD
Los estilos serán procesados por [Windi CSS](http://windicss.org/) y [PostCSS](https://postcss.org/), así que puedes usar CSS anidado y [directivas @](https://windicss.org/features/directives.html) por defecto. Por ejemplo:
=======
Styles will be processed by [UnoCSS](https://unocss.dev/) and [PostCSS](https://postcss.org/), so you can use css nesting and [at-directives](https://windicss.org/features/directives.html) out-of-box. For example:
>>>>>>> c608c011ffbff72d267a0c074a4bfa5ff4b601a7

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[Lee más sobre la sintaxis](https://windicss.org/features/directives.html).

## `index.html`

Convenciones: `index.html`

El `index.html` ofrece la posibilidad de inyectar etiquetas meta y/o scripts al `index.html` principal

Por ejemplo, para el siguiente `index.html` personalizado:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

El `index.html` final será:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## Global Layers

Conventions: `global-top.vue` | `global-bottom.vue`

Learn more: [Global Layers](/custom/global-layers)

