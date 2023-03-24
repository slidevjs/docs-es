# Primeros pasos

## Introducción

Slidev <sup>(slide + dev, `/slʌɪdɪv/`)</sup> es un creador y presentador de diapositivas basado en la web. Está diseñado para que los desarrolladores se centren en la escritura de contenido en Markdown, mientras que también tiene el poder de los componentes HTML y Vue para ofrecer diseños y plantillas _pixel-perfect_ con demostraciones interactivas incrustadas en sus presentaciones.

Utiliza un archivo Markdown rico en funciones para generar diapositivas bonitas con una experiencia de recarga instantánea, junto con muchas integraciones incorporadas como la escritura de código en vivo, la exportación de PDF, la grabación de presentaciones, etc. Dado que está impulsado por la web, puedes hacer cualquier cosa con Slidev: las posibilidades son infinitas.

Puedes obtener más información sobre la justificación del proyecto en la sección de [Por qué Slidev](/guide/why).

### Características

- 📝 [**Basado en Markdown**](/guide/syntax.html) - utiliza tus editores y forma de trabajar favoritos.
- 🧑‍💻 [**Pensado para desarrolladores**](/guide/syntax.html#code-blocks) - resaltado de sintaxis integrado, escritura de código en vivo, etc.
- 🎨 [**Tematizable**](/themes/gallery.html) - un tema puede ser compartido y usado con paquetes npm.
- 🌈 [**Con estilo**](/guide/syntax.html#embedded-styles) - Utilidades de [Windi CSS](https://windicss.org/) bajo demanda o [UnoCSS](https://uno.antfu.me).
- 🤹 [**Interactivo**](/custom/directory-structure.html#components) - incrusta componentes de Vue sin problemas
- 🎙 [**Modo Presentador**](/guide/presenter-mode.html) - usa otra ventana, o incluso tu teléfono para controlar las diapositivas
- 🎨 [**Drawing**](/guide/drawing.html) - dibuja y anota en tus diapositivas
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - soporte integrado para ecuaciones matemáticas en LaTeX
- 📰 [**Diagramas**](/guide/syntax.html#diagrams) - crea diagramas con descripciones textuales
- 🌟 [**Iconos**](/guide/syntax.html#icons) - acceso directo a iconos de cualquier set
- 💻 [**Editores**](/guide/editors.html) - editor integrado, o [extensión para VS Code](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**Grabar**](/guide/recording.html) - grabación y vista de cámara integrados
- 📤 [**Portable**](/guide/exporting.html) - exporta a PDF, PNGs, o incluso un SPA alojable
- ⚡️ [**Rápido**](https://vitejs.dev) - recarga instantánea impulsada por [Vite](https://vitejs.dev)
- 🛠 [**Hackeable**](/custom/config-vite.html) - usando plugins de Vite, componentes de Vue, o cualquier paquete de npm

### Tecnologías

Slidev es posible gracias a la combinación de estas herramientas y tecnologías.

- [Vite](https://vitejs.dev) - Una herramienta de frontend extremadamente rápida
- [Vue 3](https://v3.vuejs.org/) potenciado por [Markdown](https://daringfireball.net/projects/markdown/syntax) - Céntrate en el contenido mientras dispones de la potencia de los componentes HTML y Vue siempre que lo necesites
- [Windi CSS](https://github.com/windicss/windicss) o [UnoCSS](https://github.com/unocss/unocss) - Framework de CSS de utilidades bajo demanda, estilizando tus diapositivas con facilidad
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) - Fragmentos de código con edición en vivo de primera clase
- [RecordRTC](https://recordrtc.org) - Grabación y vista de cámara integrados
- [VueUse](https://vueuse.org) -  [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion), etc.
- [Iconify](https://iconify.design/) - Colecciones de iconos.
- [Drauu](https://github.com/antfu/drauu) - Soporte de dibujos y anotaciones.
- [KaTeX](https://katex.org/) - Renderizado matemático de LaTeX.
- [Mermaid](https://mermaid-js.github.io/mermaid) - Diagramas textuales.

### Preparando tu primera presentación

<br>

#### Pruébalo online

[sli.dev/new](https://sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://sli.dev/new)

#### Créalo localmente

Con NPM:

```bash
$ npm init slidev
```

Con Yarn:

```bash
$ yarn create slidev
```

<<<<<<< HEAD
Sigue las instrucciones, ¡y empieza a crear tus diapositivas ahora! Para obtener más detalles sobre la sintaxis de Markdown, lee la [guía de sintaxis](/guide/syntax).
=======
With pnpm:

```bash
$ pnpm create slidev
```

Follow the prompts and start making your slides now! For more details about the markdown syntax, read through the [syntax guide](/guide/syntax).
>>>>>>> 1317cbcaae63868c5cfbb66bcf4560be7f9c5fbf

### Interfaz de la línea de comandos

En un proyecto donde Slidev está instalado, puedes usar el binario `slidev` en tus scripts npm.

```json
{
  "scripts": {
    "dev": "slidev", // start dev server
    "build": "slidev build", // build for production SPA
    "export": "slidev export" // export slides to pdf
  }
}
```

Sino, puedes usarlo con [`npx`](https://www.npmjs.com/package/npx)

```bash
$ npx slidev
```

Ejecuta `slidev --help` para ver más opciones disponibles.

### Sintaxis de Markdown

Slidev lee tu archivo `slides.md` bajo la raíz de tu proyecto y lo convierte a diapositivas. Cada vez que haces cambios, el contenido de las diapositivas se reflejará automáticamente. Por ejemplo:

~~~md
# Slidev

Hola mundo

---

# Página 2

Usa directamente bloques de código para el resaltado

//```ts
console.log('¡Hola, mundo!')
//```

---

# Página 3
~~~

Lee más sobre la sintaxis de Markdown de Slidev en la [guía de sintaxis](/guide/syntax).
