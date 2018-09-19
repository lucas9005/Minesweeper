// Angular imports
import { Component, OnInit } from '@angular/core';

// Types imports
import { Minesweeper, MatrixCoordinates2D } from '../../interfaces/minesweeper.interface';

// Services
import { MinesweeperService } from '../../services/minesweeper.service';

@Component({
  selector: 'app-minesweeper',
  templateUrl: './minesweeper.component.html',
  styleUrls: ['./minesweeper.component.scss']
})
export class MinesweeperComponent implements OnInit {

  // Attributes declaration
  private _verboseMode: boolean;
  public minesweeper: Minesweeper;

  // Dependencies injection
  constructor(private minesweeperService: MinesweeperService) {
    // Attributes initialization
    this._verboseMode = false;
    this.minesweeper = null;
  }

  // On init lifecycle hook
  ngOnInit() {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      // Display the component initialization message
      console.dir('Initialized MinesweeperComponent.');
    }
    // Initialize the game
    this._initializeGame();
  }

  /**
   * Initializes the game
   * @returns {void} Void
   */
  private _initializeGame(): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperComponent: Requesting game initialization.');
    }
    // Initializes the game
    this.minesweeper = this.minesweeperService.initializeGame({ difficulty: 3, gridWidth: 50, gridHeight: 50, minesCount: 200 });
  }

  /**
   * Resets the game
   * @returns {void} Void
   */
  public onReset(): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperComponent: Requesting game update for reset event.');
    }
    // Initialize the game
    this._initializeGame();
  }

  /**
   * Receive the primary action event
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  public onPrimaryAction(tilePosition: MatrixCoordinates2D): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir(`MinesweeperComponent: Requesting game update for primaryAction event (row:${tilePosition.i}, col:${tilePosition.j}).`);
    }
    // Reveal the tile
    this.minesweeper = this.minesweeperService.revealTile(tilePosition);
  }

  /**
   * Receive the secondary action event
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  public onSecondaryAction(tilePosition: MatrixCoordinates2D): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir(`MinesweeperComponent: Requesting game update for secondaryAction event (row:${tilePosition.i}, col:${tilePosition.j}).`);
    }
    // Toggle the tile disabled state
    this.minesweeper = this.minesweeperService.toggleTileDisabledState(tilePosition);
  }

}
