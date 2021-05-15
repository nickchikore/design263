import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsDashboardComponent} from "./clients-dashboard/clients.component";

const routes: Routes = [
  {
    path:'clients',
    component: ClientsDashboardComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
