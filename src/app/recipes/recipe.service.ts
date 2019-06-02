import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'http://www.rajnisrecipe.com/wp-content/uploads/2016/12/pasta.jpg'),
    new Recipe('Another Test Recipe',
      'This is simply a test2',
      'http://www.manjulaskitchen.com/blog/wp-content/uploads/bread_burfi.jpg?x45960')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
