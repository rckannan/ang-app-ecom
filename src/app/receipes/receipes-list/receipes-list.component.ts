import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css']
})
export class ReceipesListComponent {
  recipes: Recipe[] = [
    new Recipe("new one", "new one desc", "https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1"),
    new Recipe("new two", "new one desc", "https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1"),
    new Recipe("new three", "new one desc", "https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1")
  ];

  constructor(){

  }
}
