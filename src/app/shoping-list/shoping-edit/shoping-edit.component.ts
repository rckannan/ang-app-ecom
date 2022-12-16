import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
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

  onUserAdd() {
    var inheritentObj = new Inherident(
      this.inherident_name.nativeElement.value,
      this.inherident_amount.nativeElement.value
    );
    this.InheridentService.addInheridentEvent.emit(inheritentObj);
    // this.ShoppingListService.addInheridentEvent(inheritentObj);
    // this.addInherident.emit(inheritentObj);
  }
}
