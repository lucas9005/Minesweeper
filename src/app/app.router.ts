// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { MinesweeperComponent } from './components/minesweeper/minesweeper.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

const appRoutes: Routes = [
    // Routes
    {
        path: 'game',
        component: MinesweeperComponent
    },
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'ranking',
        redirectTo: '/under-construction'
    },
    {
        path: 'under-construction',
        component: UnderConstructionComponent
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
