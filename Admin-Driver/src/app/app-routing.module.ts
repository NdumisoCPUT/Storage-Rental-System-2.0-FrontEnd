import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './Components/collections/collections.component';
import { DriverHomeComponent } from './Components/driver-home/driver-home.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';

const routes: Routes = [
  {
    path: 'collection', component: CollectionsComponent
  },
  {
    path: 'driverHome', component: DriverHomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', redirectTo:'/login', pathMatch:'full'
  },
  {
    path: 'adminHome', component: AdminHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
