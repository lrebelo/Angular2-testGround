import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagementrootComponent } from './components/management/management-root.component';
import { ListComponent } from './components/list/list.component';
import { UsersComponent } from './components/management/users/users.component';
import { UserComponent } from './components/management/users/user.component';
import { PartsComponent } from './components/parts/parts.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'management', component: ManagementrootComponent },
  { path: 'management/users', component: UsersComponent },
  { path: 'management/users/:id', component: UserComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: ListComponent },
  { path: 'parts', component: PartsComponent },
  { path: 'parts/:id', component: PartsComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
