import { Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

// @Injectable()
export class HeaderService {
    progress = new Subject();
}