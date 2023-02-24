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

<<<<<<< HEAD
## Transiciones de páginas

> La versión actual NO incluye soporte para diapositivas. Estamos planeando añadir soporte para ellas en la próxima versión mayor. Mientras tanto, puedes utilizar tus estilos y librerías personalizadas para hacerlo.
=======
## Slide Transitions

<div id="pages-transitions" />

> Available since v0.39.0

Slidev supports slide transitions out of the box. You can enable it by setting the `transition` frontmatter option:

```md
---
transition: slide-left
---
```

This will give you a nice sliding effects on slide switching. Setting it in the frontmatter will apply to all slides. You can also set different transition per slide.

### Builtin Transitions

- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)

### Custom Transitions

Slidev's slide transitions are powered by [Vue Transition](https://vuejs.org/guide/built-ins/transition.html). You can provide your custom transitions by:

```md
---
transition: my-transition
---
```

and then in your custom stylesheets:

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

Learn more how it works in [Vue Transition](https://vuejs.org/guide/built-ins/transition.html).

### Forward & Backward Transitions

You can specify different transitions for forward and backward navigation using `|` as a separator in the transition name:

```md
---
transition: go-forward | go-backward
---
```

With this, when you go from slide 1 to slide 2, the `go-forward` transition will be applied. When you go from slide 2 to slide 1, the `go-backward` transition will be applied.

### Advanced Usage

The `transition` field accepts an option that will passed to the [`<TransitionGroup>`](https://vuejs.org/api/built-in-components.html#transition) component. For example:

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624
