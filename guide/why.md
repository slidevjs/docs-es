# Por qué Slidev

Hay muchos creadores de diapositivas *WYSIWYG* de uso general y repletos de funciones, como
[Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint) y [Apple Keynote](https://www.apple.com/keynote/). Funcionan bastante bien para hacer bonitas diapositivas con animaciones, gráficos y muchas otras cosas, a la vez que son muy intuitivas y fáciles de aprender. Entonces, ¿por qué molestarse en hacer Slidev?

Slidev pretende proporcionar la flexibilidad y la interactividad para que los desarrolladores puedan hacer sus presentaciones aún más interesantes, expresivas y atractivas utilizando las herramientas y tecnologías con las que ya están familiarizados. 

Cuando se trabaja con editores WYSIWYG, es fácil distraerse con las opciones de estilo. Slidev lo remedia separando el contenido y lo visual. Esto le permite centrarse en una cosa a la vez, a la vez que puede reutilizar los temas de la comunidad. Slidev no pretende sustituir por completo a otros creadores de presentaciones de diapositivas. Más bien, se centra en atender a la comunidad de desarrolladores.

## Slidev

![](/screenshots/cover.png)

Estas son algunas de las características más interesantes de Slidev:

## Basado en Markdown

Slidev utiliza un formato Markdown extendido para almacenar y organizar tus diapositivas en un único archivo de texto. Esto te permite centrarte en la elaboración del contenido. Y como el contenido y los estilos están separados, esto también hace posible cambiar entre diferentes temas sin esfuerzo.

Aprende más sobre la [sintaxis de Markdown de Slidev](/guide/syntax).
## Tematizable

Los temas para Slidev pueden ser compartidos e instalados usando módulos de npm. Luego se aplican con una sola línea de configuración.

Revisa la [galería de temas](/themes/gallery) o [aprende cómo escribir un tema](/themes/write-a-theme).

## Pensado para desarrolladores

Slidev proporciona soporte de primera clase de los fragmentos de código para los desarrolladores. [Prism](https://prismjs.com/) y [Shiki](https://github.com/shikijs/shiki) consiguen resaltado de sintaxis perfectol, al tiempo que es capaz de editar el código en cualquier momento. Con el [editor de Monaco](https://microsoft.github.io/monaco-editor/) integrado, también te permite programar en directo en tu presentación con autocompletado, marcado de tipos e incluso soporte de TypeScript.

Lee más sobre los [resaltadores](/custom/highlighters) y la [configuración de Monaco](/custom/config-monaco).

## Rápido

Slidev es potenciado por [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) y [Windi CSS](https://windicss.org/), lo que da la mejor experiencia de editor. Cada cambio que hagas se reflejará en las diapositivas **instantáneamente**.

<<<<<<< HEAD
Aprende más sobre [nuestras tecnologías](/guide/#tech-stack).
=======
Slidev is powered by [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) and [UnoCSS](https://unocss.dev/), which give you the most wonderful authoring experience. Every change you made will reflect to your slides **instantly**.
>>>>>>> cbaf809403e519ee40e0980dc672c57d90c1dea2

## Interactivo y expresivo

Puedes escribir componentes Vue personalizados y utilizarlos directamente dentro de tu archivo markdown. También puedes interactuar con ellos dentro de la presentación para expresar tu idea de una manera más intersante e intuitiva.

Aprende más sobre [grabar aquí](/guide/recording).

## Portable

Exporte sus diapositivas a PDF, PNG o incluso a una _Single Page Application_ (SPA) alojable con un solo comando, y compártalas en cualquier lugar.

Lee más sobre esto en [exportando documentos](/guide/exporting).

## Hackeable

Al estar basado en tecnologías web, todo lo que se puede hacer en una aplicación web también es posible con Slidev. Por ejemplo, WebGL, solicitudes de API, iframes, o incluso compartir en vivo. ¡Todo depende de tu imaginación!

## Pruébalo

Trastear con Slidev te dirá más que mil palabras. Estás tan solo a un comando:

```bash
$ npm init slidev
```

O echa un vistazo rápido:

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
