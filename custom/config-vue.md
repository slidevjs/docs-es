# Configurar Vue

<Environment type="client" />

Slidev utiliza [Vue 3](https://v3.vuejs.org/) para renderizar la aplicación en el lado del cliente. Puedes extender la aplicación para añadir plugins o configuraciones personalizadas.

Crea `./setup/main.ts` con el siguiente contenido:

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

Esto también podría ser utilizado como la entrada principal de tu aplicación Slidev para hacer algunas inicializaciones antes de que la aplicación se inicie.

Más información: [Vue Application API](https://v3.vuejs.org/api/application-api.html#component).
