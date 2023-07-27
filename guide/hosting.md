# Alojamiento estático

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
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

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

Slidev generará un archivo PDF junto al resto de archivos, y un botón de descargar se mostrará en la SPA.

También puedes dar un link personalizado para el PDF, en tal caso se omitirá generarlo.

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
$ slidev build --out my-build-folder
```

### Watch mode

By passing the `--watch` option the build will run in watch mode and will rebuild anytime the source changes.

```bash
$ slidev build --watch
```

### Multiple entries

You can also build multiple slides at once.

```bash
$ slidev build slides1.md slides1.md
```

Or

```bash
$ slidev build *.md
```

In this case, each input file will generate a folder containing the build in the output directory.

## Examples
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887

Aquí hay algunos ejemplos de SPAs exportadas:

- [Plantilla de Inicio](https://sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) por [Anthony Fu](https://github.com/antfu)

Si quieres ver más, echa un vistazo a la [galería](/showcases).

## Alojamiento

Recomendamos usar `npm init slidev@lastest` para generar tu proyecto, que contiene los archivos de configuración necesarios para servicios de alojamiento más populares.

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

Después crea un sitio en Netlify y enlázalo al repositorio.
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

Después, en tu panel de Vercel crea un nuevo sitio enlazado al repositorio.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Paa desplegar el proyecto en Github Pages:
- Sube todos los archivos al repositorio
- Crea `.github/workflows/deploy.yml` con el siguiente contenido para automatizar el despliegue de diapositivas con Github Pages mediante Github Actions. En este archivo, reeemplaza `<nombre_del_repo>` como corresponda.

```yaml
<<<<<<< HEAD
name: Desplegar páginas
on: push
=======
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887
jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
<<<<<<< HEAD
          node-version: '14'
      - name: Instalando dependencias
        run: npm i -g @slidev/cli
      - name: Construyendo
        run: npm run build --base <nombre_del_repo>
      - name: Desplegando
        uses: crazy-max/ghaction-github-pages@v2
=======
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Install slidev
        run:  npm i -g @slidev/cli

      - name: Build
        run: slidev build --base <name_of_repo>

      - uses: actions/configure-pages@v3

      - uses: actions/upload-pages-artifact@v1
>>>>>>> cd758d99f59b0813a49eb6fe4bb3f07e1b2b4887
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
```
- En tu repositorio, ve a "Settings>Pages". En "Build and deployment", selecciona "Deploy from a branch", selecciona "gh-pages" y "root". Haz clic en Guardar.
- Por último, una vez se ejecute el CI de Github Pages, debería aparecer un enlace a las diapositivas en Settings>Pages.
