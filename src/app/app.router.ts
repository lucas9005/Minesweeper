// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';
import { TileComponent } from './components/tile/tile.component';

const appRoutes: Routes = [
    // Routes
    {
        path: 'game',
        component: MinesweeperComponent
    },
    // Redirections
    {
        path: '',
        redirectTo: '/game',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/game'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
