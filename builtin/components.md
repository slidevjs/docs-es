# Componentes

## Componentes integrados

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

#### Uso

~~~md
<Toc />
~~~

Parámetros

* `columns` (`string | number`, por defecto: `1`) El número de columnas a mostrar
* `maxDepth` (`string | number`, por defecto: `Infinity`): La profundidad máxima a mostrar
* `minDepth` (`string | number`, por defecto: `1`): La profundidad mínima a mostrar
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, por defecto: `'all'`):
  * `'all'`: Muestra todos los items.
  * `'onlyCurrentTree'`: Muestra solo los items que están en el árbol actual (el ítem activo, su padre y sus hijos)
  * `'onlySiblings'`: Muestra solo los items que están en el árbol actual y sus hijos directos.

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


## Custom Components
>>>>>>> 8d6e5c8c26cd8e0bdf78481faddcc258dab98b3c

Crea un directorio llamado `components/` en la raíz de tu proyecto, y simplemente mueve allí los componentes de Vue. Una vez lo hagas, podrás usarlo con el mismo nombre que en tu archivo de Markdown.

Lea más en la sección de [personalización](/custom/directory-structure#components).

## Componentes proveídos por temas


Los temas pueden también pueden proveer sus propios componentes. Por favor, lea su documentación para aquello que provean. 


Lea más en la sección de [estructura del contenido](/custom/directory-structure).
