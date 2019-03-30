import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import 'linq4js';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { Fincheck } from "src/app/model/fincheck.model";
import { Borrower } from "src/app/model/borrower.model";

@Component({
    selector: 'app-q14',
    templateUrl: './q14.component.html',
    styleUrls: ['../../../assets/css/em_site_theme.css', './q14.component.css'],
    animations: [routerTransition]
})
export class Q14Component implements OnInit {

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

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private fincheck: Fincheck,
        private headerService: HeaderService,
        private borrower: Borrower) { }


    ngOnInit() {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(78);

        this.Answer = this.borrowerService.getPreviousAnswer('q14');

        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        if (this.Answer != null) {
            this.Street = this.Answer[0].street;
            this.Suburb = this.Answer[0].suburb;
            this.City = this.Answer[0].city;
            this.PostalCode = this.Answer[0].postalcode;
        }

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
        this.formattedAddress = place['formatted_address'];
        console.log(place['formatted_address']);
        // tslint:disable-next-line:max-line-length
        this.Street = place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0] + ' ' + place['address_components'][1].long_name;
        this.Suburb = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_2').Select(s => s.long_name)[0];
        this.City = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_1').Select(s => s.long_name)[0];
        this.PostalCode = place['address_components'].Where(w => w.types[0] === 'postal_code').Select(s => s.long_name)[0];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('q14', 'Question', 'Address?', this.Q14.value, this.StartTime.toString(), (new Date).toString()));
        this.borrower.FullAddress = this.Street + ' ' + this.Suburb + ' ' + this.City + ' ' + this.PostalCode;
        this.borrower.StreetName = this.Street;
        this.borrower.SuburbName = this.Suburb;
        this.borrower.CityName = this.City;        
        this.borrower.PostCode = this.PostalCode;

        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    }
}
