import {RouterModule, Routes} from "@angular/router";
import {ServicesComponent} from "./services/services.component";
import {NgModule} from "@angular/core";

const  routes:Routes = [
  {
    path: 'services',
    component: ServicesComponent,
    children: [
      // { path: '', component: ServicesComponent }
      // { path: 'edit/:id', component: EditOfferingComponent },
      // { path: 'create', component: EditOfferingComponent }
    ]

  },
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
