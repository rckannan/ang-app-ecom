import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Inherident } from 'src/app/shared/inherident.model';
import { InheridentService } from '../inheridents.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css'],
})
export class ShopingEditComponent {
  constructor(private InheridentService: InheridentService) {}

  @Input() inherident: Inherident;
  // inheritentObj: Inherident;
  @ViewChild('inherident_name') inherident_name: ElementRef;
  @ViewChild('inherident_amount') inherident_amount: ElementRef;
  // @Output() addInherident = new EventEmitter<Inherident>();

  onUserAdd(formCtrl : NgForm) {
    var inheritentObj = new Inherident(
       formCtrl.value.name,
      formCtrl.value.amount
    );
    this.InheridentService.addInheridentEvent.next(inheritentObj);
    // this.ShoppingListService.addInheridentEvent(inheritentObj);
    // this.addInherident.emit(inheritentObj);
  }
}
