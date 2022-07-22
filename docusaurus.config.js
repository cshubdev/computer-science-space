// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const githubRepoURL = 'https://github.com/Fire-Oceann/BB-TR-Kaynak';
const twitterURL = 'https://twitter.com/ziarparvaiz_01'
const discordURL = 'https:discord.gg/bb-tr-kaynak'

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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Bilgisayar Bilimi Türkçe Kaynak',
        logo: {
          alt: 'Bilgisayar Bilimi Türkçe Kaynak',
          src: 'img/logo.svg',
        },
        items: [
          { href: '/docs', label: 'Docs', position: 'left' },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
