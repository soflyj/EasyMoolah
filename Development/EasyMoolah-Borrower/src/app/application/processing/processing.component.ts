import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.go_next();
  }

  go_next() {
    setTimeout(() => {
      this.router.navigateByUrl('/financialresult', { skipLocationChange: true });
      }
      , 3000);
}

}
