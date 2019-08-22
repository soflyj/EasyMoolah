import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../services/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HeaderService } from '../../../services/header.service';
import { DataPointModel } from '../../../models/data-point.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-step14',
    templateUrl: './step14.component.html',
    styleUrls: ['../../../../assets/css/em_site_theme.css', './step14.component.css'],
    animations: [routerTransition]
})
export class Step14Component implements OnInit {

    Q14: FormGroup;
    URL = false;
    Debug = false;
    StartTime: Date;
    Answer;

    formattedAddress: string;
    Street: string;
    Suburb: string;
    City: string;
    PostalCode: string;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private headerService: HeaderService) { }

    ngOnInit() {
        // this.StartTime = new Date();
        // this.headerService.mode.next('determinate');
        // this.headerService.progress.next(78);

        // this.Answer = this.borrowerService.getPreviousAnswer('q14');

        // this.Debug = this.borrowerService.debugMode();
        // this.URL = (window.location.href).includes('/application');
        // if (!this.URL && !this.Debug) {
        //     this.router.navigate(['notfound'], { relativeTo: this.route });
        // }

        // if (this.Answer != null) {
        //     this.Street = this.Answer[0].street;
        //     this.Suburb = this.Answer[0].suburb;
        //     this.City = this.Answer[0].city;
        //     this.PostalCode = this.Answer[0].postalcode;
        // }

        // Reactive validation
        this.Q14 = new FormGroup({
            'street': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].street),
                [Validators.required]),
            'suburb': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].suburb),
                [Validators.required]),
            'city': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].city),
                [Validators.required]),
            'postalcode': new FormControl(
                (this.Answer == null ? '' : this.Answer[0].postalcode),
                [Validators.required])
        });
    }
    getAddress(place: object) {
        // this.formattedAddress = place['formatted_address'];
        // console.log(place['formatted_address']);
        // // tslint:disable-next-line:max-line-length
        // this.Street = place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0] + ' ' + place['address_components'][1].long_name;
        // this.Suburb = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_2').Select(s => s.long_name)[0];
        // this.City = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_1').Select(s => s.long_name)[0];
        // this.PostalCode = place['address_components'].Where(w => w.types[0] === 'postal_code').Select(s => s.long_name)[0];
        // this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }

    Next() {
        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    }
}
