import { Subject } from 'rxjs';
// @Injectable()
var HeaderService = /** @class */ (function () {
    function HeaderService() {
        this.progress = new Subject();
        this.mode = new Subject();
    }
    return HeaderService;
}());
export { HeaderService };
//# sourceMappingURL=header.service.js.map