// Angular imports
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

// Types imports
import { Scoreboard } from '../../interfaces/minesweeper.interface';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit, OnDestroy {

  // Attributes declaration
  private _verboseMode: boolean;
  private _elapsedTimeRef: number;
  public elapsedTime: number;

  // Input attributes
  @Input() public scoreboard: Scoreboard;

  // Output events
  @Output() private reset: EventEmitter<void>;

  // Dependencies injection
  constructor() {
    // Attributes initialization
    this._verboseMode = false;
    this._elapsedTimeRef = null;
    this.elapsedTime = 0;
    // Output events initialization
    this.reset = new EventEmitter();
  }

  // On init lifecycle hook
  ngOnInit() {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      // Display the component initialization message
      console.dir('Initialized ScoreboardComponent.');
      // Checks the input attributes
      this._checkInputAttributes();
    }
    // Starts updating the elapsed time
    this._elapsedTimeRef = window.setInterval(() => { this._updateElapsedTime(); }, 100);
  }

  // On destroy lifecycle hook
  ngOnDestroy() {
    // Stops updating the elapsed time
    clearInterval(this._elapsedTimeRef);
  }

  /**
   * Checks the input attributes
   * @returns {void} Void
   */
  private _checkInputAttributes(): void {
    // Checks if scoreboard -> minesLeft has a value
    if (this.minesLeftValue() === null) {
      console.error('ScoreboardComponent: Input attribute "minesLeft" is required.');
    }
  }

  /**
   * Updates the elapsed time
   * @returns {void} Void
   */
  private _updateElapsedTime(): void {
    // If the game has started
    if (this.startTimeValue()) {
      // If the verbose mode is enabled
      if (this._verboseMode) {
        console.dir('ScoreboardComponent: Elapsed time updated.');
      }
      // Set the start time or current time
      const startTime: number = this._getDate(this.startTimeValue()).getTime();
      // Set the end time or current time
      const endTime: number = this._getDate(this.endTimeValue()).getTime();
      // Set the time difference
      const difference: number = endTime - startTime;
      // Update the elapsed time
      this.elapsedTime = Math.floor(difference / 1000);
    } else {
      // Reset the elapsed time
      this.elapsedTime = 0;
    }
  }

  /**
   * Returns a date
   * @param date The desired date
   * @returns {Date} The date
   */
  private _getDate(date?: string): Date {
    // If a date is specified
    if (date) {
      // Return the specified date
      return new Date(date);
    } else {
      // Return the current date
      return new Date();
    }
  }

  /**
   * Returns the scoreboard -> startTime attribute value
   * @returns {Scoreboard['startTime']} The mines left
   */
  public startTimeValue(): Scoreboard['startTime'] {
    return this.scoreboard.startTime;
  }

  /**
   * Returns the scoreboard -> endTime attribute value
   * @returns {Scoreboard['endTime']} The mines left
   */
  public endTimeValue(): Scoreboard['endTime'] {
    return this.scoreboard.endTime;
  }

  /**
   * Returns the scoreboard -> minesLeft attribute value
   * @returns {Scoreboard['minesLeft']} The mines left
   */
  public minesLeftValue(): Scoreboard['minesLeft'] {
    return this.scoreboard.minesLeft;
  }

  /**
   * Emmits the reset event
   * @returns {void} Void
   */
  public onReset(): void {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      console.dir('ScoreboardComponent: Reset event emitted.');
    }
    // Emmits the event
    this.reset.emit();
  }

}
