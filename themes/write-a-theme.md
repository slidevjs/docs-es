# Escribir un tema

Para empezar, te recomendamos que utilices nuestro generador para armar tu primer tema

```bash
$ npm init slidev-theme
```

Luego puedes modificar y jugar con él. También puede consultar los [temas oficiales](/themes/gallery) como ejemplos.

## Capacidad

Un tema puede contribuir a los siguientes puntos:

- Estilos globales
- Proporcionar fuentes web
- Proporcionar diseños personalizados o anular los existentes
- Proporcionar componentes personalizados o anular los existentes
- Extender las configuraciones de Windi CSS
- Configurar herramientas como Monaco y Prism

## Convenciones

Los temas se publican en el registro npm, y deben seguir las siguientes convenciones:

- El nombre del paquete debe empezar por `slidev-theme-`, por ejemplo: `slidev-theme-awesome`.
- Añadir `slidev-theme` y `slidev` en el campo `keywords` de tu `package.json`.

## Configuración

Para configurar el campo de pruebas para su tema, puede crear `example.md` con el siguiente frontmatter, para decirle a Slidev que no está heredando de ningún tema existente.

```md
---
theme: none
---
```

Opcionalmente, también puedes añadir algunos scripts a tu `packages.json`.

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

Para publicar tu tema, simplemente ejecuta `npm publish` y estarás listo. No se requiere ningún proceso de transpilación (lo que significa que puedes publicar directamente los archivos `.vue` y `.ts`, Slidev es lo suficientemente inteligente como para entenderlos).

Los puntos de contribución del tema siguen las mismas convenciones que la personalización local, por favor consulta [los documentos para las convenciones de nomenclatura](/custom/). 

## Esquema de colores

Por defecto, Slidev asume que los temas soportan tanto el modo claro como el modo oscuro. Si sólo quieres que tu tema se presente en un esquema de color diseñado, tendrás que especificarlo explícitamente en `package.json`.

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // o "dark" o "both"
  }
}
```

Para acceder al modo oscuro al crear tus estilos de tema, puedes envolver el css específico del modo oscuro dentro de una clase `dark`:

```css
/* css general aquí */

html:not(.dark) {
  /* css del modo claro aquí */
}

html.dark {
  /* css del modo oscuro aquí */
}
```

Slidev alterna una clase `dark` en el elemento `html` de la página para cambiar el esquema de color.

## Resaltador

Los colores de resaltado de sintaxis también se proporcionan en el tema. Soportamos tanto [Prism](https://prismjs.com/) como [Shiki](https://github.com/shikijs/shiki). Para más información, consulte [los documentos de resaltado de sintaxis](/custom/highlighters).

Puede soportar uno de ellos, o ambos. Consulta el tema por defecto para los ejemplos de configuración [`./styles/prism.css`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/styles/prism.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/theme-default/setup/shiki.ts).

Además, recuerda especificar los resaltadores compatibles en su `package.json`.

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "all"
  }
}
```
