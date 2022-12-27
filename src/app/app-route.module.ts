import { NgModule } from '@angular/core'; 
import {  RouterModule, Routes } from '@angular/router'; 
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { ReceipeStartsComponent } from './receipes/receipe-starts/receipe-starts.component';
import { ReceipesDetailComponent } from './receipes/receipes-detail/receipes-detail.component'; 
import { ReceipesComponent } from './receipes/receipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';

const app_route : Routes = [
  // {path: '', component: AppComponent },
  {path: '', component: ReceipesComponent },
  {path: 'receipes', component: ReceipesComponent, children:
      [{path:'', component: ReceipeStartsComponent},  
      {path:'new', component: ReceipeEditComponent},      
      {path:':id', component: ReceipesDetailComponent},
      {path:':id/edit', component: ReceipeEditComponent}
    ] },
  {path: 'shoppinglist', component: ShopingListComponent  , pathMatch: 'full'  } 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(app_route, {})
  ],
  exports : [RouterModule]
})
export class AppRouteModule { }
