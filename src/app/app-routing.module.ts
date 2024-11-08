import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"ubicanos",
    component: UbicanosComponent
  },
  {
    path:"contactanos",
    component: ContactanosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

