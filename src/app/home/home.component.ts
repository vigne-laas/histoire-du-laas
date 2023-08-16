import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  banner = {
    titre : "Home",
    description: "Bienvenue dans home",
    img: "assets/logo_laas.png"
  }
}
