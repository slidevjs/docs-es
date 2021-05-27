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

Sigue las indicaciones y se abrirá la presentación en http://localhost:3030/ automáticamente para ti.

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
> echo 'shamefully-flatten=true' >> .npmrc
> ```

<<<<<<< HEAD
## Instalación en Docker
Si necesitas una forma rápida de ejecutar una presentación con contenedores, puedes utilizar la imagen de [docker](https://hub.docker.com/r/stig124/slidev) preconstruida y mantenida por [stig124](https://github.com/Stig124), o construir la tuya propia.
=======
## Install Globally

From v0.14.0, we shipped **experimental** global installation support. You can install it with the following command 

```bash
$ npm i -g @slidev/cli
```

And then use `slidev` everywhere without creating a project every time.

```bash
$ slidev
```

This command will also try to use local `@slidev/cli` if it has been found in the `node_modules`.

## Install on Docker
>>>>>>> 2725558a0fdb273102dde01cb9b3cfb80a5a7b43

Consulta el [repositorio de slidevjs/container](https://github.com/slidevjs/container) para más detalles.
