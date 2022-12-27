import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {
  id : number;
  canEdit : boolean = false;
  constructor(private route : ActivatedRoute){

  }
  ngOnInit(): void {
     this.route.params.subscribe((param: Params)=>{
        this.id = +param['id'];
        this.canEdit = param['id']!=null;
     });
  }

}
