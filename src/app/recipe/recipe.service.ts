import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list-parent/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService){}

    private recipes: Recipe[] = [
        new Recipe('1st Recipe', 'This is the 1st recipe', 
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F03%2F24%2Foven-baked-potato-chips-recipe.jpg',
        [
            new Ingredient('Meat', 1),
            new Ingredient('Fries', 5)
        ]),
        new Recipe('2nd Recipe', 'This is the 2nd recipe', 
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2021%2F03%2F24%2Foven-baked-potato-chips-recipe.jpg',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Chicken', 1)
        ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToSL(ingredients: Ingredient[]){
          this.slService.addIngredients(ingredients);

      }

      getRecipe(index: number){
          return this.recipes[index];
      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deletRecipe(index: number){
          this.recipes.splice(index, 1);
          this.recipesChanged.next(this.recipes.slice());
      }
}