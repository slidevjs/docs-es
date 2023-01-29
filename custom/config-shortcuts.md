# Configurar atajos

> Disponible desde v0.20

> Since v0.35.6 (excluded), you decide which base shortcuts to keep (see `...base,` below).

<Environment type="client" />

<<<<<<< HEAD
Crea `./setup/shortcuts.ts` con el siguiente contenido:
=======
## Getting started

Create `./setup/shortcuts.ts` with the following content:
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
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
## Advanced key binding

The `key` type only allows for strings, but you can still bind multiple keys by using following convention:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

## Advanced navigation features

The `nav` navigation operations allows you to access some functionalities than basic _next slide_ or _previous slide_. See the following for use-cases:

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
      
      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Refer to [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) for more details about key pressed event.
>>>>>>> 2e53e8c41664c5aa920ca84e738e95c8a05fb349
