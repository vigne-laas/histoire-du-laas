import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GalerieComponent} from "./galerie/galerie.component";
import {HistoireComponent} from "./histoire/histoire.component";
import {BiographiesComponent} from "./biographies/biographies.component";
import {RessourcesComponent} from "./ressources/ressources.component";

const routes: Routes = [{ path: 'Home', component: HomeComponent },
  { path: 'Galerie', component: GalerieComponent },
  { path: 'Histoire', component: HistoireComponent },
  { path: 'Biographies', component: BiographiesComponent },
  { path: 'Ressources', component: RessourcesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' } // redirect to
  //
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
