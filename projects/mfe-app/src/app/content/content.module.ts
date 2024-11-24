import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { TerminalComponent } from '../terminal/terminal.component';

@NgModule({
  declarations: [ContentComponent, TerminalComponent],
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
