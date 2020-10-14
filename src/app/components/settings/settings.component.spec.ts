// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';

// Components
import { SettingsComponent } from './settings.component';

// Services
import { SettingsService } from 'src/app/services/settings/settings.service';

// Test
describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
          SettingsComponent
        ],
        imports: [
          BrowserAnimationsModule,
          ReactiveFormsModule,
          MatButtonModule,
          MatFormFieldModule,
          MatSelectModule,
          MatCardModule,
          MatSnackBarModule
        ],
        providers: [
          SettingsService
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });
});
