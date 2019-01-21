import { Component, OnInit, NgZone } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import 'linq4js';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

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

    formattedAddress: string;
    Street: string;
    Suburb: string;
    City: string;
    PostalCode: string;
    AutoCompleteMaps: any;

    constructor(public zone: NgZone,
        private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private headerService: HeaderService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(78);
        
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        this.Q14 = new FormGroup({
            'street': new FormControl('', Validators.required),
            'suburb': new FormControl('', Validators.required),
            'city': new FormControl('', Validators.required),
            'postalcode': new FormControl('', Validators.required)
        });
    }
    getAddress(place: object) {
        this.formattedAddress = place['formatted_address'];
        console.log(place);
        // tslint:disable-next-line:max-line-length
        this.Street = place['address_components'].Where(w => w.types[0] === 'street_number').Select(s => s.long_name)[0] + ' ' + place['address_components'][1].long_name;
        this.Suburb = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_2').Select(s => s.long_name)[0];
        this.City = place['address_components'].Where(w => w.types[0] === 'administrative_area_level_1').Select(s => s.long_name)[0];
        this.PostalCode = place['address_components'].Where(w => w.types[0] === 'postal_code').Select(s => s.long_name)[0];
        this.zone.run(() => this.formattedAddress = place['formatted_address']);
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Address?',  this.Q14.value, this.StartTime.toString(), (new Date).toString()));        

        this.router.navigateByUrl('/q15', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq13', { skipLocationChange: true });
    }
}
