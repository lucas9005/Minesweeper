// Angular
import { Injectable } from '@angular/core';

// Types
import { Minesweeper, Settings, Board, Tile, MatrixCoordinates2D, Scoreboard } from '../../interfaces/minesweeper.interface';

// Services
import { SettingsService } from '../settings/settings.service';

@Injectable({
  providedIn: 'root'
})
export class MinesweeperService {

  // Attributes declaration
  private _verboseMode: boolean;
  private _secureMode: boolean;
  private _minesweeper: Minesweeper;
  private _minGridWidth: Settings['gridWidth'];
  private _maxGridWidth: Settings['gridWidth'];
  private _minGridHeight: Settings['gridWidth'];
  private _maxGridHeight: Settings['gridWidth'];
  private _minMinesCount: Settings['minesCount'];
  private _shadowGrid: Board['grid'];

  // Dependencies injection
  constructor(private settingsService: SettingsService) {
    // If the verbose mode is enabled displays the service initialization message
    if (this._verboseMode) {
      console.dir('Initialized MinesweeperService.');
    }
    // Attributes initialization
    this._verboseMode = false;
    this._secureMode = false;
    this._minesweeper = null;
    this._minGridWidth = 0;
    this._maxGridWidth = 64;
    this._minGridHeight = 0;
    this._maxGridHeight = 32;
    this._minMinesCount = 0;
    this._shadowGrid = null;
  }

  /**
   * Initializes the settings
   * @param {Settings} settings The game settings
   * @returns {Settings} The game settings
   */
  private _initializeSettings(settings: Settings): Settings {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Settings initialized.');
    }
    // Sets the settings based on difficulty
    switch (settings.difficulty) {
      // Beginner
      case 0:
        settings.gridWidth = 8;
        settings.gridHeight = 8;
        settings.minesCount = 6;
        break;
      // Easy
      case 1:
        settings.gridWidth = 16;
        settings.gridHeight = 8;
        settings.minesCount = 12;
        break;
      // Normal
      case 2:
        settings.gridWidth = 16;
        settings.gridHeight = 16;
        settings.minesCount = 38;
        break;
      // Hard
      case 3:
        settings.gridWidth = 32;
        settings.gridHeight = 16;
        settings.minesCount = 102;
        break;
      // Expert
      case 4:
        settings.gridWidth = 32;
        settings.gridHeight = 32;
        settings.minesCount = 204;
        break;
      // Custom
      default:
        // Overwrite is not required
        break;
    }
    // Normalize the settings
    this._normalizeSettings(settings);
    // Return the settings
    return settings;
  }

  /**
   * Normalizes the settings
   * @param {Settings} settings The game settings
   * @returns {void} Void
   */
  private _normalizeSettings(settings: Settings): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Settings normalized.');
    }
    // Limits the grid width to integer values between 0 and 64
    settings.gridWidth = Math.min(
      Math.max(Math.floor(settings.gridWidth || 0), this._minGridWidth),
      this._maxGridWidth
    );
    // Limits the grid height to integer values between 0 and 32
    settings.gridHeight = Math.min(
      Math.max(Math.floor(settings.gridHeight || 0), this._minGridHeight),
      this._maxGridHeight
    );
    // Limits the mines count to integer values between 0 and the grid size
    settings.minesCount = Math.min(
      Math.max(Math.floor(settings.minesCount || 0), this._minMinesCount),
      settings.gridWidth * settings.gridHeight
    );
  }

  /**
   * Initializes the game board
   * @param {Settings} settings The game settings
   * @returns {Board} The board
   */
  private _initializeBoard(settings: Settings): Board {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Board initialized.');
    }
    // Initialize the board
    const board: Board = {
      grid: this._initializeGrid(settings)
    };
    // Return the board
    return board;
  }

  /**
   * Initializes the grid
   * @param {Settings} settings The game settings
   * @returns {Board['grid']} The grid
   */
  private _initializeGrid(settings: Settings): Board['grid'] {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Grid initialized.');
    }
    // Initialize the grid and shadow grid
    const grid: Board['grid'] = [];
    // Loops the grid rows
    for (let i = 0; i < settings.gridHeight; i++) {
      grid[i] = [];
      // Loops the row columns
      for (let j = 0; j < settings.gridWidth; j++) {
        // Add the tile
        grid[i][j] = this._initializeTile();
      }
    }
    // Set the shadow grid (Deep Clone in Safe Mode)
    this._shadowGrid = (this._secureMode) ? JSON.parse(JSON.stringify(grid)) : grid;
    // Plant the mines in the shadow grid
    this._plantMines(this._shadowGrid, settings.minesCount);
    // Return the grid
    return grid;
  }

  /**
   * Initializes the tile
   * @returns {Tile} The tile
   */
  private _initializeTile(): Tile {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Tile initialized.');
    }
    // Initialize the tile
    const tile = {
      isMine: false,
      isActivated: false,
      isDisabled: false,
      isRevealed: false,
      surroundingMines: null,
    };
    // Return the tile
    return tile;
  }

  /**
   * Plants the mines
   * @param {Board['grid']} grid The grid
   * @param {number} minesCount The amount of mines
   * @returns {void} Void
   */
  private _plantMines(grid: Board['grid'], minesCount: number): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Mines planted.');
    }
    // Loops the mines
    for (let planted = 0; planted < minesCount; planted++) {
      // Search stopper condition
      let search = true;
      // Search randomly an empty tile until the mine is planted
      while (search) {
        // Generate a random position
        const randomPosition: MatrixCoordinates2D
          = { i: Math.floor(Math.random() * grid.length), j: Math.floor(Math.random() * grid[0].length) };
        // If the tile is not a mine
        if (!grid[randomPosition.i][randomPosition.j].isMine) {
          // Plant a mine
          grid[randomPosition.i][randomPosition.j].isMine = true;
          // Stop the search
          search = false;
        }
      }
    }
  }

  /**
   * Counts the surrounding mines
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {number} The count
   */
  private _countSurroundingMines(tilePosition: MatrixCoordinates2D): number {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Surrounding mines counted.');
    }
    // Initialize the counter
    let surroundingMines = 0;
    // Loops the surrounding grid rows
    for (let iOffset = -1; iOffset < 2; iOffset++) {
      // Loops the surrounding grid columns
      for (let jOffset = -1; jOffset < 2; jOffset++) {
        // If the surrounding tile is between the grid boundaries
        if (tilePosition.i + iOffset > -1 && tilePosition.i + iOffset < this._minesweeper.board.grid.length
          && tilePosition.j + jOffset > -1 && tilePosition.j + jOffset < this._minesweeper.board.grid[0].length) {
          // If the surrounding tile is a mine
          if (this._shadowGrid[tilePosition.i + iOffset][tilePosition.j + jOffset].isMine) {
            // Increment the counter
            surroundingMines++;
          }
        }
      }
    }
    // Return the count
    return surroundingMines;
  }

  /**
   * Reveals the surrounding tiles
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  private _revealSurroundingTiles(tilePosition: MatrixCoordinates2D): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Surrounding tiles revealed.');
    }
    // Loops the surrounding grid rows
    for (let iOffset = -1; iOffset < 2; iOffset++) {
      // Loops the surrounding grid columns
      for (let jOffset = -1; jOffset < 2; jOffset++) {
        // If the surrounding tile is between the grid boundaries
        if (tilePosition.i + iOffset > -1 && tilePosition.i + iOffset < this._minesweeper.board.grid.length
          && tilePosition.j + jOffset > -1 && tilePosition.j + jOffset < this._minesweeper.board.grid[0].length) {
          // If the surrounding tile is not a mine
          if (!this._minesweeper.board.grid[tilePosition.i + iOffset][tilePosition.j + jOffset].isMine) {
            // Reveal the tile
            this._revealTile({ i: tilePosition.i + iOffset, j: tilePosition.j + jOffset });
          }
        }
      }
    }
  }

  /**
   * Reveal the tile
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  private _revealTile(tilePosition: MatrixCoordinates2D): void {
    // If the tile is not revealed and not disabled or the game is finished
    if (!this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isRevealed
      && (!this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isDisabled || this._minesweeper.finished)) {
      // If the verbose mode is enabled
      if (this._verboseMode) {
        console.dir(`MinesweeperService: Tile revealed (row:${tilePosition.i}, col:${tilePosition.j}).`);
      }
      // Set the tile as enabled
      this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isDisabled = false;
      // Set the tile as revealed
      this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isRevealed = true;
      // Subtract one to the tiles to reveal left
      --this._minesweeper.scoreboard.tilesToRevealLeft;
      // If the tile is a mine
      if (this._shadowGrid[tilePosition.i][tilePosition.j].isMine) {
        // Set the tile as a mine
        this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isMine = true;
        // If the game isn't finished
        if (!this._minesweeper.finished) {
          // Activate the mine
          this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isActivated = true;
          // End the game
          this._endGame(false);
        }
      } else {
        if (this._minesweeper.scoreboard.tilesToRevealLeft === 0) {
          // End the game
          this._endGame(true);
        } else {
          // Count the surrounding mines
          this._minesweeper.board.grid[tilePosition.i][tilePosition.j].surroundingMines = this._countSurroundingMines(tilePosition);
          // If the tile has no surrounding mines
          if (!this._minesweeper.board.grid[tilePosition.i][tilePosition.j].surroundingMines) {
            // Reveal the surrounding tiles
            this._revealSurroundingTiles(tilePosition);
          }
        }
      }
    }
  }

  /**
   * Toggle the tile disabled state
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  private _toggleTileDisabledState(tilePosition: MatrixCoordinates2D): void {
    // If the tile is not revealed
    if (!this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isRevealed) {
      // If the tile is enabled
      if (!this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isDisabled) {
        // If the verbose mode is enabled
        if (this._verboseMode) {
          console.dir(`MinesweeperService: Tile disabled (row:${tilePosition.i}, col:${tilePosition.j}).`);
        }
        // Set the tile as disabled
        this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isDisabled = true;
        // Subtract one to the mines left
        --this._minesweeper.scoreboard.minesLeft;
      } else {
        // If the verbose mode is enabled
        if (this._verboseMode) {
          console.dir(`MinesweeperService: Tile enabled (row:${tilePosition.i}, col:${tilePosition.j}).`);
        }
        // Set the tile as enabled
        this._minesweeper.board.grid[tilePosition.i][tilePosition.j].isDisabled = false;
        // Add one to the mines left
        ++this._minesweeper.scoreboard.minesLeft;
      }
    }
  }

  /**
   * Initializes the game scoreboard
   * @param {Settings} settings The game settings
   * @returns {Scoreboard} The scoreboard
   */
  private _initializeScoreboard(settings: Settings): Scoreboard {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Scoreboard initialized.');
    }
    // Initialize the scoreboard
    const scoreboard = {
      startTime: null,
      endTime: null,
      completed: null,
      minesLeft: settings.minesCount,
      tilesToRevealLeft: settings.gridWidth * settings.gridHeight - settings.minesCount
    };
    // Return the scoreboard
    return scoreboard;
  }

  /**
   * Checks if the game is started
   * @returns {boolean} Yes or no
   */
  private _isGameStarted(): boolean {
    return this._minesweeper.scoreboard.startTime !== null;
  }

  /**
   * Starts the game
   * @returns {void} Void
   */
  private _startGame(): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Game started.');
    }
    // Set the game start time
    this._minesweeper.scoreboard.startTime = new Date().toISOString();
  }

  /**
   * Ends the game
   * @param {boolean} completed The game completed status
   * @returns {void} Void
   */
  private _endGame(completed: boolean): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Game ended.');
    }
    // Set the game as finished
    this._minesweeper.finished = true;
    // Set the game end time
    this._minesweeper.scoreboard.endTime = new Date().toISOString();
    // Set the game completed status
    this._minesweeper.scoreboard.completed = completed;
    // Loops the grid rows
    for (let i = 0; i < this._minesweeper.board.grid.length; i++) {
      // Loops the grid columns
      for (let j = 0; j < this._minesweeper.board.grid[0].length; j++) {
        // Reveal the tile
        this._revealTile({ i: i, j: j });
      }
    }
  }

  /**
   * Initializes the game
   * @returns {Minesweeper} The game
   */
  public initializeGame(): Minesweeper {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Game initialized.');
    }
    // Gets the game settings
    const settings: Settings = this.settingsService.getSettings();
    // Initialize the game
    this._minesweeper = {
      settings: this._initializeSettings(settings),
      board: this._initializeBoard(JSON.parse(JSON.stringify(settings))),
      scoreboard: this._initializeScoreboard(JSON.parse(JSON.stringify(settings))),
      finished: false
    };
    // Return the game (Deep Clone in Safe Mode)
    return (this._secureMode) ? JSON.parse(JSON.stringify(this._minesweeper)) : this._minesweeper;
  }

  /**
   * Reveal the tile
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {Minesweeper} The game
   */
  public revealTile(tilePosition: MatrixCoordinates2D): Minesweeper {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Game updated.');
    }
    // If the game isn't started
    if (!this._isGameStarted()) {
      // Start the game
      this._startGame();
    }
    // Reveal the tile
    this._revealTile(tilePosition);
    // Return the game (Deep Clone in Safe Mode)
    return (this._secureMode) ? JSON.parse(JSON.stringify(this._minesweeper)) : this._minesweeper;
  }

  /**
   * Toggle the tile disabled state
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {Minesweeper} The game
   */
  public toggleTileDisabledState(tilePosition: MatrixCoordinates2D): Minesweeper {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('MinesweeperService: Game updated.');
    }
    // Toggle the tile disabled state
    this._toggleTileDisabledState(tilePosition);
    // Return the game (Deep Clone in Safe Mode)
    return (this._secureMode) ? JSON.parse(JSON.stringify(this._minesweeper)) : this._minesweeper;
  }

}
