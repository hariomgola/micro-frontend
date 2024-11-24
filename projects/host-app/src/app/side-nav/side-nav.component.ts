import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `<div class="sidebar">
    <a
      *ngFor="let nav of sideNavigationData"
      (click)="ontabNavigation(nav.dataEmit)"
      >{{ nav.label }}</a
    >
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
  sideNavigationData: any[] = [];

  constructor() {
    this.sideNavigationData = [
      {
        label: 'Home',
        dataEmit: 'Home Microfront End',
      },
      {
        label: 'News',
        dataEmit: 'News Microfront End',
      },
      {
        label: 'Contact',
        dataEmit: 'Contact Microfront End',
      },
      {
        label: 'About',
        dataEmit: 'About Microfront End',
      },
      {
        label: 'Made by Hari',
        dataEmit: 'Made by Hari Microfront End',
      },
    ];
    setTimeout(() => {
      this.ontabNavigation('Made by Hari Microfront End');
    }, 200);
  }

  ontabNavigation(dataEmit: String) {
    const mfe_app_event = new CustomEvent('mfe-app', {
      detail: { message: dataEmit, timestamp: new Date().toISOString() },
      bubbles: true,
      cancelable: true,
    });
    if (isDevMode()) {
      console.clear();
      console.log(
        ' |> Custom Event from the host Application - ',
        mfe_app_event
      );
    }
    document.dispatchEvent(mfe_app_event);
  }
}
