import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'MisakaTang',
  tagline: 'Wir müssen wissen. Wir werden wissen.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doc.misakatang.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TangMisaka23001', // Usually your GitHub org/user name.
  projectName: 'knowledge-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents:{
        maxHeadingLevel: 4,
    },
    navbar: {
      hideOnScroll: true,
      title: 'Open Source Life',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          label: 'Technical',
          sidebarId: 'technical',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'life',
          position: 'left',
          label: 'Life',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tools',
          position: 'left',
          label: 'Tools',
        },
         {
          type: 'docSidebar',
          sidebarId: 'baby',
          position: 'left',
          label: 'Baby',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://misakatang.cn/',
          label: `MisakaTang's Blog`,
          position: 'right',
        },
        {
          href: 'https://github.com/TangMisaka23001',
          label: 'GitHub',
          position: 'right',
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
              to: '/docs/technical',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LearnData 开源笔记',
              href: 'https://newzone.top',
            },
            {
              label: `Power's Wiki`,
              href: 'https://wiki-power.com',
            },
          ],
        },
        {
          title: 'Friendly Link',
          items: [
            {
              label: 'BB chen的漂流记',
              href: 'http://blog.bbchen.top',
            },
            {
              label: 'Aurthur_的博客',
              href: 'http://blog.zhuzhenyuan.cn',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MisakaTang, Inc. Built with Docusaurus.`,
    },
    prism: {
      additionalLanguages: [
        'java',
        'latex',
        'haskell',
        'matlab',
        'PHp',
        'bash',
        'diff',
        'json',
        'scss',
      ],
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
