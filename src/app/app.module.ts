import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { GalerieComponent } from './galerie/galerie.component';
import { HistoireComponent } from './histoire/histoire.component';
import { BiographiesComponent } from './biographies/biographies.component';
import { RessourcesComponent } from './ressources/ressources.component';
import {RouterOutlet} from "@angular/router";
import {MatExpansionModule} from "@angular/material/expansion";
import { UneBiographieComponent } from './une-biographie/une-biographie.component';
import { CardBiographieComponent } from './card-biographie/card-biographie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    GalerieComponent,
    HistoireComponent,
    BiographiesComponent,
    RessourcesComponent,
    UneBiographieComponent,
    CardBiographieComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    RouterOutlet,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
