import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Contactform: FormGroup;

  constructor() { }

  ngOnInit() {
    this.Contactform = new FormGroup({
      'fullname': new FormControl(
        null,
        [Validators.required]
      ),
      'email': new FormControl(
        null,
        [Validators.required, Validators.email]
      ),
      'contactnumber': new FormControl(
        null,
        [Validators.required]
      ),
      // 'website': new FormControl(
      //   null,
      //   [Validators.required]
      // ),
      'message': new FormControl(
        null,
        [Validators.required]
      )
    })
  }

  onSubmit() {
   alert("Message sent.") ;
  }

}
