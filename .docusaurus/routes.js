import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rabbitory_webpage/__docusaurus/debug',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug', '083'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/__docusaurus/debug/config',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug/config', 'd6f'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/__docusaurus/debug/content',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug/content', '46a'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/__docusaurus/debug/globalData',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug/globalData', '090'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/__docusaurus/debug/metadata',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug/metadata', 'ca6'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/__docusaurus/debug/registry',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug/registry', '6cd'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/__docusaurus/debug/routes',
    component: ComponentCreator('/rabbitory_webpage/__docusaurus/debug/routes', '1b4'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/team',
    component: ComponentCreator('/rabbitory_webpage/team', 'd05'),
    exact: true
  },
  {
    path: '/rabbitory_webpage/docs',
    component: ComponentCreator('/rabbitory_webpage/docs', '062'),
    routes: [
      {
        path: '/rabbitory_webpage/docs',
        component: ComponentCreator('/rabbitory_webpage/docs', '27c'),
        routes: [
          {
            path: '/rabbitory_webpage/docs',
            component: ComponentCreator('/rabbitory_webpage/docs', '8a0'),
            routes: [
              {
                path: '/rabbitory_webpage/docs/ArchitectureOverview',
                component: ComponentCreator('/rabbitory_webpage/docs/ArchitectureOverview', '2dd'),
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
