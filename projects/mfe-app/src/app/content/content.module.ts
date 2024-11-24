import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContentComponent,
      },
    ]),
  ],
})
export class ContentModule {}
