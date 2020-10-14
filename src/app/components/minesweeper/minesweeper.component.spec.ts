// Angular
import { TestBed, ComponentFixture, async } from '@angular/core/testing';

// Angular Material
import { MatCardModule } from '@angular/material';

// Components
import { MinesweeperComponent } from '../../components/minesweeper/minesweeper.component';
import { BoardComponent } from '../../components/board/board.component';
import { TileComponent } from '../../components/tile/tile.component';
import { ScoreboardComponent } from '../../components/scoreboard/scoreboard.component';

// Services
import { MinesweeperService } from '../../services/game/minesweeper.service';

// Test
describe('MinesweeperComponent', () => {
  let component: MinesweeperComponent;
  let fixture: ComponentFixture<MinesweeperComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
          MinesweeperComponent,
          BoardComponent,
          TileComponent,
          ScoreboardComponent
        ],
        imports: [
          MatCardModule
        ],
        providers: [
          MinesweeperService
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Should show the game scoreboard
  it('should show the game scoreboard', () => {
    // Get the game scoreboard element
    const gameScoreboard = fixture.nativeElement.querySelector('app-scoreboard');
    // Assert
    expect(gameScoreboard).toBeTruthy();
  });

  // Should show the game board
  it('should show the game board', () => {
    // Get the game board element
    const gameBoard = fixture.nativeElement.querySelector('app-board');
    // Assert
    expect(gameBoard).toBeTruthy();
  });

});
