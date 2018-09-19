// Angular
import { NgModule } from '@angular/core';
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
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

// Services
import { MinesweeperService } from './services/minesweeper.service';

@NgModule({
  declarations: [
    AppComponent,
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
    MinesweeperService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
