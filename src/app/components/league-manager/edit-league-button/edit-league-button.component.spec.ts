import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeagueButtonComponent } from './edit-league-button.component';

describe('EditLeagueButtonComponent', () => {
  let component: EditLeagueButtonComponent;
  let fixture: ComponentFixture<EditLeagueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditLeagueButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditLeagueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
