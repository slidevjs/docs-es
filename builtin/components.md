<<<<<<< HEAD
# Componentes
=======
---
outline: [2, 3]
---

# Components
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Componentes integrados

<<<<<<< HEAD
> La documentación de esta sección está todavía en progreso. Mientras tanto, puedes echar un vistazo al [código fuente](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) directamente.

### `Toc`

Inserta una tabla de contenidos (TOC).

Si deseas que una diapositiva no aparezca en el componente `<Toc>`, puedes usar el siguiente frontmatter:

```yml
---
hideInToc: true
---
```

Los títulos se muestran con el [componente `<Titles>`](#titles)
=======
### `Arrow`

Draw an arrow.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

#### Uso

```md
<Arrow x1="10" y1="20" x2="100" y2="200" />
```

Or:

```md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
```

Parámetros

<<<<<<< HEAD
* `columns` (`string | number`, por defecto: `1`) El número de columnas a mostrar
* `maxDepth` (`string | number`, por defecto: `Infinity`): La profundidad máxima a mostrar
* `minDepth` (`string | number`, por defecto: `1`): La profundidad mínima a mostrar
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, por defecto: `'all'`):
  * `'all'`: Muestra todos los items.
  * `'onlyCurrentTree'`: Muestra solo los items que están en el árbol actual (el ítem activo, su padre y sus hijos)
  * `'onlySiblings'`: Muestra solo los items que están en el árbol actual y sus hijos directos.
=======
- `x1` (`string | number`, required): start point x position
- `y1` (`string | number`, required): start point y position
- `x2` (`string | number`, required): end point x position
- `y2` (`string | number`, required): end point x position
- `width` (`string | number`, default: `2`): line width
- `color` (`string`, default: `'currentColor'`): line color
- `two-way` (`boolean`, default: `false`): draw a two-way arrow

### `VDragArrow`

An `Arrow` component that can be dragged.

#### Usage

See https://sli.dev/guide/draggable.html#draggable-arrow

Parameters not related to position are the same as [the `Arrow` component](#arrow).

### `AutoFitText`

> Experimental

Box inside which the font size will automatically adapt to fit the content. Similar to PowerPoint or Keynote TextBox.

#### Usage

```md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
```

Parameters:

- `max` (`string | number`, default `100`): Maximum font size
- `min` (`string | number`, default `30`): Minimum font size
- `modelValue` (`string`, default `''`): text content

### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:

```md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
```

Provided props on `LightOrDark` component will be available using scoped slot props:

```md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
```

You can provide markdown in the slots, but you will need to surround the content with blank lines:

```md
<LightOrDark>
  <template #dark>

![dark](/dark.png)

  </template>
  <template #light>

![light](/light.png)

  </template>
</LightOrDark>
```
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### `Link`

Inserta un enlace que pueda utilizar para navegar a una diapositiva determinada.


#### Uso

<<<<<<< HEAD
~~~md
<Link to="42">Ir a la diapositiva 42</Link>
<Link to="42" title="Ir a la diapositiva 42"/>
~~~
=======
```md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
<Link to="solutions" title="Go to solutions"/>
```
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

Parámetros:

<<<<<<< HEAD
* `to` (`string | number`): La ruta de la diapositiva a la que se va a navegar (las diapositivas empiezan por `1`)
* `title` (`string`): El título a mostrar
=======
- `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
- `title` (`string`): The title to display

One can use a string as `to`, provided the corresponding route exists, e.g.

```md
---
routeAlias: solutions
---

# Now some solutions!
```

### `PoweredBySlidev`

Renders "Powered by Slidev" with a link to the Slidev website.

### `RenderWhen`

Render slot only when the context match (for example when we are in presenter view).

#### Usage

```md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
```

Context type: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Parameters:

- `context` (`Context | Context[]`): context or array of contexts you want the slot to be rendered

### `SlideCurrentNo`

Current slide number.

#### Usage

```md
<SlideCurrentNo />
```

### `SlidesTotal`

Total number of slides.

#### Usage

```md
<SlidesTotal />
```
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### `Titles`

Inserta el título principal de una diapositiva analizada como HTML.

Los títulos y los niveles de título se heredan automáticamente del primer elemento de título de cada diapositiva.

<<<<<<< HEAD
Puedes sobreescribir este comportamiento en cada diapositiva usando la sintaxis de frontmatter:
=======
You can override this automatic behaviour for a slide by using the front matter syntax:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```yml
---
title: Mi presentación
level: 2
---
```

#### Uso

<<<<<<< HEAD
El componente `<Titles>` es un componente virtual que se puede importar con:
=======
The `<Titles>` component is a virtual component you can import with:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```js
import Titles from '/@slidev/titles.md'
```

<<<<<<< HEAD
Y puedes usarlo así:
~~~md
=======
Then you can use it with:

```md
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
<Titles no="42" />
```

Parámetros

<<<<<<< HEAD
* `no` (`string | number`): El numero de la diapositiva de la cual extraer el título (las diapositivas empiezan por `1`)


=======
### `LightOrDark`

Utilízalo para mostrar una cosa u otra en función del tema claro u oscuro activo.
=======
- `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)

### `Toc`

Insert a Table Of Content.

If you want a slide to not appear in the `<Toc>` component, you can use in the front matter block of the slide:

```yml
---
hideInToc: true
---
```

Titles are displayed using the [`<Titles>` component](#titles)
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

#### Uso

<<<<<<< HEAD
Utiliza los slots `#dark` y `#light`:
~~~md
<LightOrDark>
  <template #dark>El tema oscuro (dark) está activado</template>
  <template #light>El tema claro (light) está activado</template>
</LightOrDark>
~~~

Los props pasados al componente `LightOrDark` estarán disponibles utilizando props de alcance local en el slot.
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

Puedes usar markdown en los slots, pero tendrás que rodearlo con líneas en blanco:

~~~md
<LightOrDark>
  <template #dark>
  
![dark](/dark.png)
=======
```md
<Toc />
```

Parameters:

- `columns` (`string | number`, default: `1`): The number of columns of the display
- `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
- `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
- `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
- `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  - `'all'`: Display all items
  - `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  - `'onlySiblings'`: Display only items that are in current tree and their direct siblings
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### `Transform`

Apply scaling or transforming to elements.

#### Usage

```md
<Transform :scale="0.5">
  <YourElements />
</Transform>
```

Parameters:

- `scale` (`number | string`, default `1`): transform scale value
- `origin` (`string`, default `'top left'`): transform origin value

### `Tweet`

Embed a tweet.

#### Usage

```md
<Tweet id="20" />
```

Parameters:

- `id` (`number | string`, required): id of the tweet
- `scale` (`number | string`, default `1`): transform scale value
- `conversation` (`string`, default `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)
- `cards` (`'hidden' | 'visible'`, default `'visible'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

See https://sli.dev/guide/animations.html

### `VSwitch`

Switch between multiple slots based on clicks.

See https://sli.dev/guide/animations.html#enter-leave

- If the `unmount` prop is set to `true`, the previous slot will be unmounted when switching to the next slot. Default is `false`.
- Use the `tag` and `childTag` props to change the default tag of the component and its children. Default is `div`.
- Use the `transition` prop to change the transition effect. Default is `false` (disabled).

### `VDrag`

See https://sli.dev/guide/draggable.html

### `SlidevVideo`

Embed a video.

#### Usage

```md
<SlidevVideo v-click autoplay controls>
  <!-- Anything that can go in a HTML video element. -->
  <source src="/myMovie.mp4" type="video/mp4" />
  <source src="/myMovie.webm" type="video/webm" />
  <p>
    Your browser does not support videos. You may download it
    <a href="/myMovie.mp4">here</a>.
  </p>
</SlidevVideo>
```

Check [HTML video element's doc](https://developer.mozilla.org/docs/Web/HTML/Element/Video) to see what can be included in this component's slot.

Parameters:

- `controls` (`boolean`, default: `false`): show the video controls
- `autoplay` (`boolean | 'once'`, default: `false`):
  - `true` or `'once'`: start the video only once and does not restart it once ended or paused
  - `false`: never automatically start the video (rely on `controls` instead)
- `autoreset` (`'slide' | 'click'`, default: `undefined`):
  - `'slide'`: go back to the start of the video when going back to the slide
  - `'click'`: go back to the start of the video when going back to the component's click turn
- `poster` (`string | undefined`, default: `undefined`):
  - The source of the image to print when the video is not playing.
- `printPoster` (`string | undefined`, default: `undefined`):
  - The override for `poster` when printing.
- `timestamp` (`string | number`, default: `0`):
  - The starting time of the video in seconds.
- `printTimestamp` (`string | number | 'last' | undefined`, default: `undefined`):
  - The override for `timestamp` when printing.

::: warning
When exporting, the video may fail to load because Chromium does not support some video formats. In this case, you can specify the executable path of the browser. See [Chromium executable path](/guide/exporting.html#executable-path) for more information.
:::

### `Youtube`

Embed a youtube video.

#### Usage

```md
<Youtube id="luoMHjh-XcQ" />
```

Parameters:

- `id` (`string`, required): id of the youtube video
- `width` (`number`): width of the video
- `height` (`number`): height of the video

You can also make the video start at specific time if you add `?start=1234` to the id value (where 1234 are seconds),

## Componentes personalizados

Crea un directorio llamado `components/` en la raíz de tu proyecto, y simplemente mueve allí los componentes de Vue. Una vez lo hagas, podrás usarlo con el mismo nombre que en tu archivo de Markdown.

Lea más en la sección de [personalización](/custom/directory-structure#components).

## Componentes proveídos por temas


Los temas pueden también pueden proveer sus propios componentes. Por favor, lea su documentación para aquello que provean. 


Lea más en la sección de [estructura del contenido](/custom/directory-structure).
