import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PassengerDashboardModule } from './passenger-dashboard/passenger-dashboard.module';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
]
@NgModule({
  imports: [
    //Angular Modules
    BrowserModule,
    CommonModule,
    FormsModule,
    // Custom Modules
    PassengerDashboardModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
