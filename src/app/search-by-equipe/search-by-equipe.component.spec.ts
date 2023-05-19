import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByEquipeComponent } from './search-by-equipe.component';

describe('SearchByEquipeComponent', () => {
  let component: SearchByEquipeComponent;
  let fixture: ComponentFixture<SearchByEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
