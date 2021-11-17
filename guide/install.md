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

Consulta el [repositorio de slidevjs/container](https://github.com/slidevjs/container) para más detalles.
