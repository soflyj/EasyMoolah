import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

@Component({
    selector: 'app-q12',
    templateUrl: './q12.component.html',
    styleUrls: ['../../../assets/css/em_site_theme.css'],
    animations: [routerTransition]
})
export class Q12Component implements OnInit {

    Q12: FormGroup;
    URL = false;
    StartTime: Date;
    Debug = false;
    Answer;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private borrowerService: BorrowerService,
        private headerService: HeaderService) { }

    ngOnInit() {
        this.StartTime = new Date();
        this.headerService.mode.next('determinate');
        this.headerService.progress.next(66);

        this.Answer = this.borrowerService.getPreviousAnswer('q12');

        // Not allowed to navigate directly to component
        this.Debug = this.borrowerService.debugMode();
        this.URL = (window.location.href).includes('/application');
        if (!this.URL && !this.Debug) {
            this.router.navigate(['notfound'], { relativeTo: this.route });
        }

        // Reactive validation
        this.Q12 = new FormGroup({
            'dependants': new FormControl(
                this.Answer,
                [Validators.required]
            ),
        });
    }

    Next() {
        // tslint:disable-next-line:max-line-length
        this.borrowerService.addToQuestionLog(new Question('q12', 'Question', 'How many dependants do you have?', this.Q12.get('dependants').value, this.StartTime.toString(), (new Date).toString()));

        this.router.navigateByUrl('/q13', { skipLocationChange: true });
    }

    Back() {
        this.router.navigateByUrl('/bq11', { skipLocationChange: true });
    }
}
