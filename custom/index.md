# Personalizaciones

Slidev es totalmente personalizable, desde el estilo hasta la configuración de las herramientas. Permite configurar las herramientas que funcionan "detrás de las escenas" ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configuración de Frontmatter

Puedes configurar Slidev en el frontmatter de tu primera diapositiva, a continuación se muestra el valor por defecto de cada opción.

```yaml
---
# ID del tema o nombre del paquete
theme: 'default'
<<<<<<< HEAD
# título de tu diapositiva, se deducirá automáticamente de la primera cabecera si no se especifica
title: ''
=======
# title of your slide, will auto infer from the first header if not specified
title: 'Slidev'
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'
# information for your slides, can be a markdown string
info: false

<<<<<<< HEAD
# descarga habilitada de pdf en la compilación de SPA, también puede ser una url personalizada
download: true
# resaltador de sintaxis, puede ser 'prisma' o 'shiki'
=======
# enabled pdf downloading in SPA build, can also be a custom url
download: false
# filename of the export file
exportFilename: 'slidev-exported.pdf'
# syntax highlighter, can be 'prism' or 'shiki'
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
highlighter: 'prism'
# muestra el número de línea
lineNumbers: false
<<<<<<< HEAD
# activa el editor monaco, por defecto para desarrollo
=======
# enable monaco editor, can be boolean, 'dev' or 'build'
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
monaco: 'dev'
# download remote assets in local using vite-plugin-remote-assets, can be boolean, 'dev' or 'build'
remoteAssets: false
# controls whether texts in slides are selectable
selectable: true
# enable slide recording, can be boolean, 'dev' or 'build'
record: 'dev'

<<<<<<< HEAD
# forzar el esquema de colores para las diapositivas, podría ser 'auto', 'light', o 'dark'
colorSchema: 'auto'
# modo del router para vue-router, podría ser "history" o "hash"
=======
# force color schema for the slides, can be 'auto', 'light', or 'dark'
colorSchema: 'auto'
# router mode for vue-router, can be "history" or "hash"
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
routerMode: 'history'
# relación de aspecto de las diapositivas
aspectRatio: '16/9'
# ancho real del lienzo, unidad en px
canvasWidth: 980
# used for theme customization, will inject root styles as `--slidev-theme-x` for attribute `x`
themeConfig:
  primary: '#5d8392'

# favicon, puede ser una ruta local o una URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
<<<<<<< HEAD
# fuentes que se importarán desde Google Fonts
# Leer más: https://es.sli.dev/custom/fonts
=======
# URL of PlantUML server used to render diagrams
plantUmlServer: 'https://www.plantuml.com/plantuml'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# frontmatter aplicado por defecto a todas las diapositivas
defaults:
  layout: 'default'
  # ...

<<<<<<< HEAD
# información para sus diapositivas, puede ser una cadena markdown
info: |
  ## Slidev
  ¡Mis primeras presentaciones con [Slidev](http://sli.dev/)!
=======
# drawing options
# Learn more: https://sli.dev/guide/drawing.html
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
---
```

Revisa las [definiciones de tipos](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L29) para más opciones.

## Estructura del directorio

Slidev utiliza convenciones de estructura de directorios para minimizar la superficie de configuración y hacer que las extensiones en la funcionalidad sean flexibles e intuitivas.

Consulta la sección de [estructura de directorios](/custom/directory-structure).

## Herramientas de configuración

- [Resaltadores](/custom/highlighters)
- [Configurar Vue](/custom/config-vue)
- [Configurar Vite](/custom/config-vite)
- [Configurar Windi CSS](/custom/config-windicss)
- [Configurar Monaco](/custom/config-monaco)
- [Configurar KaTeX](/custom/config-katex)
- [Configurar Mermaid](/custom/config-mermaid)
