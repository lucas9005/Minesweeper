// Angular
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
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
import { AppRouterModule } from '../../app.router';

// Components
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { MinesweeperComponent } from '../minesweeper/minesweeper.component';
import { BoardComponent } from '../board/board.component';
import { TileComponent } from '../tile/tile.component';
import { ScoreboardComponent } from '../scoreboard/scoreboard.component';
import { SettingsComponent } from '../settings/settings.component';
import { UnderConstructionComponent } from '../under-construction/under-construction.component';

// Test
describe('MainLayoutComponent', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;

  // Before each run
  beforeEach(async(() => {
    // Configure
    TestBed.configureTestingModule(
      {
        declarations: [
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
          {
            provide: APP_BASE_HREF,
            useValue: '/'
          }
        ]
      }
    ).compileComponents();
  }));

  // Before each run
  beforeEach(() => {
    // Initialize
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    // Set the routesList input attribute
    component.routesList = [
      {
        routerLink: '/game',
        icon: 'grid_on',
        label: 'Game'
      },
      {
        routerLink: '/settings',
        icon: 'settings',
        label: 'Settings'
      },
      {
        routerLink: '/ranking',
        icon: 'list_alt',
        label: 'Ranking'
      }
    ];
    // Update the component
    fixture.detectChanges();
  });

  // Should create the component
  it('should create the component', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  // Should show the toolbar
  it('should show the toolbar', () => {
    // Get the toolbar element
    const toolbar = fixture.nativeElement.querySelector('.toolbar');
    // Assert
    expect(toolbar).toBeTruthy();
  });

  // Should show the toggle button
  it('should show the toggle button', () => {
    // Get the toggle button element
    const toggleButton = fixture.nativeElement.querySelector('button.toggle-button');
    // Assert
    expect(toggleButton).toBeTruthy();
  });

  // Should show the title
  it('should show the title', () => {
    // Get the title element
    const title = fixture.nativeElement.querySelector('h1.title');
    // Assert
    expect(title).toBeTruthy();
  });

  // Should show the sidenav container
  it('should show the sidenav container', () => {
    // Get the sidenav container element
    const sidenavContainer = fixture.nativeElement.querySelector('.sidenav-container');
    // Assert
    expect(sidenavContainer).toBeTruthy();
  });

  // Should show the sidenav
  it('should show the sidenav', () => {
    // Get the sidenav element
    const sidenav = fixture.nativeElement.querySelector('.sidenav');
    // Assert
    expect(sidenav).toBeTruthy();
  });


  // Should show the sidenav list
  it('should show the sidenav list', () => {
    // Get the sidenav list element
    const sidenavList = fixture.nativeElement.querySelector('.sidenav-list');
    // Assert
    expect(sidenavList).toBeTruthy();
  });

  // Should show the sidenav list items
  it('should show the sidenav list items', () => {
    // Get the sidenav list item elements
    const sidenavListItem = fixture.nativeElement.querySelector('.sidenav-item');
    // Assert
    expect(sidenavListItem).toBeTruthy();
  });

  // Sidenav list items count should be equal to routesList input attribute
  it('sidenav list items count should be equal to routesList input attribute', () => {
    // Get the sidenav list item elements
    const sidenavListItems = fixture.nativeElement.querySelectorAll('.sidenav-item');
    // Get the count
    const count = sidenavListItems.length;
    // Assert
    expect(count).toBe(component.routesList.length);
  });

  // Should show the sidenav content
  it('should show the sidenav content', () => {
    // Get the sidenav content element
    const sidenavContent = fixture.nativeElement.querySelector('.sidenav-content');
    // Assert
    expect(sidenavContent).toBeTruthy();
  });

  // Should show the router outlet
  it('should show the router outlet', () => {
    // Get the router outlet element
    const routerOutlet = fixture.nativeElement.querySelector('router-outlet');
    // Assert
    expect(routerOutlet).toBeTruthy();
  });

});
