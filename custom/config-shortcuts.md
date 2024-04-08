# Configurar atajos

> Disponible desde v0.20

> Desde la v0.35.6 (no incluida), puedes decidir qué atajos conservar (veáse `...base,` más abajo).

<Environment type="client" />
Crea `./setup/shortcuts.ts` con el siguiente contenido:
=======
## Primeros pasos

Crea `./setup/shortcuts.ts` con el siguiente contenido:

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // mantener los atajos (shortcuts) existentes
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

La función de configuración recibe un objeto con algunos métodos de navegación, y devuelve un array que contiene la configuración de atajos. Consulta las definiciones de tipo para más detalles.

Echa un vistazo a [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) para más detalles sobre eventos del teclado.

## Vinculación avanzada de teclas

El tipo `key` sólo permite cadenas, pero puedes enlazar múltiples letras utilizando la siguiente convención:

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

## Funciones de navegación avanzadas

Las operaciones de navegación `nav` te permiten acceder a algunas funcionalidades más allá de las básicas _siguiente diapositiva_ o _diapositiva anterior_. Consulta los siguientes ejemplos:


```ts
import { NavOperations, defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
<<<<<<< HEAD
      
      // Establece el atajo de teclado `e` para usarlo como marcador
      // o una especie de acceso rápido, para navegar específicamente a
      // diapositiva número 42
=======

      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

Consulta [useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/) para más detalles sobre el evento de tecla pulsada.