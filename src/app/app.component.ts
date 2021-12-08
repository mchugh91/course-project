import { Component } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';
import { DataStorageService } from './shared/data-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [RecipeService]
})
export class AppComponent {
  title = 'course-project';
  showRecipes: boolean = true;
  showShoppingList: boolean = false;

  // displayChange(type: string){
  //   if(type === 'recipes'){
  //     this.showRecipes = true;
  //     this.showShoppingList = false;
  //   }else if (type === 'shopping'){
  //     this.showShoppingList = true;
  //     this.showRecipes = false
  //   }
  // }
}
