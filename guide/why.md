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

Slidev proporciona soporte de primera clase de los fragmentos de código para los desarrolladores. [Prism](https://prismjs.com/) y [Shiki](https://github.com/shikijs/shiki) consiguen resaltado de sintaxis perfecto al pixel, al tiempo que es capaz de editar el código en cualquier momento. Con el [editor de Monaco](https://microsoft.github.io/monaco-editor/) integrado, también te permite programar en directo en tu presentación con autocompletado, marcado de tipos e incluso soporte de TypeScript.

Lee más sobre los [resaltadores](/custom/highlighters) y la [configuración de Monaco](/custom/config-monaco).

## Rápido

Slidev is powered by [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) and [Windi CSS](https://windicss.org/), which give you the most wonderful authoring experience. Every change you made will reflect to your slides **instantly**.

Find more about [our tech stack](/guide/#tech-stack).

## Interactive & Expressive

You can write custom Vue components and use them directly inside your markdown file. You can also interact with them inside the presentation to express your idea in a more interserting and intuitive way.

## Recording Support

Slidev provides built-in recording and camera view. You can share your presentation with your camera view inside, or record and save them separately for your screen and camera. All with one go, no additional tools are needed.

Learn more about [recording here](/guide/recording).

## Portable

Export your slides into PDF, PNGs, or even a hostable Single-page Application (SPA) with a single command, and share them anywhere.

Read more about that in the [exporting docs](/guide/exporting).

## Hackable

Being powered by web technologies, anything that can be done in a web app is also possible with Slidev. For example, WebGL, API requests, iframes, or even live sharing. It's up to your imagination!

## Give it a Try

Playing around with Slidev will tell you more than a thousand words. You are just one command away:

```bash
$ npm init slidev
```

Or have a quick preview of it:

<iframe width="560" height="315" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
