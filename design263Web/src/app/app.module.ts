import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import {ServicesModule} from "./services/services.module";
import {SharedModule} from "./shared/shared.module";
import { PackagesComponent } from './packages/packages.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CreateAPackageComponent } from './create-a-package/create-a-package.component';
import {NgbAccordionModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PackagesComponent,
    ContactUsComponent,
    CreateAPackageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ServicesModule,
    SharedModule,
    NgbAccordionModule,
    NgbCarouselModule,

  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }