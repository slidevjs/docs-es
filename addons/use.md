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
      "slidev-addon-1",
      "slidev-addon-2",
    ]
  }
}
```
