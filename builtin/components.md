# Componentes

## Componentes integrados

> La documentación de esta sección está todavía en progreso. Mientras tanto, puedes echar un vistazo al [código fuente](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) directamente.

### `Toc`

Inserta una tabla de contenidos (TOC).

<<<<<<< HEAD
Los títulos y sus niveles se corresponden al primer elemento del título de cada diapositiva.
=======
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

### `Link`

Insert a link you can use to navigate to a given slide.

#### Usage

~~~md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
~~~

Parameters:

* `to` (`string | number`): The path of the slide to navigate to (slides starts from `1`)
* `title` (`string`): The title to display

### `Titles`

Insert the main title from a slide parsed as HTML.

Titles and title levels get automatically retrieved from the first title element of each slides.
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c

Puedes sobreescribir este comportamiento en cada diapositiva usando la sintaxis de frontmatter:
```yml
---
title: Mi presentación
level: 2
---
```
<<<<<<< HEAD
O si prefieres que la diapositiva no aparezca en la tabla de contenido, puedes ocultarla:
```yml
---
hideInToc: true
---
```

#### Uso
=======

#### Usage

The `<Titles>` component is a virtual component you can import with:
```js
import Titles from '/@slidev/titles.md'
```

Then you can use it with:
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c
~~~md
<Titles no="42" />
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
* `no` (`string | number`): The number of the slide to display the title from (slides starts from `1`)
>>>>>>> 030576270f137f7a9f12dda14c167d21a7eb432c

## Componentes personalizados

Crea un directorio`components/`en la raíz de tu proyecto, y simplemente pon los componentes de la plantilla Vue bajo él; entonces podrás usarlo con el mismo nombre que en tu archivo markdown.

Lea más en la sección de [personalización](/custom/directory-structure#components).

## Componentes proveídos por temas


Los temas pueden también pueden proveer sus propios componentes. Por favor, lea su documentación para aquello que provean. 


Lea más en la sección de [estructura del contenido](/custom/directory-structure).
