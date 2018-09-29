// Angular
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

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

// Services
import { MinesweeperService } from './services/minesweeper.service';

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
        ScoreboardComponent
      ],
      imports: [
        AppRouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule
      ],
      providers: [
        MinesweeperService,
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
