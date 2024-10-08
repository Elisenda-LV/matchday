import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeagueButtonComponent } from './add-league-button.component';

describe('AddLeagueButtonComponent', () => {
  let component: AddLeagueButtonComponent;
  let fixture: ComponentFixture<AddLeagueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddLeagueButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddLeagueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
