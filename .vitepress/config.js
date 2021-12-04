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
<<<<<<< HEAD
    text: 'Grabar una presentación',
=======
    text: 'Static Hosting',
    link: '/guide/hosting',
  },
  {
    text: 'Record Presentation',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
    link: '/guide/recording',
  },
  {
    text: 'Modo presentador',
    link: '/guide/presenter-mode',
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    text: 'Integraciones del editor',
=======
    text: 'Drawing & Annonations',
=======
    text: 'Drawing & Annotations',
>>>>>>> c393c03ca6c46af4a218f37db04bc399bde16088
    link: '/guide/drawing',
  },
  {
    text: 'Editor Integrations',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
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
  {
    text: 'Configure Shortcuts',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue Global Context',
    link: '/custom/vue-context',
  },
  {
    text: 'Global Layers',
    link: '/custom/global-layers',
  }
]

const Resources = [
  {
    text: 'Galería',
    link: '/showcases',
  },
  {
<<<<<<< HEAD
    text: 'Portadas seleccionadas',
=======
    text: 'Learning Resources',
    link: '/resources/learning',
  },
  {
    text: 'Curated Covers',
>>>>>>> ee7ae42035591cb6565a72f5217129c670a59b0c
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
    repo: 'slidevjs/docs-es',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Sugerir cambios a esta página',

    algolia: {
      apiKey: '1a5c5a504139c58f428974c78c55291d',
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
