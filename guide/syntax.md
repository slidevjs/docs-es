# Sintaxis de Markdown

Las diapositivas se escriben dentro de **un único archivo markdown** (por defecto `./slides.md`). 

Puedes utilizar [las características de Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) como lo harías normalmente, con soporte adicional de HTML en línea y componentes de Vue. También se admite el estilo utilizando [Windi CSS](https://windicss.org). Utiliza `---` separado con una nueva línea para dividir tus diapositivas. 

~~~md
# Slidev

¡Hola, mundo!

---

# Página 2

Usa directamente bloques de código para el resaltado

//```ts
console.log('¡Hola, mundo!')
//```

---

# Página 3

Puedes utilizar directamente Windi CSS y los componentes de Vue para estilizar y enriquecer tus diapositivas.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Front Matter y plantillas

<<<<<<< HEAD
Puede especificar plantillas y otros metadatos para cada diapositiva convirtiendo los separadores en [bloques de Front Matter](https://jekyllrb.com/docs/front-matter/). Cada bloque de entrada comienza con un guión triple y termina con otro. Los textos entre ellos son objetos de datos en formato [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/). Por ejemplo:
=======
Specify layouts and other metadata for each slide by converting the separators into [front matter blocks](https://jekyllrb.com/docs/front-matter/). Each frontmatter starts with a triple-dash and ends with another. Texts between them are data objects in [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) format. For example:
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

~~~md
---
layout: cover
---

# Slidev

Esta es la página de portada

---
layout: centrado
background: './images/background-1.png'
class: 'text-white'
---​

# Página 2

Esta es una página con la plantilla `centrado` y una imagen de fondo.

---

# Página 3

Esta es la página por defecto sin ningún metadato adicional.
~~~

Revisa la [página de personalización](/custom/) para más detalles.

## Bloques de código

Una gran razón por la que estoy construyendo Slidev es la necesidad de hacer que mi código se vea bien en las diapositivas. Así que, tal y como esperabas, puedes utilizar el bloque de código de estilo Markdown para resaltar tu código.

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

<<<<<<< HEAD
### Resaltado de línea
=======
We support [Prism](http://prismjs.com) and [Shiki](https://github.com/shiki/shiki) as syntax highlighters. Refer to [the highlighters section](/custom/highlighters/) for more details.

### Line Highlighting
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

Para resaltar líneas específicas, simplemente añade los números de línea dentro del paréntesis `{}`. Los números de línea empiezan a contar desde 1.

~~~ts
//```ts {2,3}
function sumar(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Para cambiar el resaltado en varios pasos, puede utilizar `|` para separarlos. Por ejemplo
~~~ts
//```ts {2-3|5|all}
function sumar(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

Esto resaltará primero`a: Ref<number> | number` y `b: Ref<number> | number`, y después `return computed(() => unref(a) + unref(b))` tras un clic, y finalmente, todo el bloque. Aprende más en la [guía de animaciones de clics](/guide/animations).

### Editor de Monaco


Cuando quieras hacer alguna modificación en la presentación, simplemente añade `{monaco}` después del identificador del lenguaje - ¡se convierte todo el bloque en un editor de Monaco con todas las funciones!

~~~ts
//```ts {monaco}
console.log('HolaMundo')
//```
~~~

Lea más sobre [configurar Monaco](/custom/config-monaco).

## Estilos incrustados

Puedes usar la etiqueta `<style>` en tu Markdown directamente para sobreescribir los estilos de la **diapositiva actual**.

```md
# Esto es rojo

<style>
h1 {
  color: red
}
</style>

---

# La siguiente diapositiva no se ve afectada
```

La etiqueta`<style>` en Markdown siempre está [focalizada](https://vue-loader.vuejs.org/guide/scoped-css.html). Para reemplazar los estilos globales, echa un vistazo a la [sección de personalización](/custom/directory-structure#style).

Gracias a [Windi CSS](https://windicss.org), puedes usar CSS anidado y [directivas](https://windicss.org/features/directives.html) (por `@apply`)

```md
# Slidev

> Hello `world`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## Recursos estáticos

Al igual que harías en markdown, puedes utilizar imágenes que apunten a una url remota o local.

Para los recursos remotos, [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets) los almacenará en caché tras la primera ejecución para que puedan tener una carga instantánea incluso para las imágenes más pesadas.

```md
![Imagen remota](https://sli.dev/favicon.png)
```

Para recursos locales, muévelos a [la carpeta `public`](/custom/directory-structure.html#public) y referéncialos con una **barrita** (`/`).

```md
![Imagen local](/pic.png)
```

Si deseas aplicar tamaños o estilos personalizados, puedes convertirlos a la etiqueta `<img>`: 

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## Notas

También puedes tomar notas para cada diapositiva. Se mostrarán en el [Modo Presentador](/guide/presenter-mode) para que puedas consultarlas durante las presentaciones.

En Markdown, el último bloque de comentarios de cada diapositiva será tratado como una nota.

~~~md
---
layout: cover
---

# Página 1

Esta es la página de la portada.

<!-- Esto es una nota -->

---

# Página 2

<!-- Esto NO es una nota porque precede al contenido de la diapositiva -->

La segunda página

<!--
Esta es otra nota
-->
~~~

## Iconos

Slidev te permite tener acceso a casi todos los conjuntos de iconos populares de código abierto **directamente** en tu markdown. Potenciado por [`vite-plugin-icons`](https://github.com/antfu/vite-plugin-icons) e [Iconify](https://iconify.design/).

El nombrado sigue la convención de [Iconify](https://iconify.design/): `{collection-name}-{icon-name}`. Por ejemplo:

- `<mdi-account-circle />` - <mdi-account-circle /> de [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> de [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> de [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> de [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> de [SVG Logos](https://github.com/gilbarbara/logos)
- Y mucho más...

<<<<<<< HEAD
Puedes navegar y buscar todos los iconos con [Icônes](https://icones.js.org/).
=======
Browse and search for all the icons available with [Icônes](https://icones.js.org/).
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

### Estilizando iconos

Puedes estilizar los iconos tal y como estilizarías un elemento HTML. Por ejemplo:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## Slots

> Disponible desde v0.18

Algunas plantillas pueden proporcionar múltiples puntos de contribución utilizando [los <<slots>> nombrados de Vue](https://v3.vuejs.org/guide/component-slots.html).

Por ejemplo, en una estructura de [dos columnas](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue), puede tener dos columnas a la izquierda (slot `default`) y a la derecha (slot `right`) una al lado de la otra.

```md
---
layout: two-cols
---

<template v-slot:default>

# Izquierda

Esto muestra a la izquierda

</template>
<template v-slot:right>

# Derecha

Esto se muestra a la derecha

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Izquierda</h3>
<p>Esto se muestra a la izquierda</p>
</div>
<div>
<h3>Derecha</h3>
<p>Esto se muestra a la derecha</p>
</div>
</div>

También proporcionamos una sintaxis abreviada (`::nombre::`) para el nombre del slot. El siguiente ejemplo funciona exactamente igual que el anterior.

```md
---
layout: two-cols
---

# Izquierda

Esto muestra a la izquierda

::right::

# Derecha

Esto se muestra a la derecha
```

<<<<<<< HEAD
También puede especificar explícitamente el slot por defecto y proporcionar un orden personalizado
=======
You can also explicitly specify the default slot and provide in the custom order
>>>>>>> fcc2f07502ee5a4c2865a8717b4ecd4bfafa05c8

```md
---
layout: two-cols
---

::right::

# Derecha

Esto se muestra a la derecha

::default::

# Izquierda

Esto muestra a la izquierda
```

## Configuraciones

Todas las configuraciones necesarias se pueden definir en el archivo Markdown. Por ejemplo:

```md
---
theme: seriph
layout: portada
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

Esta es la página de la portada
```

Lee más sobre la [configuración de Front Matter](/custom/#frontmatter-configures).

## LaTeX

Slidev viene con soporte integrado de LaTex, gracias a [KaTeX](https://katex.org/).

<Tweet id="1392246507793915904" />

### En líneas

Rodea tu LaTeX con un solo `$` a cada lado para la representación en línea.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### Bloque

Utiliza dos (`$$`) para la representación de bloques. Este modo utiliza símbolos más grandes y centra el resultado.

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

Aprende más: [Demo](https://sli.dev/demo/starter/8) | [KaTeX](https://katex.org/) | [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)

## Diagramas
También puedes crear diagramas / gráficos a partir de descripciones textuales en tu Markdown, gracias a [Mermaid](https://mermaid-js.github.io/mermaid).

Los bloques de código marcados como  `mermaid` se convertirán en diagramas, por ejemplo:

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Hello John, how are you?
  Note over Alice,John: A typical interaction
//```
~~~

Además, puedes pasarle un objeto de opciones para especificar la escala y el tema. La sintaxis del objeto es un literal de objeto de JavaScript, tendrás que añadir comillas (`'`) para las cadenas y utilizar comas (`,`) entre las claves.

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
//```
~~~

Aprende más: [Demo](https://sli.dev/demo/starter/9) | [Mermaid](https://mermaid-js.github.io/mermaid)

## Entradas múltiples

> Disponible desde v0.15

Puedes dividir tu `slides.md` en varios archivos y organizarlos como quieras.

`slides.md` :

```md
# Página 1

Esta es una página normal

---
src: ./subpagina2.md
---

<!-- esta página se cargará desde './subpagina2.md' -->
El contenido en línea será ignorado
```

`subpagina2.md` :

```md
# Página 2

Esta página es de otro archivo
```

### Fusión de Front Matter

Puedes proporcionar _Front Matters_ tanto de tu entrada principal como de páginas externas de markdown. Si hay las mismas claves en ellas, las de la **entrada principal tienen mayor prioridad**. Por ejemplo:

`slides.md` :

```md
---
src: ./cover.md
background: https://sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://sli.dev/foo.png
---

# Portada

Página de portada
```

Acabarán siendo equivalentes a la página siguiente:

```md
---
layout: cover
background: https://sli.dev/bar.png
class: text-center
---

# Portada

Página de portada
```

### Reutilización de páginas

Con el soporte de entradas múltiples, la reutilización de páginas puede ser sencilla. Por ejemplo:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# reutilización
src: ./content.md
---
```
