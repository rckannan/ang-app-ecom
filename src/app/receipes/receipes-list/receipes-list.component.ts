import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { receipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  // providers: [loggingService],
})
export class ReceipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() selectItemchild = new EventEmitter<Recipe>();
  // onitemSelected(receipe: Recipe) {
  //   this.loggingSrv.doLog('receipe-list', receipe.name);
  //   this.selectItemchild.emit(receipe);
  //   this.loggingSrv.loggerEvent.emit(receipe.name);
  // }
  cnt: number = 0;
  liked: string = '';
  refvsl: string = '';

  constructor(
    // private loggingSrv: loggingService,
    private receipeSrv: receipeService
  ) {}

  ngOnInit(): void {
    this.recipes = this.receipeSrv.getReceipies();
  }
}
