import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/team',
    component: ComponentCreator('/team', 'e5a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ab3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '870'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'bbd'),
            routes: [
              {
                path: '/docs/ArchitectureOverview',
                component: ComponentCreator('/docs/ArchitectureOverview', '889'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Background',
                component: ComponentCreator('/docs/Background', '650'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/ControlPanel',
                component: ComponentCreator('/docs/ControlPanel', 'a57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/FutureWork',
                component: ComponentCreator('/docs/FutureWork', '0e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/MeetRabbitory',
                component: ComponentCreator('/docs/MeetRabbitory', '038'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/RabbitMQEcosystem',
                component: ComponentCreator('/docs/RabbitMQEcosystem', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Technical',
                component: ComponentCreator('/docs/Technical', 'bb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
