# Personalizaciones

Slidev es totalmente personalizable, desde el estilo hasta la configuración de las herramientas. Permite configurar las herramientas que funcionan "detrás de las escenas" ([Vite](/custom/config-vite), [Windi CSS](/custom/config-windicss), [Monaco](/custom/config-monaco), etc.)

## Configuración de Frontmatter

Puedes configurar Slidev en el frontmatter de tu primera diapositiva, a continuación se muestra el valor por defecto de cada opción.

```yaml
---
# ID del tema o nombre del paquete
theme: 'default'
# título de tu diapositiva, se deducirá automáticamente de la primera cabecera si no se especifica
title: ''
# titleTemplate for the webpage, `%s` will be replaced by the page's title
titleTemplate: '%s - Slidev'

# descarga habilitada de pdf en la compilación de SPA, también puede ser una url personalizada
download: true
# resaltador de sintaxis, puede ser 'prisma' o 'shiki'
highlighter: 'prism'
# muestra el número de línea
lineNumbers: false
# activa el editor monaco, por defecto para desarrollo
monaco: 'dev'

# forzar el esquema de colores para las diapositivas, podría ser 'auto', 'light', o 'dark'
colorSchema: 'auto'
# modo del router para vue-router, podría ser "history" o "hash"
routerMode: 'history'
# relación de aspecto de las diapositivas
aspectRatio: '16/9'
# ancho real del lienzo, unidad en px
canvasWidth: 980

<<<<<<< HEAD
# fuentes que se importarán desde Google Fonts
# Leer más: https://es.sli.dev/custom/fonts
=======
# favicon, can be a local file path or URL
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# fonts will be auto imported from Google fonts
# Learn more: https://sli.dev/custom/fonts
>>>>>>> 61b06f20d904b70a8b14d4b69879ed25d0f08510
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# frontmatter aplicado por defecto a todas las diapositivas
defaults:
  layout: 'default'
  # ...

# información para sus diapositivas, puede ser una cadena markdown
info: |
  ## Slidev
  ¡Mis primeras presentaciones con [Slidev](http://sli.dev/)!
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
