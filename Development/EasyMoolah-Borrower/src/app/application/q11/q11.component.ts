import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { Question } from 'src/app/model/question.model';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-q11',
  templateUrl: './q11.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q11Component implements OnInit {

  Q11: FormGroup;
  URL = false;
  Debug = false;
  StartTime: Date;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(60);

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
        this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    this.Q11 = new FormGroup({
      'bank': new FormControl(
        '',
        [Validators.required]
      ),
    });
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('Question', 'With which bank do you have an account?', this.Q11.get('bank').value, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q12', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq10', { skipLocationChange: true });
  }
}
