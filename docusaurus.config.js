// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubRepoURL = 'https://github.com/Fire-Oceann/BB-TR-Kaynak';
const editURL_githubRepo = 'https://github.com/Fire-Oceann/BB-TR-Kaynak/edit/develop/'
const twitterURL = 'https://twitter.com/ziarparvaiz_01'
const discordURL = 'https://discord.gg/bb-tr-kaynak'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bilgisayar Bilimi Türkçe Kaynak',
  tagline: 'A Computer Science portal for enthusiasts. It contains well-written, well-thought-out and well-explained computer science and programming articles.',
  url: 'https://bb-tr-kaynak.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fire-Oceann', // Usually your GitHub org/user name.
  projectName: 'BB-TR-Kaynak', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'content/docs',
          sidebarPath: require.resolve('./sidebars/docs.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: githubRepoURL,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: githubRepoURL,
        },
        theme: {
          customCss: require.resolve('./src/scss/custom.scss'),
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
    '@docusaurus/theme-live-codeblock',
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'algorithms',
        path: 'content/algorithms',
        routeBasePath: 'algorithms',
        sidebarPath: require.resolve('./sidebars/algorithms.js'),
        editUrl: editURL_githubRepo,
        editLocalizedFiles: true,
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'data-structure',
        path: 'content/data-structure',
        routeBasePath: 'data-structure',
        sidebarPath: require.resolve('./sidebars/data-structure.js'),
        editUrl: editURL_githubRepo,
        editLocalizedFiles: true,
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'git',
        path: 'content/git',
        routeBasePath: 'git',
        sidebarPath: require.resolve('./sidebars/git.js'),
        editUrl: editURL_githubRepo,
        editLocalizedFiles: true,
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      navbar: {
        title: 'Bilgisayar Bilimi Türkçe Kaynak',
        logo: {
          alt: 'Bilgisayar Bilimi Türkçe Kaynak',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/algorithms', label: 'Algoritmalar', position: 'left' },
          { to: '/data-structure', label: 'Veri yapısı', position: 'left' },
          { to: '/git', label: 'GIT', position: 'left' },
          { href: '/docs', label: '❤️ Katkıda Bulunmak', position: 'right' },
          {to: '/blog', label: 'Makaleler', position: 'right'},
          {
            href: githubRepoURL,
            position: 'right',
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: discordURL,
            position: 'right',
            className: "header-discord-link",
            "aria-label": "Official Discord server",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Docs",
            items: [
              { label: "Dokümantasyon",  to: "/docs" },
              { label: "Algoritmalar",  to: "/algorithms" },
              { label: "Veri yapısı",  to: "/data-structure" },
              { label: "GIT",  to: "/git" },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: discordURL,
              },
              {
                label: 'Twitter',
                href: twitterURL,
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Makaleler',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: githubRepoURL,
              },
            ],
          },
        ],
        logo: {
          alt: "Fire Ocean",
          src: "img/logo.svg",
          href: "https://github.com/Fire-Oceann",
          width: 160,
          height: 151,
        },
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Fire Ocean.`,
      },
      announcementBar: {
				content:
					'⚠ Bu site henüz yapım aşamasındadır. <a target="_blank" rel="noopener noreferrer" href="/docs/Contributing">Katkıda bulunarak</a> bize yardımcı olabilirsiniz. <a target="_blank" rel="noopener noreferrer" href="https://github.com/Fire-Oceann/BB-TR-Kaynak/stargazers">GitHub</a>\'da bize bir ⭐ yıldız vermeyi düşünün',
				backgroundColor: '#8f5ee828',
				textColor: '#fff',
				isCloseable: false,
			},
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java'],
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
