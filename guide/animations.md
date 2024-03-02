<<<<<<< HEAD
# Animaciones
=======
---
outline: deep
---

# Animations
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

## Animaciones en clic

> [!NOTE]
> Since v0.48.0, we are rewritten the click animations system with much more consistent behaviors. It might change the behaviors of your existing slides in edge cases. While this page is showing the new click system, you can find more details about the refactor in [#1279](https://github.com/slidevjs/slidev/pull/1279).

### `v-click`

Para aplicar "animaciones en clic" a los elementos, puedes usar la directiva `v-click` o los componentes `<v-click>`

```md
<<<<<<< HEAD
# Hola

<!-- Uso del componente: esto estará invisible hasta que presiones "siguiente" -->
<v-click>

Hola Mundo

</v-click>

<!-- Uso de la directiva: esto estará invisible hasta que presiones "siguiente" por segunda vez -->
<div v-click class="text-xl p-2">

¡Hey!

</div>
=======
<!-- Component usage:
     this will be invisible until you press "next" -->
<v-click> Hello **World** </v-click>

<!-- Directive usage:
     this will be invisible until you press "next" the second time -->
<div v-click class="text-xl"> Hey! </div>
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1
```

### `v-after`

<<<<<<< HEAD
El uso de `v-after` es similar al de `v-click` pero hará visible el elemento cuando se active el `v-click` anterior.

```md
<div v-click>Hola</div>
<div v-after>Mundo</div>
```

Al hacer clic en el botón "siguiente", tanto `Hola` como `Mundo` aparecerán juntos.
=======
`v-after` is only provided as a directive. It will turn the element visible when the previous `v-click` is triggered.

```md
<div v-click> Hello </div>
<div v-after> World </div>
```

When you press "next", both `Hello` and `World` will show up together.
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

### Hide after clicking

Add a `.hide` modifier to `v-click` or `v-after` to make the element invisible after clicking, instead of showing up.

```md
<div v-click> Visible after 1 click </div>
<div v-click.hide> Hidden after 2 click </div>
<div v-after.hide> Hidden after 2 click </div>
```

For `v-click` component, you can use the `hide` prop to achieve the same effect:

```md
<v-click> Visible after 1 click </v-click>
<v-click hide> Hidden after 2 click </v-click>
```

### `v-clicks`

<<<<<<< HEAD
`v-clicks` sólo se proporciona como un componente. Es una forma abreviada de aplicar la directiva `v-click` a todos sus elementos descendientes. Es especialmente útil cuando se trabaja con listas.
=======
`v-clicks` is only provided as a component. It's a shorthand to apply the `v-click` directive to all its child elements. It is especially useful when working with lists and tables.
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

```md
<v-clicks>

<<<<<<< HEAD
- Ítem 1
- Ítem 2
- Ítem 3
- Ítem 4
=======
- Item 1
- Item 2
- Item 3
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

</v-clicks>
```

<<<<<<< HEAD
Cada vez que haga clic en "siguiente" se hará visible un elemento.

### Recuento de clics personalizado
=======
An item will become visible each time you click "next".
It accepts a `depth` prop for nested list:

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

Also, you can use the `every` prop to specify the number of items to show after each click:

```md
<v-clicks every="2">

- Item 1 (part 1)
- Item 1 (part 2)
- Item 2 (part 1)
- Item 2 (part 2)

</v-clicks>
```

### Positioning

By default, the clicking animations take place one by one. You can customize the animation position of elements by using the `at` prop or the `v-click` directive with value.

Like the CSS layout system, click-animated elements can be "relative" or "absolute":

#### Relative Position

This actual position of relative elements are calculated based on the previous relative elements:

~~~md
<div v-click> visible after 1 click </div>
<v-click at="+2"><div> visible after 3 clicks </div></v-click>
<div v-click.hide="'-1'"> hidden after 2 clicks </div>

```js {none|1|2}{at:'+5'}
1  // highlighted after 7 clicks
2  // highlighted after 8 clicks
```
~~~

> [!NOTE]
> The default value of `v-click` is `'+1'` when you don't specify it.

In fact, `v-after` are just shortcuts for `v-click` with `at` prop:

```md
<!-- The following 2 usages are equivalent -->
<img v-after />
<img v-click="'+0'" />

<!-- The following 3 usages are equivalent -->
<img v-click />
<img v-click="'+1'" />
<v-click-gap size="1" /><img v-after />
```

:::info
Only string values start with `'+'` or `'-'` like `'+1'` are treated as relative positions:

| Value          | Kind     |
| -------------- | -------- |
| `'-1'`, `'+1'` | Relative |
| `+1` === `1`   | Absolute |
| `'1'`          | Absolute |

So don't forget the single quotes for the relative values.
:::

#### Absolute Position

The given value is the exact click count to show the element:

~~~md
<div v-click="3"> visible after 3 clicks </div>
<v-click at="2"><div> visible after 2 clicks </div></v-click>
<div v-click.hide="1"> hidden after 1 click </div>

```js {none|1|2}{at:3}
1  // highlighted after 3 clicks
2  // highlighted after 4 clicks
```
~~~

#### Mixed Case

You can mix the absolute and relative positions:

~~~md
<div v-click> visible after 1 click </div>
<div v-click="3"> visible after 3 clicks </div>
<div v-click> visible after 2 click </div>
<div v-click="'-1'"> visible after 1 click </div>
<div v-click="4"> visible after 4 clicks </div>
~~~

The following example synchronizes the highlighting of the two code blocks:

~~~md
```js {1|2}{at:1}
1 + 1
'a' + 'b'
```

```js {1|2}{at:1}
2
'ab'
```
~~~

### Enter & Leave

> Available since v0.43.0

You can also specify the enter and leave index for the `v-click` directive by passing an array. The end index is exclusive.

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### Custom Total Clicks Count
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

Por defecto, Slidev cuenta cuántos pasos son necesarios antes de pasar a la siguiente diapositiva. Puedes anular esta configuración pasando la opción de en Front Matter `clicks`:

```yaml
---
# 10 clics en esta diapositiva, antes de pasar a la siguiente
clicks: 10
---
```

<<<<<<< HEAD
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
=======
### Element Transitions
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

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

<<<<<<< HEAD
Puedes sobreescribirlos para personalizar los efectos de transición en tus hojas de estilo personalizadas. 

Por ejemplo, puedes conseguir las transiciones de escalado mediante: 
=======
You can override them to customize the transition effects in your custom stylesheets.

For example, you can achieve the scaling up transitions by:
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

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

<<<<<<< HEAD
Aprende más: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/directive-usage.html) | [Presets](https://motion.vueuse.org/presets.html)
=======
Learn mode: [Demo](https://sli.dev/demo/starter/7) | [@vueuse/motion](https://motion.vueuse.org/) | [v-motion](https://motion.vueuse.org/features/directive-usage) | [Presets](https://motion.vueuse.org/features/presets)
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

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

<<<<<<< HEAD
- `fade` - Fundido cruzado de entrada/salida
- `fade-out` - Fundido de salida y luego fundido de entrada
- `slide-left` - Desliza a la izquierda (desliza a la derecha cuando va hacia atrás)
- `slide-right` - Desliza hacia la derecha (desliza hacia la izquierda al retroceder)
- `slide-up` - Deslizar hacia arriba (deslizar hacia abajo al retroceder)
- `slide-down` - Desliza hacia abajo (desliza hacia arriba al retroceder)
=======
- `fade` - Crossfade in/out
- `fade-out` - Fade out and then fade in
- `slide-left` - Slides to the left (slide to right when going backward)
- `slide-right` - Slides to the right (slide to left when going backward)
- `slide-up` - Slides to the top (slide to bottom when going backward)
- `slide-down` - Slides to the bottom (slide to top when going backward)
- `view-transition` - Slides with the view transitions API

### View Transitions

> Available since v0.43.0

The **View Transitions API** provides a mechanism for easily creating animated transitions between different DOM states. Learn more how it works in [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API).

:::warning
Experimental: This is not supported by all browsers. Check the [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility) carefully before using this.
:::

You can use the `view-transition-name` CSS property to name view transitions, which creates connections between different page elements and smooth transitions when switching slides.

You can enable [MDC (Markdown Component) Syntax](/guide/syntax#mdc-syntax) support to conveniently name view-transitions:

```md
---
transition: view-transition
mdc: true
---
# View Transition {.inline-block.view-transition-title}
---
# View Transition {.inline-block.view-transition-title}
```
>>>>>>> e8054222645741a1f15a6138c2b0b6a091fb43a1

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
