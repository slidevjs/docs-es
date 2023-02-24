# Componentes

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
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

#### Uso

~~~md
<Arrow x1="10" y1="20" x2="100" y2="200" />
~~~

Or:

~~~md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
~~~

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
* `x1` (`string | number`, required): start point x position
* `y1` (`string | number`, required): start point y position
* `x2` (`string | number`, required): end point x position
* `y2` (`string | number`, required): end point x position
* `width` (`string | number`, default: `2`): line width
* `color` (`string`, default: `'currentColor'`): line color

### `AutoFitText`

> Experimental

Box inside which the font size will automatically adapt to fit the content. Similar to PowerPoint or Keynote TextBox.

#### Usage

~~~md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
~~~

Parameters:

* `max` (`string | number`, default `100`): Maximum font size
* `min` (`string | number`, default `30`): Minimum font size
* `modelValue` (`string`, default `''`): text content

### `LightOrDark`

Use it to display one thing or another depending on the active light or dark theme.

#### Usage

Use it with the two named Slots `#dark` and `#light`:
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

Provided props on `LightOrDark` component will be available using scoped slot props:
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

You can provide markdown in the slots, but you will need to surround the content with blank lines:
~~~md
<LightOrDark>
  <template #dark>
  
![dark](/dark.png)

  </template>
  <template #light>
  
![light](/light.png)

  </template>
</LightOrDark>
~~~
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

### `Link`

Inserta un enlace que pueda utilizar para navegar a una diapositiva determinada.


#### Uso

~~~md
<Link to="42">Ir a la diapositiva 42</Link>
<Link to="42" title="Ir a la diapositiva 42"/>
~~~

Parámetros:

* `to` (`string | number`): La ruta de la diapositiva a la que se va a navegar (las diapositivas empiezan por `1`)
* `title` (`string`): El título a mostrar

### `RenderWhen`

Render slot only when the context match (for example when we are in presenter view).

#### Usage

~~~md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
~~~

Context type: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

Parameters:

* `context` (`Context | Context[]`): context or array of contexts you want the slot to be rendered

### `SlideCurrentNo`

Current slide number.

#### Usage

~~~md
<SlideCurrentNo />
~~~

### `SlidesTotal`

Total number of slides.

#### Usage

~~~md
<SlidesTotal />
~~~

### `Titles`

Inserta el título principal de una diapositiva analizada como HTML.

Los títulos y los niveles de título se heredan automáticamente del primer elemento de título de cada diapositiva.

Puedes sobreescribir este comportamiento en cada diapositiva usando la sintaxis de frontmatter:
```yml
---
title: Mi presentación
level: 2
---
```

#### Uso

El componente `<Titles>` es un componente virtual que se puede importar con:
```js
import Titles from '/@slidev/titles.md'
```

Y puedes usarlo así:
~~~md
<Titles no="42" />
~~~

Parámetros

* `no` (`string | number`): El numero de la diapositiva de la cual extraer el título (las diapositivas empiezan por `1`)

<<<<<<< HEAD
## Componentes personalizados
=======
### `Toc`

Insert a Table Of Content.

If you want a slide to not appear in the `<Toc>` component, you can use in the front matter block of the slide:
```yml
---
hideInToc: true
---
```

Titles are displayed using the [`<Titles>` component](#titles)

#### Usage

~~~md
<Toc />
~~~

Parameters:

* `columns` (`string | number`, default: `1`): The number of columns of the display
* `listClass` (`string | string[]`, default: `''`): Classes to apply to the table of contents list
* `maxDepth` (`string | number`, default: `Infinity`): The maximum depth level of title to display
* `minDepth` (`string | number`, default: `1`): The minimum depth level of title to display
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, default: `'all'`):
  * `'all'`: Display all items
  * `'onlyCurrentTree'`: Display only items that are in current tree (active item, parents and children of active item)
  * `'onlySiblings'`: Display only items that are in current tree and their direct siblings

### `Transform`

Apply scaling or transforming to elements.

#### Usage

~~~md
<Transform :scale="0.5">
  <YourElements />
</Transform>
~~~

Parameters:

* `scale` (`number | string`, default `1`): transform scale value
* `origin` (`string`, default `'top left'`): transform origin value

### `Tweet`

Embed a tweet.

#### Usage

~~~md
<Tweet id="20" />
~~~

Parameters:

* `id` (`number | string`, required): id of the tweet
* `scale` (`number | string`, default `1`): transform scale value
* `conversation` (`string`, default `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

See https://sli.dev/guide/animations.html
### `Youtube`

Embed a youtube video.

#### Usage

~~~md
<Youtube id="luoMHjh-XcQ" />
~~~

Parameters:

* `id` (`string`, required): id of the youtube video
* `width` (`number`): width of the video
* `height` (`number`): height of the video

## Custom Components
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

Crea un directorio llamado `components/` en la raíz de tu proyecto, y simplemente mueve allí los componentes de Vue. Una vez lo hagas, podrás usarlo con el mismo nombre que en tu archivo de Markdown.

Lea más en la sección de [personalización](/custom/directory-structure#components).

## Componentes proveídos por temas


Los temas pueden también pueden proveer sus propios componentes. Por favor, lea su documentación para aquello que provean. 


Lea más en la sección de [estructura del contenido](/custom/directory-structure).
