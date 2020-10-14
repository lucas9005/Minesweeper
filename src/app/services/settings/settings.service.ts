// Angular
import { Injectable } from '@angular/core';

// Types
import { Settings } from 'src/app/interfaces/minesweeper.interface';

// Services
import { StorageService } from '../storage/storage.service';

// Settings
import { DefaultSettings } from 'src/app/config/settings.config';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  // Dependencies injection
  constructor(private storageService: StorageService) { }

  /**
   * Sets the game settings
   * @param {Settings} settings The settings
   */
  public setSettings(settings: Settings): void {
    this.storageService.setValue('settings', settings);
  }

  /**
   * Gets the game settings
   * @returns {Settings} The settings
   */
  public getSettings(): Settings {
    let settings: Settings = this.storageService.getValue('settings');
    if (!settings) {
      this.setSettings(DefaultSettings);
      settings = DefaultSettings;
    }

    return settings;
  }
}
