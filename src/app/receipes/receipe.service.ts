import { EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/receipes/recipe.model';
import { Inherident } from '../shared/inherident.model';
export class receipeService {
  constructor() {}

  recipes: Recipe[] = [
    new Recipe(
      'new one',
      'new one desc',
      'https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1',
      [new Inherident('bun', 1), new Inherident('meat', 1)]
    ),
    new Recipe(
      'new two',
      'new one desc',
      'https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1',
      [new Inherident('french fries', 1), new Inherident('meat', 1)]
    ),
    new Recipe(
      'new three',
      'new one desc',
      'https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1',
      [new Inherident('mainees', 1), new Inherident('meat', 1)]
    ),
  ];

  getReceipies() {
    return this.recipes.slice();
  }

  onSelectedReceipe = new EventEmitter<Recipe>();
}
