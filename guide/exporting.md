# Exportando

## Diapositivas

### PDF

> La exportación a PDF o PNG se basa en [Playwright](https://playwright.dev) para la renderización. Por lo tanto, tendras que instalar [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary) para utilizar esta función.
> Si estás haciendo la exportación en un entorno CI, [la guía CI de playwright](https://playwright.dev/docs/ci) puede ser útil.

Instala `playwright-chromium`

```bash
$ npm i -D playwright-chromium
```

Ahora exporta sus diapositivas a PDF utilizando el siguiente comando:

```bash
$ slidev export
```

<<<<<<< HEAD
Después de unos segundos, tus diapositivas estarán listas en `./slides-export.pdf`.

En el caso que quieras exportar tus diapositivas usando la versión oscura del tema, utiliza la opción `--dark`:
```bash
$ slidev export --dark
```

### Exportar pasos por clic

> Disponible desde v0.21

Por defecto, Slidev exporta 1 página por diapositiva con las animaciones de los clics desactivadas. Si deseas exportar diapositivas con múltiples pasos en múltiples páginas, agrega `--with-clicks`.

```bash
$ slidev export --with-clicks
```

### PNGs
=======
After a few seconds, your slides will be ready at `./slides-export.pdf`.

### PNGs and Markdown
>>>>>>> 081241c66e4b17a1a524facc9585f0b6f74f5699

Al pasar la opción `--format png`, Slidev exportará imágenes PNG para cada diapositiva en lugar de un PDF.

```bash
$ slidev export --format png
```
### Exportar un rango de diapositivas

<<<<<<< HEAD
Por defecto, se exportan todas las diapositivas de la presentación. Si deseas exportar una diapositiva específica o un rango de diapositivas, puede sactivar la opción `--range` y especificar qué diapositivas desea exportar. 
=======
You can also compile a markdown file composed of compiled png using `--format md`.

```bash
$ slidev export --format md
```

### Dark mode

In case you want to export your slides using the dark version of the theme, use the `--dark` option:

```bash
$ slidev export --dark
```

### Export Clicks Steps

> Available since v0.21

By default, Slidev exports one page per slide with clicks animations disabled. If you want export slides with multiple steps into multiple pages, pass the `--with-clicks` option.

```bash
$ slidev export --with-clicks
```

### Slide range

You can also specify a range of slides to export with the `--range` option.

```bash
$ slidev export --range 1,4-5,6
```

### PDF outline

> Available since v0.36.10

You can generate the PDF outline by passing the `--with-toc` option.

```bash
$ slidev export --with-toc
```

### Output filename

You can specify the output filename with the `--output` option.

```bash
$ slidev export --output my-pdf-export
```

Or in the frontmatter configuration:

```yaml
---
exportFilename: my-pdf-export
---
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export.
>>>>>>> 081241c66e4b17a1a524facc9585f0b6f74f5699

```bash
$ slidev export --range 1,6-8,10
```

Esta opción acepta tanto números específicos de diapositivas como rangos.

<<<<<<< HEAD
El ejemplo anterior exportaría las diapositivas 1,6,7,8 y 10. 
=======
The example above would export slides 1,6,7,8, and 10.

### Multiple entries

You can also export multiple slides at once.

```bash
$ slidev export slides1.md slides1.md
```

Or

```bash
$ slidev export *.md
```

In this case, each input file will generate its own PDf file.
>>>>>>> 081241c66e4b17a1a524facc9585f0b6f74f5699

## Notas de presentador

> Disponible desde v0.36.8

Exporta todas las notas del presentador (el último comentario al final de cada diapositiva) como un documento de texto.

```bash
$ slidev export-notes
```

This command also accept multiple entries like for the [export command](#multiple-entries)

## Single-Page Application (SPA)

<<<<<<< HEAD
Revisa [Alojamiento Estático](/guide/hosting).
=======
See [Static Hosting](/guide/hosting).

## Troubleshooting

### Timeout

For big presentation you might want to increase the playwrigth timeout with `--timeout`

```bash
$ slidev export --timeout 60000
```

### Executable path

You can set the browser executable path for playwright using `--executable-path`

```bash
$ slidev export --executable-path [path_to_chromium]
```
>>>>>>> 081241c66e4b17a1a524facc9585f0b6f74f5699
