# FAQ

## Grids

Dado que Slidev está basado en la web, puedes aplicar cualquier modelo de grid como [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), o incluso [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/), tú tienes el control.

Dado que tenemos [Windi CSS](https://windicss.org/) integrado, aquí te mostramos una forma simple como referencia:

```html
<div class="grid grid-cols-2 gap-4">
<div>

La primera columna

</div>
<div>

La segunda columna

</div>
</div>
```

<<<<<<< HEAD
Yendo más allá, puedes personalizar el tamaño de cada columna con:
=======
Go further, you can customize the size of each column like:
>>>>>>> 565eb6709aa69ec36842f22c104f90ef741d9440

```html
<div class="grid grid-cols-[200px,1fr,10%] gap-4">
<div>

La primera columna (200px)

</div>
<div>

La segunda columna (auto ajuste)

</div>
<div>

La tercera columna (10% del ancho del elemento padre)

</div>
</div>
```

Lee más sobre [Windi CSS Grids](https://windicss.org/utilities/grid.html).

## Posicionamiento

Las diapositivas se definen en tamaños fijos (por defecto `980x552px`) y se ajustan a la pantalla del usuario. Puedes utilizar con seguridad la posición absoluta en tus diapositivas ya que se escalarán junto con la pantalla.

Por ejemplo:

```html
<div class="absolute left-30px bottom-30px">
This is a left-bottom aligned footer
</div>
```

Para cambiar el tamaño real del lienzo, puedes pasar las opciones `canvasWidth` en tu primer frontmatter:

```yaml
---
canvasWidth: 800
---
```

## Tamaño de la letra

Si crees que el tamaño de la fuente en tus diapositivas es demasiado pequeño, puedes ajustarlo de varias maneras:

### Anular el estilo local

Puedes anular los estilos de cada diapositiva con la etiqueta `<style>`.

```md
# Página 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Página 2

No se verá afectado
```

Leer más: [Estilos Incrustados](/guide/syntax.html#embedded-styles)

### Reemplazando estilos globales

Puedes crear tus propios estilos globales en `./style.css`, por ejemplo

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

Leer más: [Global Style](/custom/directory-structure.html#style)

### Escalar el lienzo

Al cambiar el tamaño real del lienzo se escalarán todos los contenidos (texto, imágenes, componentes, etc.) y las diapositivas

```yaml
---
# por defecto: 980
# como el lienzo se hace más pequeño, el tamaño visual será mayor
canvasWidth: 800
---
```

### Use Transform

We provide a built-in component `<Transform />`, which is a thin wrapper of CSS transform property.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
