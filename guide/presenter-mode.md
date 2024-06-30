# Modo presentador

<<<<<<< HEAD
Haz clic en el botón <carbon-user-speaker class="inline-icon-btn"/> del panel de navegación, o visita `http://localhost:3030/presenter` manualmente para entrar en el modo presentador. Siempre que entres en el modo presentador, las demás instancias de la página se mantendrán automáticamente sincronizadas con el presentador.
=======
Click the <carbon-user-speaker class="inline-icon-btn"/> button in the navigation panel, or visit `http://localhost:3030/presenter` manually, to enter the presenter mode. To present, you'll want to open two browser windows, one for the presenter and one for the audience. Generally maximizing the slideshow window on your projector screen, then controlling it from your laptop's screen is how people present with Slidev.

Whenever you change slides in the presenter mode, all other page instances will automatically change as well, to stay in sync with the presenter.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

![](/screenshots/presenter-mode.png)

## Desactivación

El modo Presentador está activado por defecto.

Puedes desactivar esta función con la siguiente configuración:

```md
---
presenter: false
---
```

<<<<<<< HEAD
O puedes habilitarlo sólo para el modo `dev` o `build` estableciendo el modo que desees en la configuración:
=======
Alternately you can enable it only for `dev` or `build` modes by setting the mode you want in the config:

>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3
```md
---
presentador: dev
---
```
<<<<<<< HEAD
En ese caso el presentador sólo estará disponible cuando se ejecute `slidev` pero no cuando se ejecute `slidev build`.
=======

In that case the presenter will only be available when running `slidev` but not when running `slidev build`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

## Acceso remoto restringido

Puedes habilitar el acceso remoto a la presentación con `slidev --remote`.

<<<<<<< HEAD
En ese caso puede que quieras compartir las diapositivas con otras personas pero no que accedan al modo presentador para estropear tu presentación.

Para este escenario puedes proporcionar una contraseña para iniciar el servidor ejecutando `slidev --remote=tu_contraseña`.
=======
If you want to share your slides with other people but you don't want them to access the presenter mode (either because you're ashamed of your presenter notes, or because you don't want them to mess up your presentation), you can provide a password to protect the presenter server by running `slidev --remote=your_password`.
>>>>>>> 21fdadc17cd2018f65c637e5727de640db5036e3

En ese caso necesitarás proporcionar la contraseña cuando accedas a las rutas de `/presenter/*`.