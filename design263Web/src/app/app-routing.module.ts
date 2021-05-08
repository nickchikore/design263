import { PackageComponent } from './services/package/package.component';
import { WebDevelopmentComponent } from './services/web-development/web-development.component';
import { WebDesignComponent } from './services/web-design/web-design.component';
import { ContentAuditingComponent } from './services/content-auditing/content-auditing.component';
import { SeoComponent } from './services/seo/seo.component';
import { UxComponent } from './services/ux/ux.component';
import { AnalyticsComponent } from './services/analytics/analytics.component';
import { SocialMediaMarketingComponent } from './services/social-media-marketing/social-media-marketing.component';
import { PhotographyComponent } from './services/photography/photography.component';
import { VideographyComponent } from './services/videography/videography.component';
import { CreateAPackageComponent } from './create-a-package/create-a-package.component';
import { ServicesComponent } from './services/services/services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualComponent } from './services/visual/visual.component';
import { WebComponent } from './services/web/web.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PackagesComponent} from "./packages/packages.component";
import {ContactUsComponent} from "./contact-us/contact-us.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path:'home',component: DashboardComponent},
  { path:'services', component: ServicesComponent},
  { path:'services/web-consultancy', component: WebComponent},
  { path:'services/visual-media', component: VisualComponent},
  { path:'services/packages', component: PackagesComponent},
  { path:'services/packages/id/package', component: PackageComponent},
  { path:'services/web-consultancy/web-development', component: WebDevelopmentComponent},
  { path:'services/web-consultancy/web-design', component: WebDesignComponent},
  { path:'services/web-consultancy/content-auditing', component: ContentAuditingComponent},
  { path:'services/web-consultancy/search-engine-optimisation', component: SeoComponent},
  { path:'services/web-consultancy/ux', component: UxComponent},
  { path:'services/web-consultancy/analytics', component: AnalyticsComponent},
  { path:'services/web-consultancy/social-media-marketing', component: SocialMediaMarketingComponent},
  { path:'services/visual-media/photography', component: PhotographyComponent},
  { path:'services/visual-media/videography', component: VideographyComponent},
  { path:'services/packages/create-a-package', component: CreateAPackageComponent},
  { path:'contact-us', component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
