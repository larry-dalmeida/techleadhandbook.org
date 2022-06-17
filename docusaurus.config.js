// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tech Lead Handbook',
  tagline: 'Curated Guidebook for the First Time Tech Lead',
  url: 'https://www.techleadhandbook.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'techleadhandbook.org', // Usually your repo name.

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
          path: './content',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
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
        title: 'Tech Lead Handbook',
        logo: {
          alt: 'Tech Lead Handbook Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Start Reading',
            href: '/technical-leadership-guide/',
            position: 'left',
          },
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
          title: 'General',
          items: [
            {
              label: 'Start Reading',
              href: '/technical-leadership-guide/',
            },
            {
              label: 'Resume preparation',
              href: '/resume/',
            },
            {
              label: 'Algorithms',
              href: '/algorithms/study-cheatsheet',
            },
            {
              label: 'Blog',
              href: '/blog',
            },
          ],
        },
        {
          title: 'Interviews',
          items: [
            {
              label: 'Coding interviews',
              href: '/coding-interview-prep/',
            },
            {
              label: 'Study plan',
              href: '/coding-interview-study-plan/',
            },
            {
              label: 'System design interviews',
              href: '/system-design/',
            },
            {
              label: 'Behavioral interviews',
              href: '/behavioral-interview/',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/larry-dalmeida/techleadhandbook.org',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/techleadhandbook',
            },
            {
              label: 'Contact',
              href: 'mailto:hello@techinterviewhandbook.org',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Recommended books',
              href: '/recommended-books',
            },
            {
              label: 'Beyond Pull Requests',
              href: 'https://beyondpullrequests.com/',
            },
          ],
        },
      ],
        copyright: `Copyright © ${new Date().getFullYear()} Tech Lead Handbook. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
