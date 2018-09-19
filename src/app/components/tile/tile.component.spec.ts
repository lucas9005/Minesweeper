// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Components
import { TileComponent } from './tile.component';

// Test
describe('TileComponent', () => {
  let component: TileComponent;
  let fixture: ComponentFixture<TileComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
          TileComponent
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(TileComponent);
    component = fixture.componentInstance;
    // Set the tile input attribute
    component.tile = {
      isMine: false,
      isActivated: false,
      isDisabled: false,
      isRevealed: false,
      surroundingMines: null
    };
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Should show the grass image
  it('should show grass image', () => {
    // Assert
    expect(fixture.debugElement.query(By.css('.grass-img'))).toBeTruthy();
  });

  // Should show the dirt image
  it('should show dirt image', () => {
    // Assert
    expect(fixture.debugElement.query(By.css('.dirt-img'))).toBeTruthy();
  });

  // Should show the mine image
  it('should show mine image', () => {
    // Assert
    expect(fixture.debugElement.query(By.css('.mine-img'))).toBeTruthy();
  });

  // Should show the number image
  it('should show number image', () => {
    // Set the surrounding mines value
    component.tile.surroundingMines = 5;
    // Update the component
    fixture.detectChanges();
    // Assert
    expect(fixture.debugElement.query(By.css('.number-img'))).toBeTruthy();
  });

  // Should show the mine activated image
  it('should show mine activated image', () => {
    // Assert
    expect(fixture.debugElement.query(By.css('.mine-activated-img'))).toBeTruthy();
  });

  // Should show the danger image
  it('should show danger image', () => {
    // Assert
    expect(fixture.debugElement.query(By.css('.danger-img'))).toBeTruthy();
  });

});
