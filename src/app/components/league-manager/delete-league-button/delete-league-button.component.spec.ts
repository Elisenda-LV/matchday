import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLeagueButtonComponent } from './delete-league-button.component';

describe('DeleteLeagueButtonComponent', () => {
  let component: DeleteLeagueButtonComponent;
  let fixture: ComponentFixture<DeleteLeagueButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLeagueButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLeagueButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
