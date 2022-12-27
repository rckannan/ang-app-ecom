import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Inherident } from '../shared/inherident.model';
export class InheridentService {
  private ingredients = [
    new Inherident('inherid 1', 100),
    new Inherident('inherid 2', 120),
    new Inherident('inherid 3', 130),
  ];

  onNewInheridentAdded = new EventEmitter<Inherident[]>();

  addInheridentEvent = new Subject<Inherident>();
  constructor() {
    this.addInheridentEvent.subscribe((inherident: Inherident) => {
      this.doAddIngerident(inherident);
    });
  }

  doAddIngerident(inherident: Inherident) {
    this.ingredients.push(inherident);
    this.onNewInheridentAdded.emit(this.ingredients);
  }

  goGetInheridents() {
    return this.ingredients.slice();
  }

  doPushInheridents(inheridents: Inherident[]) {
    this.ingredients.push(...inheridents);
  }
}
