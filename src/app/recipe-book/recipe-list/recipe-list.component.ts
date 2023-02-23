import { Component } from '@angular/core';
import { Recipe } from './recipe-item/recipe.model';
import { MatDialog } from '@angular/material/dialog';
import { RecipeAddComponent } from '../recipe-add/recipe-add.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(RecipeAddComponent);
  }
}
