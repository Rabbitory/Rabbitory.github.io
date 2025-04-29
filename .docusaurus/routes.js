import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
