import { Component } from '@angular/core';

@Component({
  selector: 'app-histoire',
  templateUrl: './histoire.component.html',
  styleUrls: ['./histoire.component.css']
})
export class HistoireComponent {
  banner = {
    titre : "Histoire",
    description: "Bienvenue dans histoire",
    img: "assets/logo_laas.png"
  }
}
