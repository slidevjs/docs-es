# Instalación

## Plantilla de inicio

> Slidev requiere [**Node.js >=14.0**](https://nodejs.org/)

La mejor manera de empezar es utilizando nuestra plantilla oficial de inicio.

Con NPM:

```bash
$ npm init slidev@latest
```

Con Yarn:

```bash
$ yarn create slidev
```

<<<<<<< HEAD
Sigue las indicaciones y se abrirá la presentación en http://localhost:3030/ automáticamente para ti.
=======
Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> ecd8bf022f3594c9efceac78aae2852a0055f9bf

También contiene la configuración básica y una breve demostración con instrucciones sobre cómo empezar a utilizar Slidev.

## Instalación manual

Si todavía prefieres instalar Slidev manualmente o quieres integrarlo en tus proyectos existentes, puedes hacer lo siguiente:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> Por favor, nótese que si usas [pnpm](https://pnpm.io), necesitarás activar la opción de '[shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist)' para que Slidev funcione correctamente:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Instalación global

> Available since v0.14

Puedes instalar Slidev globalmente con el siguiente comando:

```bash
$ npm i -g @slidev/cli
```

Y luego usar `slidev` donde desees sin que tengas que crear un proyecto cada vez.

```bash
$ slidev
```

Este comando también intentará utilizar el `@slidev/cli` local si se ha encontrado en `node_modules`.

## Instalación en Docker

Si necesitas una forma rápida de ejecutar una presentación con contenedores, puedes utilizar la imagen de [Docker](https://hub.docker.com/r/tangramor/slidev) preconstruida y mantenida por [tangramor](https://github.com/tangramor), o construir la tuya propia.

Simplemente ejecuta el siguiente comando en tu carpeta de trabajo:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

Si tu carpeta de trabajo está vacía, generará una plantilla de `slides.md` y otros archivos relacionados en tu carpeta de trabajo, y lanzará el servidor en el puerto `3030`. 

<<<<<<< HEAD
Puedes acceder a tus diapositivas desde http://localhost:3030/
=======
You can access your slides from `http://localhost:3030/`
>>>>>>> ecd8bf022f3594c9efceac78aae2852a0055f9bf


### Construir una imagen desplegable

O puedes crear tu propio proyecto de Slidev en Docker con Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Crea la imagen de Docker: `docker build -t mippt .`

Y ejecuta el contenedor: `docker run --name misdiapos --rm --user node -p 3030:3030 mippt`

<<<<<<< HEAD
Puedes visitar tus diapositivas desde http://localhost:3030/
=======
You can visit your slides from `http://localhost:3030/`
>>>>>>> ecd8bf022f3594c9efceac78aae2852a0055f9bf


### Constuir una SPA alojable (Single Page Application)

Ejecuta el comando `docker exec -i slidev npx slidev build` en el contenedor de `slidev` en ejcución. Generará archivos HTML estáticos en la carpeta `dist`.


#### Alojar en Github Pages

Puedes alojar `dist` en un sitio web estático como [Github Pages](https://tangramor.github.io/slidev_docker/) o Gitlab Pages. 

Debido a que en las páginas de Github la URL puede contener subcarpetas, tienes que modificar el `index.html` generado y cambiar `href="/assets/xxx` por `href="./assets/xxx`. O puedes utilizar la opción `--base=/<subcarpeta>/` durante el proceso de construcción, como por ejemplo `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Y para evitar el proceso de construcción de Jekyll, es necesario añadir un archivo vacío denominado `.nojekyll`.


#### Alojamiento con Docker

También puedes alojarlo por tu cuenta con Docker:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

O crea una imagen estática con el siguiente Dockerfile:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

Crea la imagen de Docker: `docker build -t mystaticppt .`

Y ejecuta el contendor: `docker run --name myslides --rm -p 80:80 mystaticppt`

Puedes acceder a tus diapositivas desde http://localhost/

<<<<<<< HEAD

Echa un vistazo a [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) para más detalles.
=======
Refer to the [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) for more details.

## Command Line Interface (CLI)

`@slidev/cli` Expose a few commands you can use with `npx slidev ...` or by adding scripts in your `package.json`:
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

In that case you will be able to run `npm run dev`.

You can pass options to any commands:

* boolean option are `true` if they are present, false otherwise (example: `slidev --open`)
* some options can have values you can add just after the option or by using the `=` character (example: `slidev --port 8080` or `slidev --port=8080`)

If you use npm scripts, don't forget to add `--` after the npm command:
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Start a local server for Slidev.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default `false`): force the optimizer to ignore the cache and re-bundle.
* `--theme`, `-t` (`string`): override theme.

### `slidev build [entry]`

Build hostable SPA.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--watch`, `-w` (`boolean`, default: `false`): build watch.
* `--out`, `-o` (`string`, default: `dist`): output dir.
* `--base` (`string`, default: `/`): base URL (see https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, default: `false`): allow to download the slides as PDF inside the SPA.
* `--theme`, `-t` (`string`): override theme.

### `slidev export [entry]`

Export slides to PDF (or other format).

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

Options:

* `--output` (`string`, default: use `exportFilename` (see https://sli.dev/custom/#frontmatter-configures) or use `[entry]-export`): path to the output.
* `--base` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, default: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, default: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.

### `slidev format [entry]`

Format the markdown file.

* `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.

### `slidev theme [subcommand]`

Theme related operations.

Subcommands:

* `eject [entry]`: Eject current theme into local file system
  * `[entry]` (`string`, default: `slides.md`): path to the slides markdown entry.
  * Options:
    * `--dir` (`string`, default: `theme`): output dir.
    * `--theme`, `-t` (`string`): override theme.
>>>>>>> ecd8bf022f3594c9efceac78aae2852a0055f9bf
