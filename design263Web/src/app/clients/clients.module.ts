import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClientsDashboardComponent} from "./clients-dashboard/clients.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[],
  declarations: [ClientsDashboardComponent]
})
export class ClientsModule { }
