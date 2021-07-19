import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from './services/services.component';
import {NgModule} from '@angular/core';
import { PackageComponent } from './package/package.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ContentAuditingComponent } from './content-auditing/content-auditing.component';
import { SeoComponent } from './seo/seo.component';
import { UxComponent } from './ux/ux.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SocialMediaMarketingComponent } from './social-media-marketing/social-media-marketing.component';
import { PhotographyComponent } from './photography/photography.component';
import { VideographyComponent } from './videography/videography.component';
import { CreateAPackageComponent } from './../create-a-package/create-a-package.component';
import { VisualComponent } from './visual/visual.component';
import { WebComponent } from './web/web.component';
import {PackagesComponent} from "./../packages/packages.component";
import {ServicesDetailsComponent} from './services-details/services-details.component';
import {ServicesDashboardComponent} from './services-dashboard/services-dashboard.component';

const  routes: Routes = [
  { path: '', redirectTo: '/services-dashboard', pathMatch: 'full' },
  { path: 'services-dashboard', component: ServicesDashboardComponent },
  { path: 'detail/:id', component: ServicesDetailsComponent },
  { path: 'services', component: ServicesComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
// {
//   path:'',
//   component: ServicesComponent,
//   children:[
//     { path:'visual-media', component: VisualComponent,
//       children: [
//         { path:'photography', component: PhotographyComponent},
//         { path:'videography', component: VideographyComponent},
//       ]
//     },
//     { path:'web-consultancy', component: WebComponent,
//       children: [
//         { path:'web-development', component: WebDevelopmentComponent},
//         { path:'web-design', component: WebDesignComponent},
//         { path:'content-auditing', component: ContentAuditingComponent},
//         { path:'search-engine-optimisation', component: SeoComponent},
//         { path:'ux', component: UxComponent},
//         { path:'analytics', component: AnalyticsComponent},
//         { path:'social-media-marketing', component: SocialMediaMarketingComponent}
//       ]
//     },
//     { path:'packages', children: [
//       {path:'', component: PackagesComponent},
//       { path:'packages/id/package', component: PackageComponent},
//       { path:'packages/create-a-package', component: CreateAPackageComponent},
//     ]},
//   ]
// },
