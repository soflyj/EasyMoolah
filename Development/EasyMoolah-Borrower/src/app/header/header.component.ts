import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  progress = 0;
  mode = '';

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
    // Update the progress bar
    this.headerService.progress.subscribe(
      (progress: number) => {
        this.progress = progress;
      }
    )

    this.headerService.mode.subscribe(
      (mode: string) => {
        this.mode = mode;
      }
    )
  }

}
