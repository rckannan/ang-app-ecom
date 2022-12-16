import { Component, OnInit } from '@angular/core';
import { Inherident } from '../shared/inherident.model';
import { InheridentService } from './inheridents.service';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
  providers: [],
})
export class ShopingListComponent implements OnInit {
  ingredients: Inherident[] = [];

  constructor(private InheridentService: InheridentService) {}

  ngOnInit(): void {
    this.ingredients = this.InheridentService.goGetInheridents();
    this.InheridentService.onNewInheridentAdded.subscribe(
      (inh: Inherident[]) => {
        this.ingredients = inh;
      }
    );
  }

  // onUseraddinherident(inherid: Inherident) {
  //   this.ingredients.push(inherid);
  // }
}
