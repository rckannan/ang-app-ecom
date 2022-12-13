import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipesListComponent } from './receipes/receipes-list/receipes-list.component';
import { ReceipesDetailComponent } from './receipes/receipes-detail/receipes-detail.component';
import { ReceipeItemComponent } from './receipes/receipes-list/receipe-item/receipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipesListComponent,
    ReceipesDetailComponent,
    ReceipeItemComponent,
    ShopingListComponent,
    ShopingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
