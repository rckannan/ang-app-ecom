import { Component, Input, EventEmitter, Output, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Recipe } from '../../recipe.model';



@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css'],
})
export class ReceipeItemComponent implements OnInit {

  @Input() receipe : Recipe;
  @Output() itemSelected = new EventEmitter<void>();

  onitemSelected(){
    this.itemSelected.emit();
  }


  // receipeNme: string = '';
  // nodelpassdata: string='';
  ngOnInit(): void {
    // this.receipeNme ='';
  }
  // @Input('receipeItem') receipeItem: {
  //   name: string;
  //   description: string;
  //   imagePath: string;
  // };

  @Output() userLiked = new EventEmitter<{ name: string, refval  : string }>();

  @ViewChild('userinputtestref',{static:true}) userinputtestref : ElementRef;

  onUserLiked(userinputtest: HTMLInputElement) {
    this.userLiked.emit({ name: userinputtest.value , refval : this.userinputtestref.nativeElement.value});
    // this.nodelpassdata =  userinputtest.value + this.userinputtestref.nativeElement.value;
  }
}
