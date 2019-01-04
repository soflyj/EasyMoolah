import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { BorrowerApplicationLog } from 'src/app/model/borrowerapplicationLog.model';
import 'linq4js';

@Component({
    selector: 'app-q14',
    templateUrl: './q14.component.html',
    styleUrls: ['./q14.component.css'],
    animations: [routerTransition]
})
export class Q14Component implements OnInit {

    Q14: FormGroup;
    URL = false;
    StartTime: Date;

    formattedAddress: string;
    Street: string;
    Suburb: string;
    City: string;
    PostalCode: string;
    AutoCompleteMaps: any;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService) { }

    ngOnInit() {
        this.StartTime = new Date();
        // Not allowed to navigate directly to component
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }

        this.Q14 = new FormGroup({
            'street': new FormControl('', Validators.required),
            'suburb': new FormControl('', Validators.required),
            'city': new FormControl('', Validators.required),
            'postalcode': new FormControl('', Validators.required)
        });
    }
    getAddress(place: object) {
        this.formattedAddress = place['formatted_address'];
        // tslint:disable-next-line:max-line-length
        this.Street = place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0] + ' ' + place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0];
        this.Suburb = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_2').Select(s => s.long_name)[0];
        this.City = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_1').Select(s => s.long_name)[0];
        this.PostalCode = place['address_components'].Where(w => w.types[0] === 'postal_code').Select(s => s.long_name)[0];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addBorrowerApplicationLog(new BorrowerApplicationLog('Question', 'Address?', this.Q14.value, this.StartTime.toString(), (new Date).toString()));

        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    }
}
