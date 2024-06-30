# Configurar y ampliar el analizador sintáctico

Slidev analiza tu archivo de presentación (por ejemplo, `lides.md`) en tres pasos:

1. 1. Se realiza un paso de "preparación": el archivo se divide en diapositivas utilizando el separador `---`, y considerando los posibles bloques frontmatter.
2. Cada diapositiva se analiza con una biblioteca externa.
3. Slidev resuelve la propiedad especial frontmatter `src: ....`, que permite incluir otros archivos md.

## Analizador de Markdown

La configuración del analizador de Markdown utilizado en el paso 2 puede hacerse [configurando los plugins internos de Vite](/custom/config-vite#configure-internal-plugins).

## Preparser Extensions

> Available since v0.37.0.

:::warning
Importante: al modificar la configuración del preparador, es necesario detener e iniciar slidev de nuevo (reiniciarlo podría no ser suficiente).
:::

El preparador (paso 1 anterior) es altamente extensible y permite implementar sintaxis personalizadas para tus archivos md. Extender el preparador se considera **una característica avanzada** y es susceptible de romper [integraciones de editores](/guide/editors) debido a cambios implícitos en la sintaxis.

Para personalizarlo, crea un archivo `./setup/preparser.ts` con el siguiente contenido:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({ filepath, headmatter, mode }) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HOLA'
        }
      },
    }
  ]
})
```

<<<<<<< HEAD
Este ejemplo sustituye sistemáticamente cualquier línea `@@@` por una línea con `HOLA`. Ilustra la estructura de un fichero de configuración del preparador y algunos de los principales conceptos que implica el preparador:
- `definePreparserSetup` debe ser llamado con una función como parámetro.
- La función recibe la ruta del fichero (del fichero raíz de presentación) y el headmatter (del fichero md). Puedes utilizar esta información (por ejemplo, habilitar extensiones basadas en el archivo de presentación).
- La función debe devolver una lista de extensiones del preparador.
- Una extensión puede contener
  - una función `transformRawLines(lines)` que se ejecuta justo después de analizar la cabecera del fichero md y recibe una lista de todas las líneas (del fichero md). La función puede mutar la lista arbitrariamente.
  - una función `transformSlide(content, frontmatter)` que se ejecuta para cada diapositiva, justo después de dividir el archivo, y recibe el contenido de la diapositiva como una cadena y el frontmatter de la diapositiva como un objeto. La función puede mutar el frontmatter y debe devolver la cadena de contenido (posiblemente modificada, posiblemente `undefined` si no se han hecho modificaciones).
  - un `nombre`
=======
This example systematically replaces any `@@@` line by a line with `hello`. It illustrates the structure of a preparser configuration file and some of the main concepts the preparser involves:

- `definePreparserSetup` must be called with a function as parameter.
- The function receives the file path (of the root presentation file), the headmatter (from the md file) and, since v0.48.0, a mode (dev, build or export). It could use this information (e.g., enable extensions based on the presentation file or whether we are exporting a PDF).
- The function must return a list of preparser extensions.
- An extension can contain:
  - a `transformRawLines(lines)` function that runs just after parsing the headmatter of the md file and receives a list of all lines (from the md file). The function can mutate the list arbitrarily.
  - a `transformSlide(content, frontmatter)` function that is called for each slide, just after splitting the file, and receives the slide content as a string and the frontmatter of the slide as an object. The function can mutate the frontmatter and must return the content string (possibly modified, possibly `undefined` if no modifications have been done).
  - a `name`
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Ejemplo de extensiones del preparador

### Caso de uso 1: presentación de nivel superior con sintaxis compacta

Imagina una situación en la que (parte de) la presentación muestra principalmente imágenes de portada e incluye otros archivos md. Es posible que quieras una notación compacta en la que, por ejemplo, (parte de) `slides.md` sea como esto:

<!-- eslint-skip -->

```md
@cover: /nice.jpg
# Bienvenida
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
<<<<<<< HEAD
# ¿Alguna pregunta?
Hasta la próxima

=======
# Questions?
see you next time
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```

Para permitir estas sintaxis `@src:` y `@cover:`, crea un archivo `./setup/preparser.ts` con el siguiente contenido:

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(
              i,
              1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(
              i,
              1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              ''
            )
            continue
          }
          i++
        }
      }
    },
  ]
})
```

Y eso es todo.

<<<<<<< HEAD

=======
### Use case 2: using custom frontmatter to wrap slides
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

### Caso de uso 2: usar frontmatter personalizado para agrupar diapositivas

Imagina un caso en el que a menudo quieres escalar algunas de tus diapositivas pero sigues queriendo usar una variedad de diseños existentes, por lo que crear un nuevo diseño no sería adecuado.

Por ejemplo, podrías escribir tu `slides.md` como esto:

<!-- eslint-skip -->

```md
---
layout: quote
_scale: 0.75
---

# Bienvenida

> ¡Genial!

---
_scale: 4
---
# Pausa

---

# Ok

---
layout: center
_scale: 2.5
---
<<<<<<< HEAD
# ¿Alguna pregunta?
Nos vemos

=======
# Questions?
see you next time
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```

Aquí hemos utilizado un guión bajo en `_scale` para evitar posibles conflictos con las propiedades frontmatter existentes (de hecho, el caso de `scale`, sin guión bajo podría causar problemas).

<<<<<<< HEAD

Para manejar esta sintaxis `_scale: ...` en el frontmatter, crea un archivo `./setup/preparser.ts` con el siguiente contenido:
=======
To handle this `_scale: ...` syntax in the frontmatter, create a `./setup/preparser.ts` file with the following content:
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter._scale}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

Y eso es todo.
