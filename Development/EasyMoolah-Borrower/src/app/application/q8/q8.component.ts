import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';

@Component({
  selector: 'app-q8',
  templateUrl: './q8.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q8Component implements OnInit {

  grossincome_slider: string;
  URL = false;
  Debug = false;
  StartTime: Date;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private headerservice: HeaderService) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerservice.progress.next(42);
    this.grossincome_slider = '50000'; // Default range

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('Question', 'What\'s your gross monthly income?', this.grossincome_slider, this.StartTime.toString(), (new Date).toString()));            

    this.router.navigateByUrl('/q9', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq7', { skipLocationChange: true });
  }
}
