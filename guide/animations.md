# Animaciones

## Animaciones en clic

### `v-click`

Para aplicar "animaciones en clic" a los elementos, puedes usar la directiva `v-click` o los componentes `<v-click>`

```md
# Hola

<!-- Uso del componente: esto estará invisible hasta que presiones "siguiente" -->
<v-click>

Hola Mundo

</v-click>

<!-- Uso de la directiva: esto estará invisible hasta que presiones "siguiente" por segunda vez -->
<div v-click class="text-xl p-2">

¡Hey!

</div>
```

### `v-after`

El uso de `v-after` es similar al de `v-click` pero hará visible el elemento cuando se active el `v-click` anterior.

```md
<div v-click>Hola</div>
<div v-after>Mundo</div>
```

Al hacer clic en el botón "siguiente", tanto `Hola` como `Mundo` aparecerán juntos.

### `v-click-hide`

Same as `v-click` but instead of making the element appear, it makes the element invisible after clicking.

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks` sólo se proporciona como un componente. Es una forma abreviada de aplicar la directiva `v-click` a todos sus elementos descendientes. Es especialmente útil cuando se trabaja con listas.

```md
<v-clicks>

- Ítem 1
- Ítem 2
- Ítem 3
- Ítem 4

</v-clicks>
```

Cada vez que haga clic en "siguiente" se hará visible un elemento.

### Recuento de clics personalizado

Por defecto, Slidev cuenta cuántos pasos son necesarios antes de pasar a la siguiente diapositiva. Puedes anular esta configuración pasando la opción de en Front Matter `clicks`:

```yaml
---
# 10 clics en esta diapositiva, antes de pasar a la siguiente
clicks: 10
---
```

### Ordenando

Pasando el índice de `v-click` a tus directivas, puedes personalizar el orden de mostrado

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- el orden se invierte -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- visible después de 3 clics -->
<v-clicks at="3">
  <div>Hola</div>
</v-clicks>
```

### Transiciones de elementos

Cuando aplique la directiva `v-click` a sus elementos, se le adjuntará el nombre de clase `slidev-vclick-target`. Cuando los elementos están ocultos, el nombre de la clase `slidev-vclick-hidden` también se adjuntará. Por ejemplo:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Texto</div>
```

Después de un clic, se convertirá en:

```html
<div class="slidev-vclick-target">Texto</div>
```

Por defecto, se aplica una sutil transición de opacidad a esas clases:

```css
// the default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

Puedes sobreescribirlos para personalizar los efectos de transición en tus hojas de estilo personalizadas. 

Por ejemplo, puedes conseguir las transiciones de escalado mediante: 

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

Para especificar animaciones sólo para determinadas diapositivas o diseños:

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

Aprende más sobre [personalizar estilos](/custom/directory-structure#style).

## Movimiento

Slidev tiene [@vueuse/motion](https://motion.vueuse.org/) incorporado. Puedes usar la directiva `v-motion` a cualquier elemento para hacer que se le aplique movimiento. Por ejemplo:

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

El texto `Slidev` se moverá de `-80px` a su posición original en la inicialización.

> Nota: Slidev precarga la siguiente diapositiva para mejorar el rendimiento, lo que significa que las animaciones podrían comenzar antes de que usted navegue por la página. Para que funcione correctamente, puede desactivar la precarga para la diapositiva en particular
>
> ```md
> ---
> preload: false
> ---
> ```
>
> O controla el ciclo de vida de los elementos con `v-if` para tener controles precisos
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

Aprende más: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)

## Transiciones de diapositivas

<div id="pages-transitions" />

> Disponible desde v0.39.0

Slidev soporta transiciones de diapositivas. Puedes habilitarlo configurando la opción `transition` en el frontmatter:

```md
---
transition: slide-left
---
```

Esto dará un bonito efecto de deslizamiento al cambiar de diapositiva. Configurándolo en la portada se aplicará a todas las diapositivas. También puede establecer diferentes transiciones por diapositiva.

### Transiciones incorporadas

- `fade` - Fundido cruzado de entrada/salida
- `fade-out` - Fundido de salida y luego fundido de entrada
- `slide-left` - Desliza a la izquierda (desliza a la derecha cuando va hacia atrás)
- `slide-right` - Desliza hacia la derecha (desliza hacia la izquierda al retroceder)
- `slide-up` - Deslizar hacia arriba (deslizar hacia abajo al retroceder)
- `slide-down` - Desliza hacia abajo (desliza hacia arriba al retroceder)

### Transiciones personalizadas

Las transiciones de diapositivas de Slidev son impulsadas por [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). Usted puede proporcionar sus transiciones personalizadas por:

```md
---
transition: mi-transicion
---
```

and then in your custom stylesheets:

```css
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 0.5s ease;
}

.mi-transicion-enter-from,
.mi-transicion-leave-to {
  opacity: 0;
}
```

Más información sobre su funcionamiento en [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Transiciones hacia delante y hacia atrás

Puede especificar diferentes transiciones para la navegación hacia adelante y hacia atrás utilizando `|` como separador en el nombre de la transición:


```md
---
transition: go-forward | go-backward
---
```

Con esto, cuando pase de la diapositiva 1 a la diapositiva 2, se aplicará la transición `go-forward`. Cuando vaya de la diapositiva 2 a la diapositiva 1, se aplicará la transición `go-backward`.

### Uso Avanzado

El campo `transition` acepta una opción que se pasará al componente [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition). Por ejemplo:

```md
---
transition:
  name: mi-transicion
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
