// Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [
    MinesweeperService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
