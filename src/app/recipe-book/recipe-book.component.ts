import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent {
  opened = false;
  constructor() {
    setTimeout(() => {
      this.opened = true;
    }, 2000);
  }
}
