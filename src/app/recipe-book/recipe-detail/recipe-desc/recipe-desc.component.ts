import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-desc',
  templateUrl: './recipe-desc.component.html',
  styleUrls: ['./recipe-desc.component.css'],
})
export class RecipeDescComponent {
  funDisabled = true;
  randomText: any;
  onHover() {
    this.funDisabled = false;
    console.log('Hovered');
  }
  onLeave() {
    this.funDisabled = true;
    console.log('Left');
  }
}
