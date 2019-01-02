import { Component } from '@angular/core';
import { routerTransition } from './common/router.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ routerTransition ]
})
export class AppComponent {
  title = 'sample2';

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
