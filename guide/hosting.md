# Alojamiento estático

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

Slidev generará un archivo PDF junto al resto de archivos, y un botón de descargar se mostrará en la SPA.
También puedes dar un link personalizado, en tal caso se omitirá la generación del PDF.

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

Después, en tu panel de Netlify crea un nuevo sitio con esos archivos.

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

Después, en tu panel de Vercel crea un nuevo sitio con esos archivos.

## GitHub Pages

- [GitHub Pages](https://pages.github.com/)

Crea `.github/workflows/deploy.yml` con el siguiente contenido para automatizar el despliegue de diapositivas con Github Pages mediante Github Actions.

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
      - name: Construyendo
        run: npm run build
      - name: Desplegando
        uses: crazy-max/ghaction-github-pages@v2
        with:
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
