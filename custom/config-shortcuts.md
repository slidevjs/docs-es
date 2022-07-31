# Configurar atajos

> Disponible desde v0.20

<Environment type="client" />

Crea `./setup/shortcuts.ts` con el siguiente contenido:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

Con esta configuración, puedes dar ajustes personalizados a los atajos mencionados en [Navegación](/guide/navigation#navigation-bar). La configuración anterior vincula la siguiente animación o diapositiva a <kbd>enter</kbd> y la animación o diapositiva anterior a <kbd>retroceso</kbd>.

La función de configuración recibe un objeto con algunos métodos de navegación, y devuelve un array que contiene alguna configuración de accesos directos. Consulta las definiciones de tipo para más detalles.

<<<<<<< HEAD
Echa un vistazo a [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) para más detalles sobre el evento de tecla pulsada.
=======
The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> e385300710ea3ef7a726c926b1933fd80d40744e
