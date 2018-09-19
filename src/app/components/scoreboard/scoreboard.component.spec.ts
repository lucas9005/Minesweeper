// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Components
import { ScoreboardComponent } from './scoreboard.component';

// Test
describe('ScoreboardComponent', () => {
  let component: ScoreboardComponent;
  let fixture: ComponentFixture<ScoreboardComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
          ScoreboardComponent
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(ScoreboardComponent);
    component = fixture.componentInstance;
    // Set the scoreboard input attribute
    component.scoreboard = {
      startTime: null,
      endTime: null,
      completed: null,
      minesLeft: 0
    };
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Should show the mines left count
  it('should show the mines left count', () => {
    // Get the mines left element
    const minesLeft = fixture.debugElement.query(By.css('.mines-left'));
    // Assert
    expect(minesLeft).toBeTruthy();
  });

  // Mines left count should be greater than or equal to 0
  it('mines left count should be greater than or equal to 0', () => {
    // Get the mines left inner element
    const minesLeftInner = fixture.debugElement.query(By.css('.mines-left span'));
    // Get the count
    const count = minesLeftInner.nativeElement.innerHTML;
    // Assert
    expect(count).toBeGreaterThanOrEqual(0);
  });

  // Should show the reset button
  it('should show the reset button', () => {
    // Get the reset button element
    const resetButton = fixture.debugElement.query(By.css('.reset-button'));
    // Assert
    expect(resetButton).toBeTruthy();
  });

  // Should show the time elapsed count
  it('should show the time elapsed count', () => {
    // Get the time elapsed element
    const timeElapsed = fixture.debugElement.query(By.css('.time-elapsed'));
    // Assert
    expect(timeElapsed).toBeTruthy();
  });

  // Time elapsed count should be greater than or equal to 0
  it('time elapsed count should be greater than or equal to 0', () => {
    // Get the time elapsed inner element
    const timeElapsedInner = fixture.debugElement.query(By.css('.time-elapsed span'));
    // Get the count
    const count = timeElapsedInner.nativeElement.innerHTML;
    // Assert
    expect(count).toBeGreaterThanOrEqual(0);
  });

});
