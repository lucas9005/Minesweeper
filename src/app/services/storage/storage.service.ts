// Angular
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // Dependencies injection
  constructor() { }

  /**
   * Sets a value in local storage
   * @param {string} key The key
   * @param {any} value The value
   */
  public setValue(key: string, value: any): void {
    const stringyfiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringyfiedValue);
  }

  /**
   * Gets a value from local storage
   * @param {string} key The key
   * @returns {any} The value
   */
  public getValue(key: string): any {
    const parsedValue = JSON.parse(localStorage.getItem(key));

    return parsedValue;
  }
}
