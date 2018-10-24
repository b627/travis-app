import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { MatIconModule } from '@angular/material';
import { DashboardTileDetailComponent } from './dashboard-tile-detail/dashboard-tile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    DashboardTileComponent,
    DashboardTileDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
