# Personalizaciones

<<<<<<< HEAD
Slidev es totalmente personalizable, desde el estilo hasta la configuración de las herramientas. Permite configurar las herramientas que funcionan "detrás de las escenas" ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)
=======
Slidev is fully customizable, from styling to tooling configurations. It allows you to configure the tools underneath ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco), etc.)
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

## Configuración de Frontmatter

Puedes configurar Slidev en el frontmatter de tu primera diapositiva, a continuación se muestra el valor por defecto de cada opción.

```yaml
---
<<<<<<< HEAD
# ID del tema o nombre del paquete
# Para más información: https://es.sli.dev/themes/use.html

theme: 'default'
# título de tu diapositiva, se deducirá automáticamente de la primera cabecera si no se especifica
title: 'Slidev'
=======
# theme id or package name
# Learn more: https://sli.dev/themes/use.html
theme: default
# title of your slide, will auto infer from the first header if not specified
title: Slidev
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string.
info: false
<<<<<<< HEAD
# activa el modo de presentador, puede ser un booleano, 'dev' o 'build'
=======
# author field for exported PDF
author: Your Name Here
# keywords field for exported PDF, comma-delimited.
keywords: keyword1,keyword2

# enable presenter mode, can be boolean, 'dev' or 'build'
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
presenter: true
# descarga habilitada de pdf en la compilación de SPA, también puede ser una url personalizada
download: false
<<<<<<< HEAD
# nombre del archivo exportado
exportFilename: 'slidev-exported.pdf'
# resaltador de sintaxis, puede ser 'prisma' o 'shiki'
highlighter: 'prism'
# muestra el número de línea
lineNumbers: false
# activa el editor monaco, puede ser booleano, 'dev' o 'build'
monaco: 'dev'
=======
# filename of the export file
exportFilename: slidev-exported
# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# syntax highlighter, can be 'prism', 'shiki'
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# enable monaco editor, can be boolean, 'dev' or 'build'
monaco: dev
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: dev

<<<<<<< HEAD
# forzar el esquema de colores para las diapositivas, podría ser 'auto', 'light', o 'dark'
colorSchema: 'auto'
# modo del router para vue-router, podría ser "history" o "hash"
routerMode: 'history'
# relación de aspecto de las diapositivas
aspectRatio: '16/9'
# ancho real del lienzo, unidad en px
=======
# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: auto
# router mode for vue-router, can be "history" or "hash"
routerMode: history
# aspect ratio for the slides
aspectRatio: 16/9
# real width of the canvas, unit in px
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon, puede ser una ruta local o una URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# URL del servidor de PlantUML para renderizar diagramas
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fuentes que se importarán desde Google Fonts
# Leer más: https://es.sli.dev/custom/fonts
fonts:
  sans: Roboto
  serif: Roboto Slab
  mono: Fira Code

# frontmatter aplicado por defecto a todas las diapositivas
defaults:
  layout: default
  # ...

#  opciones de dibujado
# Para leer más: https://es.sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML tag attributes
htmlAttrs:
  dir: ltr
  lang: en
---
```

Revisa las [definiciones de tipos](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) para más opciones.

<<<<<<< HEAD
## Estructura del directorio
=======
## Per slide configuration

In addition, every slide accepts the following configuration in the Frontmatter block:

* `clicks` (`number`): Custom clicks count (learn more [here](/guide/animations.html#custom-total-clicks-count)).
* `disabled` (`boolean`): Completely disable and hide the slide.
* `hide` (`boolean`): The same as `disabled`.
* `hideInToc` (`boolean`): Hide the slide for the `<Toc>` components (learn more [here](/builtin/components.html#toc)).
* `layout` (`string`): Defines the layout component applied to the slide (learn more [here](/guide/syntax.html#front-matter-layouts) and [here](/builtin/layouts.html)).
* `level` (`number`): Override the title level for the `<Title>` and `<Toc>` components (only if `title` has also been declared, learn more [here](/builtin/components.html#titles)).
* `preload` (`boolean`, default `true`): Preload the next slide (learn more [here](/guide/animations.html#motion)).
* `routeAlias` (`string`): Create a route alias that can be used in the URL or with the `<Link>` component (learn more [here](/builtin/components.html#link)).
* `src` (`string`): Includes a markdown file (learn more [here](/guide/syntax.html#multiple-entries)).
* `title` (`string`): Override the title for the `<Title>` and `<Toc>` components (learn more [here](/builtin/components.html#titles)).
* `transition` (`string | TransitionProps`): Defines the transition between the slide and the next one (learn more [here](/guide/animations.html#slide-transitions)).
* `zoom` (`number`): Custom zoom scale. Useful for slides with a lot of content.

## Directory Structure
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83

Slidev utiliza convenciones de estructura de directorios para minimizar la superficie de configuración y hacer que las extensiones en la funcionalidad sean flexibles e intuitivas.

Consulta la sección de [estructura de directorios](/custom/directory-structure).

## Herramientas de configuración

<<<<<<< HEAD
- [Resaltadores](/custom/highlighters)
- [Configurar Vue](/custom/config-vue)
- [Configurar Vite](/custom/config-vite)
- [Configurar Windi CSS](/custom/config-windicss)
- [Configurar Monaco](/custom/config-monaco)
- [Configurar KaTeX](/custom/config-katex)
- [Configurar Mermaid](/custom/config-mermaid)
=======
- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure UnoCSS](/custom/config-unocss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
>>>>>>> 1d54c861642c679ca01887a28e187047fedcbc83
