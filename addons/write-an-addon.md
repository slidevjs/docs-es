# Escribir un addon

> Disponible desde v0.32.1

## Capacidad

Un addon puede permitirte lo siguiente:

- Estilos globales (úsalo con cautela puesto que es el enfoque de [los temas](/themes/use)
- Proporcionar layouts personalizados o sustituye los existentes
- Proporcionar componentes personalizados o sustituir los existentes
- Extender las configuraciones CSS de Windi
- Configurar herramientas como Monaco y Prism


## Convenciones

Los addons se publican en el registro de npm, y deben seguir las siguientes convenciones:

- El nombre del paquete debe empezar por `slidev-addon-`, por ejemplo: `slidev-addon-awesome`.
- Añade `slidev-addon` y `slidev` en el campo `keywords` de tu `package.json`.

## Configuración

### Inicialización

Para crear tu addon, empieza por crear un directorio con un archivo `package.json` (puedes usar `npm init`).

A continuación, instala las dependencias de slidev:

```bash
$ npm install -D @slidev/cli
```

### Entorno de pruebas

Para crear un entorno de pruebas, puedes crear un archivo llamado `ejemplo.md` que tenga algo de contenido.

Y, opcionalmente, puedes añadir varios script a `packages.json`:

```json
// package.json
{
  "scripts": {
    "dev": "slidev ejemplo.md",
    "build": "slidev build ejemplo.md",
    "export": "slidev export ejemplo.md",
    "screenshot": "slidev export ejemplo.md --format png"
  }
}
```

Para publicar tu addon, simplemente ejecuta `npm publish` y listo. No es necesario ningún proceso de compilación (lo que significa que puedes publicar directamente los archivos `.vue` y `.ts`, Slidev es lo suficientemente inteligente como para entenderlos).

Recuerda consultar [los documentos para las convenciones de nomenclatura](/custom/). 

## Metadatos del addon

### Versión de Slidev

Si el addon depende de una característica específica de Slidev que se ha introducido recientemente, puedes establecer la versión mínima de Slidev necesaria para que tu addon funcione correctamente:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.32.1"
  }
}
```

Si los usuarios utilizan versiones anteriores de Slidev, se producirá un error.
