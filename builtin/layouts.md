# Plantillas

## Plantillas integradas

> As themes may override layouts behaviour, the best way to know exactly the usage, parameters and examples is referring their documentation.


### `center`

Displays the content in the middle of the screen.

### `cover`

Used to display the cover page for the presentation, may contain the presentation title, contextualization, etc.

### `default`

The most basic layout, to display any kind of content.

### `end`

The final page for the presentation.

### `fact`

To show some fact or data with a lot of prominence on the screen.

### `full`

Use all the space of the screen to display the content.

### `image-left`

Shows an image on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: image-left

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

Shows an image on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

Shows an image as the main content of the page.

#### Usage

```yaml
---
layout: image

# the image source
image: ./path/to/the/image
---
```


### `iframe-left`

Shows a web page on the left side of the screen, the content will be placed on the right side.

#### Usage

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

Shows a web page on the right side of the screen, the content will be placed on the left side.

#### Usage

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

Shows a web page as the main content of the page.

#### Usage

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

To introduce the presentation, usually with the presentation title, a short description, the author, etc.

### `none`

A layout without any existent styling.

### `quote`

To display a quotation with prominience.

### `section`

Used to mark the beginning of a new presentation section.

### `statement`

Make an affirmation/statement as the main page content.

### `two-cols`

Separates the page content in two columns.

#### Usage


```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

<<<<<<< HEAD
## Plantillas personalizadas
=======
### `two-cols-header`

Separates the upper and lower lines of the page content, and the second line separates the left and right columns.

#### Usage


```md
---
layout: two-cols-header
---

This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```

## Custom Layouts
>>>>>>> 9b64ca249c101e7e425d7ca81aebba12658b9b97

Crea un directorio `layouts/` en la raíz de tu proyecto, y simplemente pon los componentes de la plantilla (layout) Vue en él.

Lee más en la sección de [personalización](/custom/directory-structure#layouts).

## Plantillas proveídas por temas

Los temas pueden proveer plantillas o reemplazar aquellas existentes. Por favor, lea su documentación para aquello que provean. 
