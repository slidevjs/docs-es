# Usar un addon

Los _addons_ son sets de componentes, layouts, estilos, configuración ... etc. que puedes usar en tu presentación.

Son bastante similares a [los temas]](/themes/use), pero en líneas generales:

* No afectan a los estilos globales de tus diapositivas.
* Puedes usar múltiples addons en tu presentación.

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
>>>>>>> 55df176a16c5693491d5823c68f1af798e1f718f
    ]
  }
}
```
