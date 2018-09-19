// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

// Components
import { BoardComponent } from './board.component';
import { TileComponent } from '../tile/tile.component';

// Test
describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
          BoardComponent,
          TileComponent
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    // Set the board input attribute
    component.board = {
      grid: [
        [
          {
            isMine: false,
            isActivated: false,
            isDisabled: false,
            isRevealed: false,
            surroundingMines: null
          },
          {
            isMine: false,
            isActivated: false,
            isDisabled: false,
            isRevealed: false,
            surroundingMines: null
          }
        ],
        [
          {
            isMine: false,
            isActivated: false,
            isDisabled: false,
            isRevealed: false,
            surroundingMines: null
          },
          {
            isMine: false,
            isActivated: false,
            isDisabled: false,
            isRevealed: false,
            surroundingMines: null
          }
        ]
      ]
    };
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Should show the game board
  it('should show the game board', () => {
    // Get the game board element
    const gameBoard = fixture.debugElement.query(By.css('table tbody'));
    // Assert
    expect(gameBoard).toBeTruthy();
  });

  // Game board rows count should be equal to 2
  it('game board rows count should be equal to 2', () => {
    // Get the game board rows element
    const gameBoardRows = fixture.debugElement.query(By.css('table tbody'));
    // Get the count
    const count = gameBoardRows.children.length;
    // Assert
    expect(count).toEqual(2);
  });

  // Game board columns count should be equal to 2
  it('game board columns count should be equal to 2', () => {
    // Get the game board columns element
    const gameBoardColumns = fixture.debugElement.query(By.css('table tbody tr'));
    // Get the count
    const count = gameBoardColumns.children.length;
    // Assert
    expect(count).toEqual(2);
  });

});
