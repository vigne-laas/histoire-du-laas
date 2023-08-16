import { Component } from '@angular/core';

@Component({
  selector: 'app-ressources',
  templateUrl: './ressources.component.html',
  styleUrls: ['./ressources.component.css']
})
export class RessourcesComponent {
  banner = {
    titre : "Ressources",
    description: "Bienvenue dans ressources",
    img: "assets/logo_laas.png"
  }
}
