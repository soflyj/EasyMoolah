import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router } from '@angular/router';
import { GoogleMaps } from 'src/app/common/googlemaps.service';
import { Console } from '@angular/core/src/console';

@Component({
    selector: 'app-q14',
    templateUrl: './q14.component.html',
    styleUrls: ['./q14.component.css'],
    animations: [routerTransition]
})
export class Q14Component implements OnInit {

    Street: string;
    Suburb: string;
    City: string;
    PostalCode: string;

    constructor(private router: Router,
        private googlemap: GoogleMaps) { }

    ngOnInit() {
        this.Street = '33333';
    }

    Next() {
        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    }

    Back() {
        this.Street = '55555'
         console.log(this.Street);

        // this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    }

    GetAddress(place: object) {
        console.log("start");
        this.Street = '22222222222222222222';// this.googlemap.getStreetNumber(place);
        // this.Suburb = this.googlemap.getDistrict(place);
        // this.City = this.googlemap.getCity(place);
        // this.PostalCode = this.googlemap.getPostCode(place);
        console.log("end");
        console.log(this.googlemap.getStreetNumber(place) + ' ' + this.googlemap.getStreet(place));
    }
    
}
