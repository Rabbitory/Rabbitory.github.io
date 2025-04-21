import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rabbitory_webpage/team',
    component: ComponentCreator('/rabbitory_webpage/team', 'd05'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/docs',
    component: ComponentCreator('/rabbitory_webpage/docs', '499'),
    routes: [
      {
        path: '/rabbitory_webpage/docs',
        component: ComponentCreator('/rabbitory_webpage/docs', 'b7e'),
        routes: [
          {
            path: '/rabbitory_webpage/docs',
            component: ComponentCreator('/rabbitory_webpage/docs', '52e'),
            routes: [
              {
                path: '/rabbitory_webpage/docs/ArchitectureOverview',
                component: ComponentCreator('/rabbitory_webpage/docs/ArchitectureOverview', '2dd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rabbitory_webpage/docs/Conclusion',
                component: ComponentCreator('/rabbitory_webpage/docs/Conclusion', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rabbitory_webpage/docs/ControlPanel',
                component: ComponentCreator('/rabbitory_webpage/docs/ControlPanel', '037'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rabbitory_webpage/docs/Introduction',
                component: ComponentCreator('/rabbitory_webpage/docs/Introduction', '0da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rabbitory_webpage/docs/MeetRabbitory',
                component: ComponentCreator('/rabbitory_webpage/docs/MeetRabbitory', '367'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/rabbitory_webpage/docs/Technical',
                component: ComponentCreator('/rabbitory_webpage/docs/Technical', '1d1'),
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
    path: '/rabbitory_webpage/',
    component: ComponentCreator('/rabbitory_webpage/', '85d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
