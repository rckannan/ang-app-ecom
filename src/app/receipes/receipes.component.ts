import { Component } from '@angular/core';
import { receipeService } from './receipe.service';
import { Recipe } from './recipe.model';
import { loggingService } from 'src/app/shared/logging.service';

@Component({
  selector: 'app-receipes',
  templateUrl: './receipes.component.html',
  styleUrls: ['./receipes.component.css'],
  providers: [receipeService],
})
export class ReceipesComponent {
  selectedReceipe: Recipe;

  constructor(
    private receipeServices: receipeService,
    private loggingSrv: loggingService
  ) {
    receipeServices.onSelectedReceipe.subscribe((recipe: Recipe) => {
      this.selectedReceipe = recipe;
      this.loggingSrv.doLog('receipe', this.selectedReceipe.name);
    });
  }
}
