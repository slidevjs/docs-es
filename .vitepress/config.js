// @ts-check

const Guide = [
  {
    text: 'Por qué Slidev',
    link: '/guide/why',
  },
  {
    text: 'Primeros pasos',
    link: '/guide/',
  },
  {
    text: 'Instalación',
    link: '/guide/install',
  },
  {
    text: 'Sintaxis de Markdown',
    link: '/guide/syntax',
  },
  {
    text: 'Navegación',
    link: '/guide/navigation',
  },
  {
    text: 'Animaciones',
    link: '/guide/animations',
  },
  {
    text: 'Exportando',
    link: '/guide/exporting',
  },
  {
    text: 'Grabar una presentación',
    link: '/guide/recording',
  },
  {
    text: 'Modo presentador',
    link: '/guide/presenter-mode',
  },
  {
    text: 'Integraciones del editor',
    link: '/guide/editors',
  },
]

const Theme = [
  {
    text: 'Usar un tema',
    link: '/themes/use',
  },
  {
    text: 'Galería de temas',
    link: '/themes/gallery',
  },
  {
    text: 'Escribir un tema',
    link: '/themes/write-a-theme',
  },
]

const Translations = [
  {
    text: 'Español',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: 'Personalizaciones',
    link: '/custom/',
  },
  {
    text: 'Estructura del directorio',
    link: '/custom/directory-structure',
  },
  {
    text: 'Highlighters',
    link: '/custom/highlighters',
  },
  {
    text: 'Configurar Vue',
    link: '/custom/config-vue',
  },
  {
    text: 'Configurar Vite',
    link: '/custom/config-vite',
  },
  {
    text: 'Configurar Windi CSS',
    link: '/custom/config-windicss',
  },
  {
    text: 'Configurar Monaco',
    link: '/custom/config-monaco',
  },
  {
    text: 'Configurar KaTeX',
    link: '/custom/config-katex',
  },
  {
    text: 'Configurar Mermaid',
    link: '/custom/config-mermaid',
  },
]

const Resources = [
  {
    text: 'Showcases',
    link: '/showcases',
  },
  {
    text: 'Curated Covers',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: 'Guía',
    children: Guide,
  },
  {
    text: 'Temas',
    children: Theme,
  },
  {
    text: 'Personalizaciones',
    children: Customizations,
  },
  {
    text: 'Integrado',
    children: [
      {
        text: 'Componentes',
        link: '/builtin/components',
      },
      {
        text: 'Plantillas',
        link: '/builtin/layouts',
      },
    ],
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: 'Presentaciones de diapositivas para desarrolladores',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentaciones de diapositivas para desarrolladores' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs-es', // TODO - Doesn't really work yet 
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sugerir cambios a esta página',

    nav: [
      {
        text: 'Guía',
        items: Guide,
      },
      {
        text: 'Tema',
        items: Theme,
      },
      {
        text: 'Personalizar',
        items: Customizations,
      },
      {
        text: 'Recursos',
        items: Resources,
      },
      {
        text: 'Español',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
