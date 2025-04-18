// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rabbitory",
  tagline: "A self-hosted, open-source RabbitMQ-as-a-Service solution",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://Rabbitory.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/rabbitory_webpage/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Rabbitory", // Usually your GitHub org/user name.
  projectName: "rabbitory_webpage", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "deploy",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        style: "dark",
        title: "Rabbitory",
        logo: {
          alt: "My Site Logo",
          src: "img/rabbitory-logo.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "left",
          //   label: "Rabbitory",
          // },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Case Study",
          },
          // { to: "/casestudy", label: "Case Study", position: "right" },
          {
            href: "https://github.com/Rabbitory",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            // items: [
            //   {
            //     label: "Tutorial",
            //     to: "/docs/intro",
            //   },
            // ],
          },
          {
            title: "Community",
            // items: [
            //   {
            //     label: "Stack Overflow",
            //     href: "https://stackoverflow.com/questions/tagged/docusaurus",
            //   },
            //   {
            //     label: "Discord",
            //     href: "https://discordapp.com/invite/docusaurus",
            //   },
            //   {
            //     label: "X",
            //     href: "https://x.com/docusaurus",
            //   },
            // ],
          },
          {
            title: "More",
            // items: [
            //   {
            //     label: "Blog",
            //     to: "/blog",
            //   },
            //   {
            //     label: "GitHub",
            //     href: "https://github.com/facebook/docusaurus",
            //   },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Rabbitory`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
