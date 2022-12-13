import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.component.html',
  styleUrls: ['./receipes-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReceipesDetailComponent {
@Input() receipe : Recipe;
}
