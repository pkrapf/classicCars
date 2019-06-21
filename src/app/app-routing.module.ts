import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarsForSaleComponent } from './cars-for-sale/cars-for-sale.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarsAdminComponent } from './cars-admin/cars-admin.component';

const routes: Routes = [
{path: '', component: AboutUsComponent},
{path: 'about-us', component: AboutUsComponent},
{path: 'cars-for-sale', component: CarsForSaleComponent},
{path: 'contact-us', component: ContactUsComponent},
{path: 'cars-admin', component: CarsAdminComponent},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
