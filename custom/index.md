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

# descarga habilitada de pdf en la compilación de SPA, también puede ser una url personalizada
download: true
# resaltador de sintaxis, puede ser 'prisma' o 'shiki'
highlighter: 'prism'
#  habilitar el editor de monaco, por defecto solo en 'dev'
monaco: 'dev'

# forzar el esquema de colores para las diapositivas, podría ser 'auto', 'light', o 'dark'
colorSchema: 'auto'
# modo del router para vue-router, podría ser "history" o "hash"
routerMode: 'history'
# relación de aspecto de las diapositivas
aspectRatio: '16/9'
# ancho real del lienzo, unidad en px
canvasWidth: 980

# frontmatter por defecto aplicado a todas las diapositivas
defaults:
  layout: 'default'
  # ...

# información para sus diapositivas, puede ser una cadena markdown
info: |
  ## Slidev
  ¡Mis primeras presentaciones con [Slidev](http://sli.dev/)!
---
```

Revisa las [definiciones de tipos](https://github.com/slidevjs/slidev/blob/main/packages/types/src/types.ts#L16) para más opciones.

## Estructura del directorio

Slidev utiliza convenciones de estructura de directorios para minimizar la superficie de configuración y hacer que las extensiones en la funcionalidad sean flexibles e intuitivas.

Consulta la sección de [estructura de directorios](/custom/directory-structure).

## `vite.config.ts`

Revisa la sección de [configurar Vite](/custom/config-vite).

## `windicss.config.ts`

Revisa la sección de [Configure Windi CSS](/custom/config-windicss).
