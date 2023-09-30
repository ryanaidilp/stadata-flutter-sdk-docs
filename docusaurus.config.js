// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Stadata Flutter SDK",
  tagline:
    "Streamline BPS Statistics API integration in Flutter. Easily fetch, analyze, and visualize data.",
  // favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://ryanaidilp.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/stadata-flutter-sdk-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ryanaidilp", // Usually your GitHub org/user name.
  projectName: "stadata_flutter_sdk", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
      id: {
        htmlLang: "id-ID",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/ryanaidilp/stadata-flutter-sdk-docs/tree/main/docs/",
          lastVersion: "current",
          versions: {
            current: {
              label: "latest",
            },
          },
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/stadata-flutter-sdk-social-card.png",
      navbar: {
        title: "STADATA",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },

          {
            href: "https://github.com/ryanaidilp/stadata_flutter_sdk",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
          },
          {
            type: "docsVersionDropdown",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "BPS API",
                href: "https://webapi.bps.go.id",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/ryanaidilp/stadata_flutter_sdk",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} STADATA Flutter SDK. Made with Love by Fajrian Aidil Pratama `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["dart", "bash"],
      },
    }),
};

module.exports = config;
