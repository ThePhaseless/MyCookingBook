import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDescComponent } from './recipe-desc.component';

describe('RecipeDescComponent', () => {
  let component: RecipeDescComponent;
  let fixture: ComponentFixture<RecipeDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
