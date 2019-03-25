import * as tslib_1 from "tslib";
import { NgZone, Injectable } from '@angular/core';
var GoogleMaps = /** @class */ (function () {
    function GoogleMaps(zone) {
        this.zone = zone;
    }
    GoogleMaps.prototype.getAddress = function (place) {
        var _this = this;
        this.address = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedAddress = place['formatted_address'];
        this.zone.run(function () { return _this.formattedAddress = place['formatted_address']; });
    };
    GoogleMaps.prototype.getEstablishmentAddress = function (place) {
        var _this = this;
        this.establishmentAddress = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedEstablishmentAddress = place['formatted_address'];
        this.zone.run(function () {
            _this.formattedEstablishmentAddress = place['formatted_address'];
            _this.phone = place['formatted_phone_number'];
        });
    };
    GoogleMaps.prototype.getAddrComponent = function (place, componentTemplate) {
        var result;
        for (var i = 0; i < place.address_components.length; i++) {
            var addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    };
    GoogleMaps.prototype.getStreetNumber = function (place) {
        var COMPONENT_TEMPLATE = { street_number: 'short_name' }, streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    };
    GoogleMaps.prototype.getStreet = function (place) {
        var COMPONENT_TEMPLATE = { route: 'long_name' }, street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    };
    GoogleMaps.prototype.getCity = function (place) {
        var COMPONENT_TEMPLATE = { locality: 'long_name' }, city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    };
    GoogleMaps.prototype.getState = function (place) {
        var COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    };
    GoogleMaps.prototype.getDistrict = function (place) {
        var COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' }, state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    };
    GoogleMaps.prototype.getCountryShort = function (place) {
        var COMPONENT_TEMPLATE = { country: 'short_name' }, countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    };
    GoogleMaps.prototype.getCountry = function (place) {
        var COMPONENT_TEMPLATE = { country: 'long_name' }, country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    };
    GoogleMaps.prototype.getPostCode = function (place) {
        var COMPONENT_TEMPLATE = { postal_code: 'long_name' }, postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    };
    GoogleMaps.prototype.getPhone = function (place) {
        var COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' }, phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    };
    GoogleMaps.prototype.test = function () {
        alert("test");
    };
    GoogleMaps = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [NgZone])
    ], GoogleMaps);
    return GoogleMaps;
}());
export { GoogleMaps };
//# sourceMappingURL=googlemaps.service.js.map