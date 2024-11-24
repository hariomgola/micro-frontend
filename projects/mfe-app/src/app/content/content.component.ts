import { Component } from '@angular/core';

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
export class ContentComponent {}
