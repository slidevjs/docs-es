# Configurar Vite

<Environment type="node" />

Slidev está potenciado por [Vite](http://vitejs.dev/). Esto significa que puedes aprovechar el gran sistema de plugins de Vite para personalizar aún más tus diapositivas.

`vite.config.ts` será respetado si tienes uno.

Slidev tiene los siguientes plugins preconfigurados:

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)


Más información sobre las [preconfiguraciones aquí](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts).

## Configurar plug-ins internos

> Disponible desde v0.21

Para configurar los plug-ins internos listados más arriba, crea `vite.config.ts` con el siguiente contenido. Por favor, ten en cuenta que Slidev tiene algunas opciones de preconfiguración para esos plugins, haciendo esto podría desconfigurar alguno de ellos, lo que podría causar que la aplicación se rompa. Por favor, trata esto como **una característica avanzada**, asegúrate de saber lo que estás haciendo antes de seguir adelante.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* opciones de vue */
    },
    markdown: {
      /* opciones de markdown-it */
      markdownItSetup(md) {
        /* plugins de markdown-it personalizados */
        md.use(/* ... */)
      },
    },
    /* opciones para otros plugins */
  },
})
```

Echa un vistazo a las [declaraciones de tipos](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50) para más opciones.
