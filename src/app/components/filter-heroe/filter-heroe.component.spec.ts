import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHeroeComponent } from './filter-heroe.component';

describe('FilterHeroeComponent', () => {
  let component: FilterHeroeComponent;
  let fixture: ComponentFixture<FilterHeroeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterHeroeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
