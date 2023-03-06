# Modo presentador

Haz clic en el botón <carbon-user-speaker class="inline-icon-btn"/> del panel de navegación, o visita http://localhost:3030/presenter manualmente, para entrar en el modo presentador. Siempre que entres en el modo presentador, las demás instancias de la página se mantendrán automáticamente sincronizadas con el presentador.

![](/screenshots/presenter-mode.png)

## Desactivación

El modo Presentador está activado por defecto.

Puedes desactivar esta función con la siguiente configuración:

```md
---
presenter: false
---
```

O puedes habilitarlo sólo para el modo `dev` o `build` estableciendo el modo que desees en la configuración:
```md
---
presentador: dev
---
```
En ese caso el presentador sólo estará disponible cuando se ejecute `slidev` pero no cuando se ejecute `slidev build`.

## Acceso remoto restringido

Puedes habilitar el acceso remoto a la presentación con `slidev --remote`.

En ese caso puede que quieras compartir las diapositivas con otras personas pero no que accedan al modo presentador para estropear tu presentación.

Para este escenario puedes proporcionar una contraseña para iniciar el servidor ejecutando `slidev --remote=tu_contraseña`.

En ese caso necesitarás proporcionar la contraseña cuando accedas a las rutas de `/presenter/*`.