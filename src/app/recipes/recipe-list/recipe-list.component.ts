import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe('A test recipe','This is simply a test','https://get.pxhere.com/photo/biryani-dish-food-cuisine-recipe-rice-asian-food-vegetarian-food-1459569.jpg'),
      new Recipe('A test recipe2','This is simply a test2','https://get.pxhere.com/photo/biryani-dish-food-cuisine-recipe-rice-asian-food-vegetarian-food-1459569.jpg')

    ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
