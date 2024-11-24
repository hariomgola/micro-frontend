import { Component, isDevMode } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [
    `
      div.content {
        margin-left: 200px;
        padding: 1px 16px;
        height: 1000px;
      }
    `,
  ],
})
export class ContentComponent {
  mfeHeader = isDevMode() ? 'Mfe - app' : '';
  constructor() {
    document.addEventListener('mfe-app', (data: any) => {
      if (isDevMode()) {
        console.log(' |> Data fetch to mfe-app - ', data);
      }
      this.mfeHeader = data.detail.message;
    });
  }
}
