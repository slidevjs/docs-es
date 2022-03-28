# Componentes

## Componentes integrados

> La documentación de esta sección está todavía en progreso. Mientras tanto, puedes echar un vistazo al [código fuente](https://github.com/slidevjs/slidev/blob/main/packages/client/builtin) directamente.

### `TOC`

Inserta una tabla de contenidos (TOC).

Los títulos y sus niveles se corresponden al primer elemento del título de cada diapositiva.

Puedes sobreescribir este comportamiento en cada diapositiva usando la sintaxis de frontmatter:
```yml
---
title: Mi presentación
level: 2
---
```
O si prefieres que la diapositiva no aparezca en la tabla de contenido, puedes ocultarla:
```yml
---
hideInToc: true
---
```

#### Uso
~~~md
<Toc />
~~~

Parámetros

* `columns` (`string | number`, por defecto: `1`) El número de columnas a mostrar
* `maxDepth` (`string | number`, por defecto: `Infinity`): La profundidad máxima a mostrar
* `minDepth` (`string | number`, por defecto: `1`): La profundidad mínima a mostrar
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, por defecto: `'all'`):
  * `'all'`: Muestra todos los items.
  * `'onlyCurrentTree'`: Muestra solo los items que están en el árbol actual (el ítem activo, su padre y sus hijos)
  * `'onlySiblings'`: Muestra solo los items que están en el árbol actual y sus hijos directos.

## Componentes personalizados

Crea un directorio`components/`en la raíz de tu proyecto, y simplemente pon los componentes de la plantilla Vue bajo él; entonces podrás usarlo con el mismo nombre que en tu archivo markdown.

Lea más en la sección de [personalización](/custom/directory-structure#components).

## Componentes proveídos por temas


Los temas pueden también pueden proveer sus propios componentes. Por favor, lea su documentación para aquello que provean. 


Lea más en la sección de [estructura del contenido](/custom/directory-structure).
