// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RABBITORY",
  tagline: "A self-hosted, open-source RabbitMQ-as-a-Service platform",
  favicon: "img/favicon.ico",
  url: "https://Rabbitory.github.io",
  baseUrl: "/",
  organizationName: "Rabbitory",
  deploymentBranch: "gh-pages",
  projectName: "Rabbitory.github.io",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
        },

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        style: "dark",
        title: "RABBITORY",
        logo: {
          alt: "Rabbitory Logo",
          src: "img/rabbitory-logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Case Study",
          },
          {
            label: "Team",
            position: "right",
            to: "/team",
          },
          {
            href: "https://github.com/Rabbitory",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://www.linkedin.com/company/rabbitory-platform", // your org's LinkedIn URL
            position: "right",
            className: "header-linkedin-link",
            "aria-label": "LinkedIn organization page",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Rabbitory`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
