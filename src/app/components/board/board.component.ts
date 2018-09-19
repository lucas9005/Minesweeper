// Angular imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Types imports
import { Board, MatrixCoordinates2D } from '../../interfaces/minesweeper.interface';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  // Attributes declaration
  private _verboseMode: boolean;

  // Input attributes
  @Input() public board: Board;

  // Output events
  @Output() private primaryAction: EventEmitter<MatrixCoordinates2D>;
  @Output() private secondaryAction: EventEmitter<MatrixCoordinates2D>;

  // Dependencies injection
  constructor() {
    // Attributes initialization
    this._verboseMode = false;
    // Output events initialization
    this.primaryAction = new EventEmitter();
    this.secondaryAction = new EventEmitter();
  }

  // On init lifecycle hook
  ngOnInit() {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      // Display the component initialization message
      console.dir('Initialized BoardComponent.');
      // Checks the input attributes
      this._checkInputAttributes();
    }
  }

  /**
   * Checks the input attributes
   * @returns {void} Void
   */
  private _checkInputAttributes(): void {
    // Checks if board -> grid has a value
    (this.gridValue() === null)
      ? console.error('BoardComponent: Input attribute "grid" is required.') : null;
  }

  /**
   * Returns the board -> grid attribute value
   * @returns {Board['grid']} The board grid
   */
  public gridValue(): Board['grid'] {
    return this.board.grid;
  }

  /**
   * Forward the primary action event
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  public onPrimaryAction(tilePosition: MatrixCoordinates2D): void {
    // If the verbose mode is enabled
    (this._verboseMode)
      ? console.dir('BoardComponent: Primary Action event forwarded.') : null;
    // Emmits the event
    this.primaryAction.emit(tilePosition);
  }

  /**
   * Forward the secondary action event
   * @param {MatrixCoordinates2D} tilePosition The tile position
   * @returns {void} Void
   */
  public onSecondaryAction(tilePosition: MatrixCoordinates2D): void {
    // If the verbose mode is enabled
    (this._verboseMode)
      ? console.dir('BoardComponent: Secondary Action event forwarded.') : null;
    // Emmits the event
    this.secondaryAction.emit(tilePosition);
  }

}
