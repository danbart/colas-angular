import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EscritorioComponent } from './pages/escritorio/escritorio.component';
import { HomeComponent } from './pages/home/home.component';
import { NueoTicketComponent } from './pages/nueo-ticket/nueo-ticket.component';
import { PublicoComponent } from './pages/publico/publico.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    EscritorioComponent,
    HomeComponent,
    NueoTicketComponent,
    PublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
