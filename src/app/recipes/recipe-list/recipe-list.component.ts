import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'http://www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg'),
    new Recipe('Another Test Recipe',
      'This is simply a test2',
      'http://www.manjulaskitchen.com/blog/wp-content/uploads/bread_burfi.jpg?x45960')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipeEl: Recipe) {
    this.recipeWasSelected.emit(recipeEl);
  }
}
