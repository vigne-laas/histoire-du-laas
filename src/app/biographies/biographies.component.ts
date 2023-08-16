import { Component } from '@angular/core';

@Component({
  selector: 'app-biographies',
  templateUrl: './biographies.component.html',
  styleUrls: ['./biographies.component.css']
})
export class BiographiesComponent {
  banner = {
    titre : "Biographies",
    description: "Bienvenue dans biographies",
    img: "assets/logo_laas.png"
  }

  bios   = [
    {
      Nom:"GIRALT",
      Prenom :"Georges",
      photo: "path",
      equipe: "", //enum
      departement: "Robotique" //enum
    },
    {
      Nom:"CHATILLA",
      Prenom :"Raja",
      photo: "path",
      equipe: "RIS",
      departement: "R"
    }
  ]

}
