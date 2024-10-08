import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterLeaguesComponent } from './filter-leagues.component';

describe('FilterLeaguesComponent', () => {
  let component: FilterLeaguesComponent;
  let fixture: ComponentFixture<FilterLeaguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterLeaguesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
