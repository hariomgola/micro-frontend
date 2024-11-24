import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `<div class="sidebar">
    <a *ngFor="let nav of sideNavigationData">{{ nav.label }}</a>
  </div>`,
  styles: [
    `
      .sidebar {
        margin: 0;
        padding: 0;
        width: 200px;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
      }

      .sidebar a {
        display: block;
        color: black;
        padding: 16px;
        text-decoration: none;
      }

      .sidebar a.active {
        background-color: #04aa6d;
        color: white;
      }

      .sidebar a:hover:not(.active) {
        background-color: #555;
        color: white;
      }
    `,
  ],
})
export class SideNavComponent {
  sideNavigationData = [
    {
      label: 'Home',
    },
    {
      label: 'News',
    },
    {
      label: 'Contact',
    },
    {
      label: 'About',
    },
    {
      label: 'Made by Hari',
    },
  ];
}
