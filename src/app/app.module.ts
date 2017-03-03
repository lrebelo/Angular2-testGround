import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagementrootComponent } from './components/management/management-root.component';
import { ListComponent } from './components/list/list.component';
import { UsersComponent } from './components/management/users/users.component';
import { UserComponent } from './components/management/users/user.component';
import { PartsComponent } from './components/parts/parts.component';

import { UserService } from './services/users.service';
import { PartsService } from './services/parts.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, FooterComponent, DashboardComponent, ManagementrootComponent, ListComponent, UsersComponent, UserComponent, PartsComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ UserService, PartsService ],
})
export class AppModule { }
