import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../common/router.animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/service/borrower.service';
import { HeaderService } from 'src/app/service/header.service';
import { Question } from 'src/app/model/question.model';
import { Fincheck } from "src/app/model/fincheck.model";
import { Borrower } from "src/app/model/borrower.model";

@Component({
  selector: 'app-q9',
  templateUrl: './q9.component.html',
  styleUrls: ['../../../assets/css/em_site_theme.css'],
  animations: [routerTransition]
})
export class Q9Component implements OnInit {

  Q9: FormGroup;
  nettincome_slider: string;
  URL = false;
  Debug = false;
  StartTime: Date;
  Answer;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private borrowerService: BorrowerService,
    private fincheck: Fincheck,
    private headerService: HeaderService,
    private borrower: Borrower) { }

  ngOnInit() {
    this.StartTime = new Date();
    this.headerService.mode.next('determinate');
    this.headerService.progress.next(48);
    this.nettincome_slider = '50000'; // Default range

    this.Answer = this.borrowerService.getPreviousAnswer('q9');

    if (this.Answer != undefined) {
      this.nettincome_slider = this.Answer.toString();
    }

    // Not allowed to navigate directly to component
    this.Debug = this.borrowerService.debugMode();
    this.URL = (window.location.href).includes('/application');
    if (!this.URL && !this.Debug) {
      this.router.navigate(['notfound'], { relativeTo: this.route });
    }

    // Reactive validation
    this.Q9 = new FormGroup({
      'nettincome_slider': new FormControl(
        this.nettincome_slider,
        [Validators.required,
        this.isNettValidate.bind(this)])
    });

  }

  // Only allows numeric values
  isNumeric(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  // Text of amount changes slider
  changeNett(event) {
    this.nettincome_slider = event.target.value;
  }

  //Amount cannot be less than R5000
  isNettValidate(control: FormControl): { [s: string]: boolean } {
    const value = control.value;
    if (value >= 5000) {
      return null; // failed    
    }
    else {
      return { 'GrossValid': true };
    }
  }

  Next() {
    // tslint:disable-next-line:max-line-length
    this.borrowerService.addToQuestionLog(new Question('q9', 'Question', 'What\'s your nett monthly income?', this.Q9.get('nettincome_slider').value, this.StartTime.toString(), (new Date).toString()));
    this.borrower.NettMonthlyIncome = this.Q9.get('nettincome_slider').value;

    this.router.navigateByUrl('/q10', { skipLocationChange: true });
  }

  Back() {
    this.router.navigateByUrl('/bq8', { skipLocationChange: true });
  }
}
