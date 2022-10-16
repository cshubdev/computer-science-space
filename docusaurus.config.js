// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubRepoURL = 'https://github.com/Fire-Oceann/CS-Space';
const editURL_githubRepo = 'https://github.com/Fire-Oceann/CS-Space/edit/develop/'
const twitterURL = 'https://twitter.com/ziarparvaiz_01'
const discordURL = 'https://discord.gg/bYWVWrDkCU'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Computer Science Space',
  tagline: 'A Computer Science portal for enthusiasts. It contains well-written, well-thought-out and well-explained computer science and programming articles. ',
  url: 'https://cs-space.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Fire-Oceann', // Usually your GitHub org/user name.
  projectName: 'CS-Space', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
		defaultLocale: 'en',
		locales: [ 'en', 'tr', 'fr', 'de', 'ru', 'it']
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
        title: 'Computer Science Space',
        logo: {
          alt: 'Computer Science Space',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/algorithms', label: 'Algorithms', position: 'left' },
          { to: '/data-structure', label: 'Data Structures', position: 'left' },
          { to: '/git', label: 'GIT', position: 'left' },
          { href: '/docs', label: '❤️ Contributing', position: 'right' },
          {to: '/blog', label: 'Blog', position: 'right'},
          { type: 'localeDropdown', position: 'right' },
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
              { label: "Documentation",  to: "/docs" },
              { label: "Algorithms",  to: "/algorithms" },
              { label: "Data Structures",  to: "/data-structure" },
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
                label: 'Blog',
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
					'⚠ Bu site henüz yapım aşamasındadır. <a target="_blank" rel="noopener noreferrer" href="/docs">Katkıda bulunarak</a> bize yardımcı olabilirsiniz. <a target="_blank" rel="noopener noreferrer" href="https://github.com/Fire-Oceann/CS-Space/stargazers">GitHub</a>\'da bize bir ⭐ yıldız vermeyi unutmayın.',
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
