import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.css']
})
export class GalerieComponent {
  banner = {
    titre : "Galerie",
    description: "Bienvenue dans galerie",
    img: "assets/logo_laas.png"
  }
}
