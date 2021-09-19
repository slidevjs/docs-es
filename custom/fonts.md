# Fuentes

> Disponible desde v0.20

Aunque puedes utilizar HTML y CSS para personalizar las fuentes y el estilo de tus diapositivas como quieras, Slidev también te ofrece una forma cómoda de utilizarlas sin esfuerzo alguno.

En tu *frontmatter*, configúralo de la siguiente manera:

```yaml
---
fonts:
  # normalmente, el texto
  sans: 'Robot'
  # utilizado junto a la clase 'font-serif' de windicss
  serif: 'Robot Slab'
  # para bloques de código, código en línea, etc.
  mono: 'Fira Code'
---
```

Y eso es todo.

Las fuentes serán **importadas automáticamente desde [Google Fonts](https://fonts.google.com/)**. Eso significa que puedes utilizar cualquier fuente alojada en Google Fonts.

## Fuentes locales
Por defecto, Slidev asume que todas las fuentes especificadas a través de las configuraciones `fonts` provienen de Google Fonts. Si deseas utilizar fuentes locales, especifica `fonts.local` para evitar que colisione con Google Fonts. 

```yaml
---
fonts:
  # Igual que font-family en CSS, puedes separar con una coma para el fallback
  sans: 'Helvetica Neue,Robot'
  # marca 'Helvetica Neue' como una fuente local
  local: 'Helvetica Neue'
---
```

## Grosores e itálicas

Por defecto, Slidev viene con tres grosores: `200`,`400`,`600` para cada fuente. Puedes configurarlo mediante:

```yaml
---
fonts:
  sans: 'Robot'
  # por defecto
  weights: '200,400,600'
  # importa fuentes itálicas, `false` por defecto
  italic: false
---
```

Esta configuración se aplica a todas las fuentes web. Para un control más preciso de los grosores de cada fuente, deberás importarlos manualmente con [HTML](/custom/directory-structure.html#index-html) y CSS.

## Fuentes fallback

En la mayoría de los casos, bastará con marcar la "fuente especial" y Slidev se encargará de añadir el resto de fallbacks. Por ejemplo:

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

resultará en:

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

Si quieres desactivar este comportamiento, puedes hacerlo con:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## Proveedores

- Opciones: `google` | `none`
- Por defecto: `google`

Por el momento, solo se soporta Google como proveedor de fuentes aunque está planeado integrar otros en el futuro. Específicalo como `none` para desactivar toda la funcionalidad de auto-importes y depender de fuentes locales.

```yaml
---
fonts:
  provide: 'none'
---
```


