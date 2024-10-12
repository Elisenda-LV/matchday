import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCalendarComponent } from './league-calendar.component';

describe('LeagueCalendarComponent', () => {
  let component: LeagueCalendarComponent;
  let fixture: ComponentFixture<LeagueCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
