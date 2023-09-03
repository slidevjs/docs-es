# Usar un tema

Cambiar el tema en Slidev es sorprendentemente fácil. Todo lo que necesitas hacer es añadir el campo `theme:` en tu frontmatter.

```yaml
---
theme: seriph
---
```

<<<<<<< HEAD
Puedes iniciar el servidor, que te preguntará instalar el tema automáticamente
=======
> **Note**
> To install a theme from a scoped package, you will have to give the full namespace e.g `@organization/slidev-theme-name`

You can start the server, which will prompt you to install the theme automatically
>>>>>>> 6e0af1f2744db999dfeb58e8528478dea41a1240

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

o instalar el tema manualmente a través de

```bash
$ npm install @slidev/theme-seriph
```

Y eso es todo, ¡disfruta del nuevo tema! Para más detalles sobre el uso, puedes consultar el *README* del tema.

¿Quieres compartir tu tema? Aprende sobre [cómo escribir un tema](/themes/write-a-theme).

## Eyectar tema

Si quieres tener el control total del tema actual, puedes usar **eject** en tu sistema de archivos local y modificarlo como quieras. Ejecutando el siguiente comando:

```bash
$ slidev theme eject
```

Eyectará el tema que está usando actualmente en `./theme`, y cambiará su frontmatter a 

```yaml
---
theme: ./theme
---
```

Esto también podría ser útil si quieres hacer un tema basado en uno existente. Si lo haces, recuerda mencionar el tema original y al autor :)

## Tema local

Como probablemente descubriste en la sección anterior, puedes tener un tema local para tu proyecto. Teniendo una **ruta relativa** en su campo de tema:

```yaml
---
theme: ./path/to/theme
---
```

Revisa [cómo escribir un tema](/themes/write-a-theme) para más detalles.