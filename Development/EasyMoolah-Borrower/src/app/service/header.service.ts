import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable()
export class HeaderService {
    progress = new Subject();
    mode: any; // = new Subject();

    setMode(mode) {
        this.mode.mode = mode;
        console.log('done');
    }
}
