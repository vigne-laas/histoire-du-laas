import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-biographie',
  templateUrl: './card-biographie.component.html',
  styleUrls: ['./card-biographie.component.css']
})
export class CardBiographieComponent {
@Input() bio!:any;
}
