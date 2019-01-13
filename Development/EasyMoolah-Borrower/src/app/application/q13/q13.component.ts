import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

@Component({
    selector: 'app-q13',
    templateUrl: './q13.component.html',
    styleUrls: ['../../../assets/css/em_site_theme.css'],
    animations: [routerTransition]
})
export class Q13Component implements OnInit {

    Q13: FormGroup;
    URL = false;
    StartTime: Date;
    Debug = false;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private headerservice: HeaderService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerservice.progress.next(72);

        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        this.Q13 = new FormGroup({
            'homeowner': new FormControl(
                '',
                [Validators.required]
            ),
        });
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('Question', 'Are you a homeowner?', this.Q13.get('homeowner').value, this.StartTime.toString(), (new Date).toString()));        

        this.router.navigateByUrl('/q14', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq12', { skipLocationChange: true });
    }
}
