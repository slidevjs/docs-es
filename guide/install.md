# Instalación

## Plantilla de inicio

<<<<<<< HEAD
> Slidev requiere [**Node.js >=14.0**](https://nodejs.org/)
=======
> Slidev requires [**Node.js >=18.0**](https://nodejs.org/)
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

La mejor manera de empezar es utilizando nuestra plantilla oficial de inicio.

<<<<<<< HEAD
Con NPM:
=======
::: code-group
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

```bash [npm]
npm init slidev@latest
```

<<<<<<< HEAD
Con Yarn:

```bash
$ yarn create slidev
```

Sigue las indicaciones y se abrirá la presentación en `http://localhost:3030/` automáticamente para ti.
=======
```bash [yarn]
yarn create slidev
```

```bash [pnpm]
pnpm create slidev
```

:::

Follow the prompts and it will open up the slideshow at `http://localhost:3030/` automatically for you.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

También contiene la configuración básica y una breve demostración con instrucciones sobre cómo empezar a utilizar Slidev.

## Instalación manual

Si todavía prefieres instalar Slidev manualmente o quieres integrarlo en tus proyectos existentes, puedes hacer lo siguiente:

```bash
npm install @slidev/cli @slidev/theme-default
```
```bash
touch slides.md
```
```bash
npx slidev
```

<<<<<<< HEAD
> Por favor, nótese que si usas [pnpm](https://pnpm.io), necesitarás activar la opción de '[shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist)' para que Slidev funcione correctamente:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## Instalación global
=======
## Install Globally
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

> Available since v0.14

Puedes instalar Slidev globalmente con el siguiente comando:

```bash
npm i -g @slidev/cli
```

Y luego usar `slidev` donde desees sin que tengas que crear un proyecto cada vez.

```bash
npx slidev
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

<<<<<<< HEAD
Si tu carpeta de trabajo está vacía, generará una plantilla de `slides.md` y otros archivos relacionados en tu carpeta de trabajo, y lanzará el servidor en el puerto `3030`. 


Puedes acceder a tus diapositivas desde `http://localhost:3030/`
=======
If your work folder is empty, it will generate a template `slides.md` and other related files under your work folder, and launch the server on port `3030`.

You can access your slides from `http://localhost:3030/`

### Build deployable image
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0


### Construir una imagen desplegable

O puedes crear tu propio proyecto de Slidev en Docker con Dockerfile:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

Crea la imagen de Docker: `docker build -t mippt .`

Y ejecuta el contenedor: `docker run --name misdiapos --rm --user node -p 3030:3030 mippt`

Puedes visitar tus diapositivas desde `http://localhost:3030/`

<<<<<<< HEAD

### Constuir una SPA alojable (Single Page Application)
=======
### Build hostable SPA (Single Page Application)
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Ejecuta el comando `docker exec -i slidev npx slidev build` en el contenedor de `slidev` en ejcución. Generará archivos HTML estáticos en la carpeta `dist`.

<<<<<<< HEAD

#### Alojar en Github Pages

Puedes alojar `dist` en un sitio web estático como [Github Pages](https://tangramor.github.io/slidev_docker/) o Gitlab Pages. 
=======
#### Host on Github Pages

You can host `dist` in a static web site such as [Github Pages](https://tangramor.github.io/slidev_docker/) or Gitlab Pages.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

Debido a que en las páginas de Github la URL puede contener subcarpetas, tienes que modificar el `index.html` generado y cambiar `href="/assets/xxx` por `href="./assets/xxx`. O puedes utilizar la opción `--base=/<subcarpeta>/` durante el proceso de construcción, como por ejemplo `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

Y para evitar el proceso de construcción de Jekyll, es necesario añadir un archivo vacío denominado `.nojekyll`.

<<<<<<< HEAD

#### Alojamiento con Docker
=======
#### Host by docker
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0

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

Puedes acceder a tus diapositivas desde `http://localhost/`

Echa un vistazo a [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker) para más detalles.

## Interfaz de la línea de comandos (CLI)

`@slidev/cli` expone algunos comandos que puedes usar con `npx slidev ...` o añadiendo scripts en tu `package.json`:
```json
{
  "script": {
    "dev": "slidev"
  }
}
```

En ese caso podrás ejecutar `npm run dev`.

Puedes pasar opciones a cualquier comando:

* las opciones booleanas son `true` si están presentes, `false` en caso contrario (ejemplo: `slidev --open`)
* algunas opciones pueden tener valores que puedes añadir justo después de la opción o usando el carácter `=` ( por ejemplo: `slidev --port 8080` o `slidev --port=8080`)

Si usas scripts de npm, no olvides añadir `--` después del comando de npm:
```bash
npm run slidev -- --open
```

### `slidev [entrada]`

Inicia un servidor local para Slidev.

* `[entrada]` (`string`, por defecto: `slides.md`): ruta al Markdown de las diapositivas.

Opciones:

<<<<<<< HEAD
* `--port`, `-p` (`number`, por defecto: `3030`): número del puerto.
* `--open`, `-o` (`boolean`, por defecto: `false`): abrir en el navegador.
* `--remote [password]` (`string`): escucha al host público y habilita el control remoto, si se pasa un valor entonces el modo presentador es privado y sólo accesible pasando la contraseña dada en el parámetro `password`.
* `--log` (`'error', 'warn', 'info', 'silent'`, por defecto: `'warn'`): Nivel de registro.
* `--force`, `-f` (`boolean`, por defecto `false`): fuerza al optimizador a ignorar la caché.
* `--theme`, `-t` (`string`): reemplaza el tema.

### `slidev build [entrada]`

Genera una SPA alojable.

* `[entrada]` (`string`, por defecto: `slides.md`): ruta al Markdown de las diapositivas.

Opciones:

* `--watch`, `-w` (`boolean`, por defecto: `false`): observa cambios a las diapositivas.
* `--out`, `-o` (`string`, por defecto: `dist`): directorio de salida.
* `--base` (`string`, por defectopor defecto `/`): URL base (véase https://cli.vuejs.org/config/#publicpath)
* `--download` (`boolean`, por defecto: `false`): allow to download the slides as PDF inside the SPA.
=======
* `--port`, `-p` (`number`, default: `3030`): port number.
* `--open`, `-o` (`boolean`, default: `false`): open in browser.
* `--remote [password]` (`string`): listen to public host and enable remote control, if a value is passed then the presenter mode is private and only accessible by passing the given password in the URL query `password` parameter.
* `--bind` (`string`, default: `0.0.0.0`): specify which IP addresses the server should listen on in the remote mode.
* `--log` (`'error', 'warn', 'info', 'silent'`, default: `'warn'`): Log level.
* `--force`, `-f` (`boolean`, default: `false`): force the optimizer to ignore the cache and re-bundle.
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
* `--theme`, `-t` (`string`): override theme.

### `slidev export [entrada]`

Exporta diapositivas a PDF (u otro formato).

* `[entrada]` (`string`, por defecto: `slides.md`): ruta al Markdown de las diapositivas.

Opciones:

<<<<<<< HEAD
* `--output` (`string`, por defecto: usa `exportFilename` (véase https://sli.dev/custom/#frontmatter-configures) o usa`[entrada]-export`): ruta a la salida.
* `--base` (`'pdf', 'png', 'md'`, por defecto: `'pdf'`): formato de salida.
* `--timeout` (`number`, por defecto: `30000`): tiempo de espera para renderizar la impresión (véase https://playwright.dev/docs/api/class-page#page-goto).
=======
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
* `--format` (`'pdf', 'png', 'md'`, default: `'pdf'`): output format.
* `--timeout` (`number`, default: `30000`): timeout for rendering the print page (see https://playwright.dev/docs/api/class-page#page-goto).
>>>>>>> 4ee072e055e04965fad621e5941c6905ef2a2be0
* `--range` (`string`): page ranges to export (example: `'1,4-5,6'`).
* `--dark` (`boolean`, por defecto: `false`): export as dark theme.
* `--with-clicks`, `-c` (`boolean`, por defecto: `false`): export pages for every clicks (see https://sli.dev/guide/animations.html#click-animations).
* `--theme`, `-t` (`string`): override theme.

### `slidev format [entrada]`

Aplica formato al archivo de Markdown.

* `[entrada]` (`string`, por defecto: `slides.md`): ruta al Markdown de las diapositivas.

### `slidev theme [subcomando]`

Operaciones relacionadas con el tema.

Subcomandos:

* `eject [entrada]`: Eyecta el tema actual al sistema de archivos
  * `[entrada]` (`string`, por defecto: `slides.md`): ruta al Markdown de las diapositivas.
  * Opciones:
    * `--dir` (`string`, por defecto: `theme`): directorio de salida.
    * `--theme`, `-t` (`string`): sustituir tema.
