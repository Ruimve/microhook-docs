// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microhook',
  tagline: 'The performant and lightweight library for creating reusable and composable React hooks.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ruimve', // Usually your GitHub org/user name.
  projectName: 'microhook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ruimve/microhook-docs/blob/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ruimve/microhook-docs/blob/main',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/app.css')
          ],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'microhook, React hooks, useIntersectionObserver, useLoading, useMeasure, useOutClick, usePortal, usePrefetch, useRestHeight, TypeScript, reusable code, performance optimization, SEO.'}],
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Microhook',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // { to: '/mdx', label: 'MDX', position: 'right' },
          {
            href: 'https://github.com/Ruimve/microhook',
            position: 'right',
            className:'header-github-link',
            'aria-label': 'GitHub repository'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/microhook',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/FrPWgtGs6j',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ruimve159626',
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
              // {
              //   label: 'Changelog',
              //   to: '/Changelog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/Ruimve/microhook',
              },
              {
                html: '<a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify"><img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51"></a>'
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microhook, Inc. Built with Ruimve.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'U16ACEWSQO',
  
        // Public API key: it is safe to commit it
        apiKey: 'e463805bcaab81ad6587ac78cf4f9c1b',
  
        indexName: 'microhook',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        //externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        // searchParameters: {},
  
        // // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;
