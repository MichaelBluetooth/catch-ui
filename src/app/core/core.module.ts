import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ModalModule } from 'ngx-bootstrap/modal';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CollapsibleSectionComponent } from './components/collapsible-section/collapsible-section.component';
import { ComentImagePipe } from './pipes/coment-image.pipe';

@NgModule({
  declarations: [
    NavBarComponent,
    CollapsibleSectionComponent,
    ComentImagePipe
  ],
  exports: [
    NavBarComponent,
    CollapsibleSectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule.forRoot()
  ]
})
export class CoreModule { }
