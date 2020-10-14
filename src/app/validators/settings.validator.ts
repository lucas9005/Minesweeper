// Angular
import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

/**
 * Validates the max mines count
 * @param {AbstractControl} control The mines count control
 * @returns {ValidationErrors | null} Void
 */
export const maxMinesCountValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  let hasError = false;
  if (control.parent) {
    const minesCount = control.value;
    const gridWidth = control.parent.get('gridWidth').value;
    const gridHeight = control.parent.get('gridHeight').value;
    hasError = (minesCount > (gridWidth * gridHeight));
  }

  return hasError ? { maxMinesCountExceeded: true } : null;
};
