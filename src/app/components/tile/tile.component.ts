// Angular imports
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Types imports
import { Tile } from '../../interfaces/minesweeper.interface';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  // Attributes declaration
  private _verboseMode: boolean;

  // Input attributes
  @Input() private tile: Tile;

  // Output events
  @Output() private primaryAction: EventEmitter<void>;
  @Output() private secondaryAction: EventEmitter<void>;

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
      console.dir('Initialized TileComponent.');
      // Checks the input attributes
      this._checkInputAttributes();
    }
  }

  /**
   * Checks the input attributes
   * @returns {void} Void
   */
  private _checkInputAttributes(): void {
    // Checks if tile -> isMine has a value
    (this.isMineValue() === null)
      ? console.error('TileComponent: Input attribute "isMine" is required.') : null;
    // Checks if tile -> isActivated has a value
    (this.isActivatedValue() === null)
      ? console.error('TileComponent: Input attribute "isActivated" is required.') : null;
    // Checks if tile -> isDisabled has a value
    (this.isDisabledValue() === null)
      ? console.error('TileComponent: Input attribute "isDisabled" is required.') : null;
    // Checks if tile -> isRevealed has a value
    (this.isRevealedValue() === null)
      ? console.error('TileComponent: Input attribute "isRevealed" is required.') : null;
    // Checks if tile -> surroundingMines has a value
    (this.surroundingMinesValue() === null)
      ? console.error('TileComponent: Input attribute "surroundingMines" is required.') : null;
  }

  /**
   * Returns the tile -> isMine attribute value
   * @returns {Tile['isMine']} The value
   */
  public isMineValue(): Tile['isMine'] {
    return this.tile.isMine;
  }

  /**
   * Returns the tile -> isActivated attribute value
   * @returns {Tile['isActivated']} The value
   */
  public isActivatedValue(): Tile['isActivated'] {
    return this.tile.isActivated;
  }

  /**
   * Returns the tile -> isDisabled attribute value
   * @returns {Tile['isDisabled']} The value
   */
  public isDisabledValue(): Tile['isDisabled'] {
    return this.tile.isDisabled;
  }

  /**
   * Returns the tile -> isRevealed attribute value
   * @returns {Tile['isRevealed']} The value
   */
  public isRevealedValue(): Tile['isRevealed'] {
    return this.tile.isRevealed;
  }

  /**
   * Returns the tile -> surroundingMines attribute value
   * @returns {Tile['surroundingMines']} The value
   */
  public surroundingMinesValue(): Tile['surroundingMines'] {
    return this.tile.surroundingMines;
  }

  /**
   * Emmits the primary action event
   * @param {Event} event The event
   * @returns {void} Void
   */
  public onPrimaryAction(event: Event): void {
    // If the verbose mode is enabled
    (this._verboseMode)
      ? console.dir('TileComponent: Primary Action event emmited.') : null;
    // Prevents the default behavior
    event.preventDefault();
    // Emmits the event
    this.primaryAction.emit();
  }

  /**
   * Emmits the secondary action event
   * @param {Event} event The event
   * @returns {void} Void
   */
  public onSecondaryAction(event: Event): void {
    // If the verbose mode is enabled
    (this._verboseMode)
      ? console.dir('TileComponent: Secondary Action event emmited.') : null;
    // Prevents the default behavior
    event.preventDefault();
    // Emmits the event
    this.secondaryAction.emit();
  }

}
