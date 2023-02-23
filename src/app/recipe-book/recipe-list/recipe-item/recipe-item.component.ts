import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  thisRecipe: Recipe = new Recipe(
    'Name',
    'Description',
    'https://nietylkopasta.pl/wp-content/uploads/2018/03/szakszuka-11.jpg'
  );
}
