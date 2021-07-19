import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from './services/services.component';
import { WebComponent } from './web/web.component';
import { SharedModule } from '../shared/shared.module';
import {VisualComponent} from './visual/visual.component';
import {RouterModule} from '@angular/router';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ServicesSearchComponent } from './services-search/services-search.component';
import { ServicesDashboardComponent } from './services-dashboard/services-dashboard.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ServicesComponent,
    WebComponent,
    VisualComponent,
    ServicesDetailsComponent,
    ServicesSearchComponent,
    ServicesDashboardComponent
  ],
  exports: [
    ServicesComponent,
    WebComponent,
    VisualComponent,
    ServicesDetailsComponent,
    ServicesSearchComponent,
    ServicesDashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class ServicesModule { }
