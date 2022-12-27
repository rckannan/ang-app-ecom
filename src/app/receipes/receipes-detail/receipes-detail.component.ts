import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InheridentService } from 'src/app/shoping-list/inheridents.service';
import { receipeService } from '../receipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipes-detail',
  templateUrl: './receipes-detail.component.html',
  styleUrls: ['./receipes-detail.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReceipesDetailComponent implements OnInit {
  // @Input() receipe: Recipe;
  receipe : Recipe ;
  id : number;
  constructor(private inherdentsrv: InheridentService, private route : ActivatedRoute, 
    private receipeservice : receipeService, private router : Router ) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params)=>{
      this.id = +param['id'];
     this.receipe = this.receipeservice.getReceipie(this.id );
    });
  }

  onIngredentAdd() {
    this.inherdentsrv.doPushInheridents(this.receipe.inheridents);
  }

  onEditReceipe(){
    this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route});
    // this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
