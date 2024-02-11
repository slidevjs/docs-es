import type { DefaultTheme } from 'vitepress'
import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import vite from '../vite.config'

const CURRENT_VERSION = '0.47.1'

const Guide: DefaultTheme.NavItemWithLink[] = [
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

const BuiltIn: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Components',
    link: '/builtin/components',
  },
  {
    text: 'Layouts',
    link: '/builtin/layouts',
  },
]

const Theme: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
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

const Addon: DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Usar addons',
    link: '/addons/use',
  },
  {
    text: 'Escribir un addon',
    link: '/addons/write-an-addon',
  },
]

<<<<<<< HEAD:.vitepress/config.js
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
=======
const Customizations: (DefaultTheme.NavItemWithLink | DefaultTheme.NavItemChildren)[] = [
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
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
<<<<<<< HEAD:.vitepress/config.js
    text: 'Configurar Windi CSS',
    link: '/custom/config-windicss',
=======
    text: 'Configure UnoCSS',
    link: '/custom/config-unocss',
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
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
  },
]

const Resources: DefaultTheme.NavItemWithLink[] = [
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

const slidebars: DefaultTheme.SidebarItem[] = [
  {
<<<<<<< HEAD:.vitepress/config.js
    text: 'Guía',
    children: Guide,
  },
  {
    text: 'Temas',
    children: Theme,
=======
    text: 'Guide',
    items: Guide,
  },
  {
    text: 'Themes',
    items: Theme,
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
  },
  {
    text: 'Addons',
    items: Addon,
  },
  {
<<<<<<< HEAD:.vitepress/config.js
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
=======
    text: 'Customizations',
    items: Customizations,
  },
  {
    text: 'Built-in',
    items: BuiltIn,
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
  },
]

export default defineConfig({
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
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    async shikiSetup(shiki) {
      await shiki.loadLanguage(
        'html',
        'xml',
        'vue',
        'markdown',
      )
    },
    codeTransformers: [
      transformerTwoslash(),
    ],
  },
  cleanUrls: true,
  themeConfig: {
<<<<<<< HEAD:.vitepress/config.js
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
=======
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/slidevjs/docs/edit/main/:path',
      text: 'Suggest changes to this page',
    },

    search: {
      provider: 'local',
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
    },

    nav: [
      {
        text: 'Guía',
        items: Guide,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
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
=======
        text: 'Theme',
        items: [
          ...Theme,
          {
            text: 'Built-in',
            items: BuiltIn,
          },
        ],
      },
      {
        text: 'Customize',
        items: [
          ...Customizations,
          {
            text: 'Addon',
            items: Addon,
          },
        ],
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
      },
      {
        text: 'Recursos',
        items: Resources,
      },
      {
<<<<<<< HEAD:.vitepress/config.js
        text: 'Español',
        items: Translations,
=======
        text: `v${CURRENT_VERSION}`,
        items: [
          { text: 'Release Notes', link: 'https://github.com/slidevjs/slidev/releases' },
        ],
>>>>>>> dbfb0168dc2a10c37d04f991ec135a402b411f02:.vitepress/config.ts
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/slidevjs/slidev' },
      { icon: 'twitter', link: 'https://twitter.com/slidevjs' },
      { icon: 'discord', link: 'https://chat.sli.dev' },
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

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020 Anthony Fu.',
    },
  },

  locales: {
    root: {
      label: 'English',
    },
    zh: {
      label: '简体中文',
      link: 'https://cn.sli.dev/',
    },
    fr: {
      label: 'Français',
      link: 'https://fr.sli.dev/',
    },
    es: {
      label: 'Español',
      link: 'https://es.sli.dev/',
    },
    ru: {
      label: 'Русский',
      link: 'https://ru.sli.dev/',
    },
    vn: {
      label: 'Việt Nam',
      link: 'https://vn.sli.dev/',
    },
    de: {
      label: 'Deutsch',
      link: 'https://de.sli.dev/',
    },
    br: {
      label: 'Português (BR)',
      link: 'https://br.sli.dev/',
    },
    el: {
      label: 'Ελληνικά',
      link: 'https://el.sli.dev/',
    },
    ja: {
      label: '日本語',
      link: 'https://ja.sli.dev/',
    },
  },
})
