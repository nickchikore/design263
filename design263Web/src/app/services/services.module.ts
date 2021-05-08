import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './web/web.component';
import { SharedModule } from '../shared/shared.module';
import {VisualComponent} from './visual/visual.component';



@NgModule({
  declarations: [
    ServicesComponent,
    WebComponent,
    VisualComponent
  ],
  exports: [
    ServicesComponent,
    WebComponent,
    VisualComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ServicesModule { }
