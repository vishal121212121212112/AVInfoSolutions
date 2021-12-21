import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServiceComponent } from './Components/service/service.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { CareerComponent } from './Components/career/career.component';



const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path : 'contact-us' , component : ContactUsComponent},
  { path : 'about-us', component : AboutUsComponent },
  { path : 'services', component : ServiceComponent},
  {path : 'Career',component:CareerComponent},
  { path :'' , component : HomeComponent},
  { path : '**' , component : HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
