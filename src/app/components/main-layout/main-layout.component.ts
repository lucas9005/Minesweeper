// Angular imports
import { Component, OnInit, Input } from '@angular/core';

// Types imports
import { Route } from '../../interfaces/router.interface';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  // Attributes declaration
  private _verboseMode: boolean;

  // Input attributes
  @Input() public routesList: Array<Route>;

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
      console.dir('Initialized MainLayoutComponent.');
    }
  }

}
