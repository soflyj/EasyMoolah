import * as tslib_1 from "tslib";
import { Component, ViewChild, EventEmitter, Output, Input } from '@angular/core';
// import { } from '@types/googlemaps';
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.setAddress = new EventEmitter();
    }
    AutocompleteComponent.prototype.ngOnInit = function () {
    };
    AutocompleteComponent.prototype.ngAfterViewInit = function () {
        this.getPlaceAutocomplete();
    };
    AutocompleteComponent.prototype.getPlaceAutocomplete = function () {
        var _this = this;
        var autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement, {
            componentRestrictions: { country: 'ZA' },
            types: [this.adressType] // 'establishment' / 'address' / 'geocode'
        });
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            var place = autocomplete.getPlace();
            _this.invokeEvent(place);
        });
    };
    AutocompleteComponent.prototype.invokeEvent = function (place) {
        this.setAddress.emit(place);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AutocompleteComponent.prototype, "adressType", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", EventEmitter)
    ], AutocompleteComponent.prototype, "setAddress", void 0);
    tslib_1.__decorate([
        ViewChild('addresstext'),
        tslib_1.__metadata("design:type", Object)
    ], AutocompleteComponent.prototype, "addresstext", void 0);
    AutocompleteComponent = tslib_1.__decorate([
        Component({
            selector: 'AutocompleteComponent',
            template: "\n      <input class=\"input\"\n        type=\"text\"\n        [(ngModel)]=\"autocompleteInput\"\n        #addresstext style=\"padding: 12px 20px; border: 1px solid #ccc; width: 400px\"\n        >\n    ",
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AutocompleteComponent);
    return AutocompleteComponent;
}());
export { AutocompleteComponent };
//# sourceMappingURL=google-places.component.js.map