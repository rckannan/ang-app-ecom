import { Component } from '@angular/core';
import { Inherident } from '../shared/inherident.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent {
  ingredients = [
    new Inherident('inherid 1', 100),
    new Inherident('inherid 2', 120),
    new Inherident('inherid 3', 130),
  ];
}
