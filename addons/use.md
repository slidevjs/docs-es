# Usar un addon

Los _addons_ son sets de componentes, layouts, estilos, configuración ... etc. que puedes usar en tu presentación.

Son bastante similares a [los temas]](/themes/use), pero en líneas generales:

<<<<<<< HEAD
* No afectan a los estilos globales de tus diapositivas.
* Puedes usar múltiples addons en tu presentación.
=======
- they don't affect the global styles of your slides
- you can use multiple addons in one presentation
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f

Para usar un addon, debes instalarlo manualmente:

```bash
$ npm install [slidev-addon-1] [slidev-addon-2]
```

Y luego declarar tus addons en el front-matter de tus diapositivas:

```yaml
---
addons:
  - slidev-addon-1
  - slidev-addon-2
---
```

O en tu `package.json`:

```json
// package.json
{
  "slidev": {
    "addons": [
<<<<<<< HEAD
      "slidev-addon-1",
      "slidev-addon-2",
=======
      "slidev-addon-package1",
      "slidev-addon-package2"
>>>>>>> 69e1142c6f07cb04fb7fea7f396de60cd1f0538f
    ]
  }
}
```
