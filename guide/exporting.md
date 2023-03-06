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

Al pasar la opción `--format png`, Slidev exportará imágenes PNG para cada diapositiva en lugar de un PDF.

```bash
$ slidev export --format png
```
### Exportar un rango de diapositivas

Por defecto, se exportan todas las diapositivas de la presentación. Si deseas exportar una diapositiva específica o un rango de diapositivas, puede sactivar la opción `--range` y especificar qué diapositivas desea exportar. 

```bash
$ slidev export --range 1,6-8,10
```

Esta opción acepta tanto números específicos de diapositivas como rangos.

El ejemplo anterior exportaría las diapositivas 1,6,7,8 y 10. 

## Notas de presentador

> Disponible desde v0.36.8

Exporta todas las notas del presentador (el último comentario al final de cada diapositiva) como un documento de texto.

```bash
$ slidev export-notes
```

## Single-Page Application (SPA)

Revisa [Alojamiento Estático](/guide/hosting).
