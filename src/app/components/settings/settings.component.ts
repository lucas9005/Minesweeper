// Angular
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Angular Material
import { MatSnackBar } from '@angular/material';

// Types
import { Settings } from 'src/app/interfaces/minesweeper.interface';

// Services
import { SettingsService } from 'src/app/services/settings/settings.service';

// Validators
import { maxMinesCountValidator } from 'src/app/validators/settings.validator';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  // Attributes declaration
  private _verboseMode: boolean;
  public settingsForm: FormGroup;

  // Dependencies injection
  constructor(
    private settingsService: SettingsService,
    private snackBar: MatSnackBar
  ) {
    // Attributes initialization
    this._verboseMode = false;
    this.settingsForm = null;
  }

  // On init lifecycle hook
  ngOnInit() {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      // Display the component initialization message
      console.dir('Initialized SettingsComponent.');
    }
    // Loads the settings form
    this.loadSettingsForm();
  }

  /**
   * Loads the settings form
   * @returns {void} Void
   */
  public loadSettingsForm(): void {
    // Reads the settings
    const settings: Settings = this.settingsService.getSettings();
    // Creates the settings form
    this.settingsForm = new FormGroup({
      difficulty: new FormControl(settings.difficulty, {
        validators: [
          Validators.required,
          Validators.min(0),
          Validators.max(5)
        ],
        updateOn: 'change'
      }),
      gridWidth: new FormControl(settings.gridWidth, {
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(64)
        ],
        updateOn: 'change'
      }),
      gridHeight: new FormControl(settings.gridHeight, {
        validators: [
          Validators.required,
          Validators.min(1),
          Validators.max(32)
        ],
        updateOn: 'change'
      }),
      minesCount: new FormControl(settings.minesCount, {
        validators: [
          Validators.required,
          Validators.min(1),
          maxMinesCountValidator
        ],
        updateOn: 'change'
      })
    });
  }

  /**
   * Saves the settings
   * @returns {void} Void
   */
  public onSaveSettings(): void {
    // Validates the form
    if (this.settingsForm.valid) {
      // Maps the settings values
      const settings: Settings = {
        difficulty: this.settingsForm.get('difficulty').value,
        gridWidth: this.settingsForm.get('gridWidth').value,
        gridHeight: this.settingsForm.get('gridHeight').value,
        minesCount: this.settingsForm.get('minesCount').value
      };
      // Save the new settings
      this.settingsService.setSettings(settings);
      // Triggers UI feedback
      this.snackBar.open('Settings saved successfully!', null, {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        panelClass: ['green-snackbar'],
        duration: 3000
      });
    }
  }
}
