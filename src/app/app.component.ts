// Angular
import { Component, OnInit } from '@angular/core';

// Types imports
import { Route } from './interfaces/router.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Attributes declaration
  private _verboseMode: boolean;
  public routesList: Array<Route>;

  // Dependencies injection
  constructor() {
    // Attributes initialization
    this._verboseMode = false;
    this.routesList = null;
  }

  // On init lifecycle hook
  ngOnInit() {
    // If the verbose mode is enabled
    if (this._verboseMode) {
      // Display the component initialization message
      console.dir('Initialized AppComponent.');
    }
    // Initialize the routes list
    this.routesList = [
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
      },
      {
        routerLink: '/about',
        icon: 'info',
        label: 'About'
      }
    ];
  }

}
