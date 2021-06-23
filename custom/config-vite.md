# Configurar Vite

<Environment type="node" />

Slidev es impulsado por [Vite](http://vitejs.dev/) detrás de las escenas. Esto significa que puedes aprovechar el gran sistema de plugins de Vite para personalizar aún más tus diapositivas.

`vite.config.ts` será respetado si tienes uno.

Slidev tiene los siguientes plugins preconfigurados:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [vite-plugin-md](https://github.com/antfu/vite-plugin-md)
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [vite-plugin-icons](https://github.com/antfu/vite-plugin-icons)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)

<<<<<<< HEAD
Más información sobre las [preconfiguraciones aquí](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).
=======
Learn more about the [pre-configurations here](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configure Internal Plugins

> Available since v0.21

To configure the built-in plugins list above, create `vite.config.ts` with the following content. Please note Slidev has some preconfigure options for those plugins, this usage will override some of them, which could potentially cause the app to break. Please treat this as **an advanced feature**, make sure you know what you are doing before moving on.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

See the [type declarations](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) for more options.
>>>>>>> 661373b820986b8c869419aa33284cc0c0cfb3b1
