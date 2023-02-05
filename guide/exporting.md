# Exportando

## Slides

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

Después de unos segundos, tus diapositivas estarán listas en `./slides-export.pdf`.

En el caso que quieras exportar tus diapositivas usando la versión oscura del tema, utiliza la opción `--dark`:
```bash
$ slidev export --dark
```

<<<<<<< HEAD
### Exportar pasos por clic
=======
#### Export Clicks Steps
>>>>>>> 8ffa1fd2a7c795eb019785595170c2cc8d47c39b

> Disponible desde v0.21

Por defecto, Slidev exporta 1 página por diapositiva con las animaciones de los clics desactivadas. Si deseas exportar diapositivas con múltiples pasos en múltiples páginas, agrega `--with-clicks`.

```bash
$ slidev export --with-clicks
```

### PNGs

Al pasar la opción `--format png`, Slidev exportará imágenes PNG para cada diapositiva en lugar de un PDF.

```bash
$ slidev export --format png
```

### Export a range of slides

By default, all slides in the presentation are exported. If you want to export a specific slide or a range of slides you can set the `--range` option and specify which slides you would like to export. 

```bash
$ slidev export --range 1,6-8,10
```

This option accepts both specific slide numbers and ranges.

The example above would export slides 1,6,7,8, and 10. 

## Presenter notes

> Available since v0.36.8

Export only the presenter notes (the last comment block for each slide) into a text document in PDF.

```bash
$ slidev export-notes
```

## Single-Page Application (SPA)

Revisa [Alojamiento Estático](/guide/hosting).
