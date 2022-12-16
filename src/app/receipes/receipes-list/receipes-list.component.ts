import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { loggingService } from 'src/app/shared/logging.service';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-receipes-list',
  templateUrl: './receipes-list.component.html',
  styleUrls: ['./receipes-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [loggingService],
})
export class ReceipesListComponent {
  @Output() selectItemchild = new EventEmitter<Recipe>();
  onitemSelected(receipe: Recipe) {
    this.loggingSrv.doLog('receipe-list', receipe.name);
    this.selectItemchild.emit(receipe);
  }
  cnt: number = 0;
  liked: string = '';
  refvsl: string = '';
  recipes: Recipe[] = [
    new Recipe(
      'new one',
      'new one desc',
      'https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1'
    ),
    new Recipe(
      'new two',
      'new one desc',
      'https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1'
    ),
    new Recipe(
      'new three',
      'new one desc',
      'https://th.bing.com/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?pid=ImgDet&rs=1'
    ),
  ];

  // onUserLikedReceipe(userlikes: {name : string, refval : string}){
  //   this.cnt = this.cnt +1;
  //   this.liked = "user likes "+ userlikes.name;
  //   this.refvsl = "user refvsl "+ userlikes.refval;
  // }
  constructor(private loggingSrv: loggingService) {}
}
