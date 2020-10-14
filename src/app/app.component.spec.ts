// Angular
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatSnackBarModule } from '@angular/material';

// Routers
import { AppRouterModule } from './app.router';

// Entry component
import { AppComponent } from './app.component';

// Components
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

// Services
import { MinesweeperService } from './services/game/minesweeper.service';
import { StorageService } from './services/storage/storage.service';
import { SettingsService } from './services/settings/settings.service';

// Test
describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainLayoutComponent,
        MinesweeperComponent,
        BoardComponent,
        TileComponent,
        ScoreboardComponent,
        SettingsComponent,
        UnderConstructionComponent
      ],
      imports: [
        AppRouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule,
        MatSnackBarModule
      ],
      providers: [
        MinesweeperService,
        StorageService,
        SettingsService,
        {
          provide: APP_BASE_HREF,
          useValue: '/'
        }
      ]
    }).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  // Should create the app
  it('should create the app', async(() => {
    // Assert
    expect(app).toBeTruthy();
  }));

  // Should show the main layout
  it('should show the main layout', () => {
    // Get the main layout element
    const mainLayout = fixture.nativeElement.querySelector('app-main-layout');
    // Assert
    expect(mainLayout).toBeTruthy();
  });

});
