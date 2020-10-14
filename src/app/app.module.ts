// Angular
import { NgModule } from '@angular/core';
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

@NgModule({
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
    SettingsService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
