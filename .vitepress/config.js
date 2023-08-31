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
    text: 'Alojamiento estático',
    link: '/guide/hosting',
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
    text: 'Dibujos y anotaciones',
    link: '/guide/drawing',
  },
  {
    text: 'Integraciones del editor',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
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

const Addon = [
  {
    text: 'Usar addons',
    link: '/addons/use',
  },
  {
    text: 'Escribir un addon',
    link: '/addons/write-an-addon',
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
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
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
    text: 'Fuentes',
    link: '/custom/fonts',
  },
  {
    text: 'Resaltadores',
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
<<<<<<< HEAD
    text: 'Configurar Windi CSS',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
  },
  {
    text: 'Configure Windi CSS',
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054
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
  {
    text: 'Configurar Parser',
    link: '/custom/config-parser',
  },
  {
    text: 'Configure Shortcuts',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Contexto global de Vue',
    link: '/custom/vue-context',
  },
  {
    text: 'Capas globales',
    link: '/custom/global-layers',
  }
]

const BuiltIn = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Resources = [
  {
    text: 'Galería',
    link: '/showcases',
  },
  {
    text: 'Recursos de aprendizaje',
    link: '/resources/learning',
  },
  {
    text: 'Portadas seleccionadas',
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
    text: 'Addons',
    children: Addon,
  },
  {
    text: 'Personalizaciones',
    children: Customizations,
  },
  {
<<<<<<< HEAD
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
=======
    text: 'Built-in',
    children: BuiltIn,
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054
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
    repo: 'slidevjs/docs-es',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sugerir cambios a esta página',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:es']
      }
    },

    nav: [
      {
        text: 'Guía',
        items: Guide,
      },
      {
        text: 'Temas',
        items: Theme,
      },
      {
        text: 'Addons',
        items: Addon,
      },
      {
        text: 'Personalizar',
        items: Customizations,
      },
      {
<<<<<<< HEAD
        text: 'Recursos',
=======
        text: 'Built-in',
        items: BuiltIn,
      },
      {
        text: 'Resources',
>>>>>>> 8024ec4e94d2cd81bc6d4a3efee822dde30d9054
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
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
