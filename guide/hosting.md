<<<<<<< HEAD
# Alojamiento estático
=======

# Static Hosting
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

## Construye Single Page Applications (SPA)

Puedes convertir las diapositivas en una SPA:

```bash
$ slidev build
```

<<<<<<< HEAD
La app generada se encontrará en `dist/`, que podrás alojarla en [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), o donde quieras. Ahora puedes presentar tus diapositivas con el resto del mundo con tan solo un link.
=======
The generated application will be available under `dist/`.

You can test the generated build using a web server (Apache, NGINX, Caddy...etc.) or in the project you can directly run: `npx vite preview`.

Then you can host it on [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), or whatever you want. Now you can share your slides with the rest of the world with a single link.
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

### Ruta base

Para desplegar tus diapositivas bajo sub-rutas, necesitarás usar la opción `--base`. Por ejemplo:

```bash
$ slidev build --base /charlas/mi-super-charla/
```

Revisa la [documentación de Vite](https://vitejs.dev/guide/build.html#public-base-path) para más detalles.

### PDF descargable

Puedes generar un PDF descargable para tus usuarios con esta configuración:

```md
---
download: true
---
```

<<<<<<< HEAD
Slidev generará un archivo PDF junto al resto de archivos, y un botón de descargar se mostrará en la SPA.
También puedes dar un link personalizado, en tal caso se omitirá la generación del PDF.
=======
Slidev will generate a PDF file along with the build, and a download button will be displayed in the SPA.

You can also provide a custom URL for the PDF. In that case, the rendering process will be skipped.
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

```md
---
download: 'https://mipagina.com/mi-charla.pdf'
---
```

<<<<<<< HEAD
## Ejemplos
=======
This can also be done with the CLI option `--download` (`boolean` only).

```bash
$ slidev build --download
```

When using the download option, you can also provide the export options:

* By using [CLI export options](/guide/exporting.html)
* Or [frontmatter export options](/custom/#frontmatter-configures)

### Output directory

You can change the output directory using `--out`.

```bash
$ slidev build --dir my-build-folder
```

### Watch mode

By passing the `--watch` option the build will run in watch mode and will rebuild anytime the source changes.

```bash
$ slidev build --watch
```

## Examples
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

Aquí hay algunos ejemplos de SPAs exportadas:

- [Plantilla de Inicio](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) por [Anthony Fu](https://github.com/antfu)

Si quieres ver más, echa un vistazo a la [galería](/showcases).

## Alojamiento

<<<<<<< HEAD
Recomendamos usar `npm init slidev@lastest` para generar tu proyecto, que contiene los archivos de configuración necesarios para servicios de alojamiento más populares.
=======
We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

### Netlify

- [Netlify](https://netlify.com/)

Crea `netlify.toml` en tu carpeta con el siguiente contenido:

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

<<<<<<< HEAD
Después, en tu panel de Netlify crea un nuevo sitio con esos archivos.
=======
Then go to your Netlify dashboard and create a new site with the repository.
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

### Vercel

- [Vercel](https://vercel.com/)

Crea `vercel.json` en tu proyecto con la siguiente configuración.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

<<<<<<< HEAD
Después, en tu panel de Vercel crea un nuevo sitio con esos archivos.
=======
Then go to your Vercel dashboard and create a new site with the repository.
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
Crea `.github/workflows/deploy.yml` con el siguiente contenido para automatizar el despliegue de diapositivas con Github Pages mediante Github Actions.
=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`.
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624

```yaml
name: Desplegar páginas
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - name: Instalando dependencias
        run: npm install
<<<<<<< HEAD
      - name: Construyendo
        run: npm run build
      - name: Desplegando
=======
      - name: Install slidev
        run:  npm i -g @slidev/cli
      - name: Build
        run: slidev build --base <name_of_repo>
      - name: Deploy pages
>>>>>>> b66a4ce1191b87de4c77e9317fce3a7c22d6c624
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Deploy from a branch", select "gh-pages" and "root". Click on save.
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
