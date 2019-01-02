import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';
import 'linq4js'; 
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
    selector: 'app-q14',
    templateUrl: './q14.component.html',
    styleUrls: ['./q14.component.css'],
    animations: [routerTransition]
})
export class Q14Component {

    address: Object;
    establishmentAddress: Object;

    formattedAddress: string;
    formattedEstablishmentAddress: string;

    phone: string;

    Street: string;

    constructor(public zone: NgZone) { }

    getAddress(place: object) {
        //this.address = place['formatted_address'];
        //this.phone = this.getPhone(place);
        // this.Street = 'dssdsd';
        this.formattedAddress = place['formatted_address'];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
        this.Street = this.getAddrComponent(place, { street_number: 'short_name' });
        // console.log(this.getAddrComponent(place, { street_number: 'short_name' }));
        console.log(place);
        console.log(place['address_components'].Where(w => w.long_name == 'Boston').Select(s => s.types[0]));
        // this.Street = place['address_components'].Where(w => w.long_name == 'Boston').Select(s => s.long_name)
        //console.log(place['address_components'].Select(x => x.long_name));
    }

    getEstablishmentAddress(place: object) {
        this.establishmentAddress = place['formatted_address'];
        this.phone = this.getPhone(place);
        this.formattedEstablishmentAddress = place['formatted_address'];
        this.zone.run(() => {
            this.formattedEstablishmentAddress = place['formatted_address'];
            this.phone = place['formatted_phone_number'];
        });
    }

    getAddrComponent(place, componentTemplate) {
        let result;

        for (let i = 0; i < place.address_components.length; i++) {
            const addressType = place.address_components[i].types[0];
            if (componentTemplate[addressType]) {
                result = place.address_components[i][componentTemplate[addressType]];
                return result;
            }
        }
        return;
    }

    getStreetNumber(place) {
        const COMPONENT_TEMPLATE = { street_number: 'short_name' },
            streetNumber = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return streetNumber;
    }

    getStreet(place) {
        const COMPONENT_TEMPLATE = { route: 'long_name' },
            street = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return street;
    }

    getCity(place) {
        const COMPONENT_TEMPLATE = { locality: 'long_name' },
            city = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return city;
    }

    getState(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_1: 'short_name' },
            state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }

    getDistrict(place) {
        const COMPONENT_TEMPLATE = { administrative_area_level_2: 'short_name' },
            state = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return state;
    }

    getCountryShort(place) {
        const COMPONENT_TEMPLATE = { country: 'short_name' },
            countryShort = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return countryShort;
    }

    getCountry(place) {
        const COMPONENT_TEMPLATE = { country: 'long_name' },
            country = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return country;
    }

    getPostCode(place) {
        const COMPONENT_TEMPLATE = { postal_code: 'long_name' },
            postCode = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return postCode;
    }

    getPhone(place) {
        const COMPONENT_TEMPLATE = { formatted_phone_number: 'formatted_phone_number' },
            phone = this.getAddrComponent(place, COMPONENT_TEMPLATE);
        return phone;
    }

    test() {
        alert("test");
    }
}
