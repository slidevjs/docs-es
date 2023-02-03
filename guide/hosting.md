<<<<<<< HEAD
# Alojamiento estático
=======

# Static Hosting
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

## Construye Single Page Applications (SPA)

Puedes convertir las diapositivas en una SPA:

```bash
$ slidev build
```

La app generada se encontrará en `dist/`, que podrás alojarla en [GitHub Pages](https://pages.github.com/), [Netlify](https://netlify.app/), [Vercel](https://vercel.com/), o donde quieras. Ahora puedes presentar tus diapositivas con el resto del mundo con tan solo un link.

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

```md
---
download: 'https://mipagina.com/mi-charla.pdf'
---
```

## Ejemplos

Aquí hay algunos ejemplos de SPAs exportadas:

- [Plantilla de Inicio](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) por [Anthony Fu](https://github.com/antfu)

Si quieres ver más, echa un vistazo a la [galería](/showcases).

## Alojamiento

<<<<<<< HEAD
Recomendamos usar `npm init slidev@lastest` para generar tu proyecto, que contiene los archivos de configuración necesarios para servicios de alojamiento más populares.
=======
We recommend to use `npm init slidev@latest` to scaffold your project, which contains the necessary configuration files for hosting services out-of-the-box.
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

<<<<<<< HEAD
Crea `.github/workflows/deploy.yml` con el siguiente contenido para automatizar el despliegue de diapositivas con Github Pages mediante Github Actions.
=======
To deploy your slides on GitHub Pages:
- upload all the files of the project in your repo (i.e. named `name_of_repo`)
- create `.github/workflows/deploy.yml` with following content to deploy your slides to GitHub Pages via GitHub Actions. In this file, replace `<name_of_repo>` with `name_of_repo`.
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a

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
>>>>>>> 38e076f9a7c55cbd4d7b58579eecb54e77e9723a
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
- In your repository, go to Settings>Pages. Under "Build and deployment", select "Deploy from a branch", select "gh-pages" and "root". Click on save.
- Finally, after all workflows are executed, a link to the slides should appear under Settings>Pages.
