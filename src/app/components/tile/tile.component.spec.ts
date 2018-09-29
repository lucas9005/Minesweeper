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
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Should show the grass image
  it('should show the grass image', () => {
    // Get the grass image element
    const grassImg = fixture.nativeElement.querySelector('.grass-img');
    // Assert
    expect(grassImg).toBeTruthy();
  });

  // Should show the dirt image
  it('should show the dirt image', () => {
    // Get the dirt image element
    const dirtImg = fixture.nativeElement.querySelector('.dirt-img');
    // Assert
    expect(dirtImg).toBeTruthy();
  });

  // Should show the mine image
  it('should show the mine image', () => {
    // Get the mine image element
    const mineImg = fixture.nativeElement.querySelector('.mine-img');
    // Assert
    expect(mineImg).toBeTruthy();
  });

  // Should show the number image
  it('should show the number image', () => {
    // Set the surrounding mines value
    component.tile.surroundingMines = 5;
    // Update the component
    fixture.detectChanges();
    // Get the number image element
    const numberImg = fixture.nativeElement.querySelector('.number-img');
    // Assert
    expect(numberImg).toBeTruthy();
  });

  // Should show the mine activated image
  it('should show the mine activated image', () => {
    // Get the mine activated image element
    const mineActivatedImg = fixture.nativeElement.querySelector('.mine-activated-img');
    // Assert
    expect(mineActivatedImg).toBeTruthy();
  });

  // Should show the danger image
  it('should show the danger image', () => {
    // Get the danger image element
    const dangerImg = fixture.nativeElement.querySelector('.danger-img');
    // Assert
    expect(dangerImg).toBeTruthy();
  });

});
