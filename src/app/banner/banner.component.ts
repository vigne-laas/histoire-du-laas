import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  @Input() banner_info! : any;

  Banner = {
    titre: "Galerie",
    img : "path",
    description : "Acces a l'ensemble des archives"

  }

  setGalerie()
  {
    this.Banner
    this.Banner.img
  }

}
