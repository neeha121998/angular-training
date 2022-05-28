import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './test/parent/parent.component';
import { ChildComponent } from './test/child/child.component';
import { MessageService } from './services/message.service';

const ROUTES: Routes = [
 
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  }
  
];
@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES, { enableTracing: false })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
