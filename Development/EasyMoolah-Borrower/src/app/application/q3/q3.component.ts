import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-q3',
  templateUrl: './q3.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q3Component implements OnInit {

  borrowamount_slider: string;
  borrowmonths_slider: string;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerService: HeaderService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(12);
    this.borrowamount_slider = '50000'; // Default range
    this.borrowmonths_slider = '24';

    this.Answer = this.borrowerService.getPreviousAnswer('q3');
    if(this.Answer != '') {
      this.borrowamount_slider = this.Answer;
    }
    
    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q3', 'Question', 'How much do you want to borrow?', this.borrowamount_slider, this.StartTime.toString(), (new Date).toString()));

    this.router.navigateByUrl('/q4', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq2', { skipLocationChange: true });
  }
}
