import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;
  // @Output() selectMenu = new EventEmitter<string>();
  // onSelectMenu(mnu : string){
  //   this.selectMenu.emit(mnu);
  // }
}
