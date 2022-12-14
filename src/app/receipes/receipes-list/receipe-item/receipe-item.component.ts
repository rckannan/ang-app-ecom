import {
  Component,
  Input,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { receipeService } from '../../receipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit {
  // receipe: Recipe;
  @Input() receipe: Recipe;

  @Output() itemSelected = new EventEmitter<void>();

  @Input() index : number;

  constructor(private receipeService: receipeService, private route : ActivatedRoute) {}

  onitemSelected() {
    // this.itemSelected.emit();
    this.receipeService.onSelectedReceipe.next(this.receipe);
  }

  // receipeNme: string = '';
  // nodelpassdata: string='';

  ngOnInit(): void {
     this.route.params.subscribe((param : Params)=>{
      this.index = +param['id'];
      // this.receipe = this.receipeService.getReceipie(this.index);
     });
  }

  // @Input('receipeItem') receipeItem: {
  //   name: string;
  //   description: string;
  //   imagePath: string;
  // };

  @Output() userLiked = new EventEmitter<{ name: string; refval: string }>();

  @ViewChild('userinputtestref', { static: true }) userinputtestref: ElementRef;

  onUserLiked(userinputtest: HTMLInputElement) {
    this.userLiked.emit({
      name: userinputtest.value,
      refval: this.userinputtestref.nativeElement.value,
    });
    // this.nodelpassdata =  userinputtest.value + this.userinputtestref.nativeElement.value;
  }
}
