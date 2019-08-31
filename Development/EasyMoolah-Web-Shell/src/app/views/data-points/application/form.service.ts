import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormService {

    private stepOneSource: Subject<FormGroup> = new Subject();
    stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();

    private stepTwoSource: Subject<FormGroup> = new Subject();
    stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();

    private stepThreeSource: Subject<FormGroup> = new Subject();
    stepThree: Observable<FormGroup> = this.stepTwoSource.asObservable();

    private stepFourSource: Subject<FormGroup> = new Subject();
    stepFour: Observable<FormGroup> = this.stepTwoSource.asObservable();
    //   mainForm: FormGroup = this._formBuilder.group({
    //     service: ''
    //   })

    constructor(
        private _formBuilder: FormBuilder
    ) {

        // this.stepOne.subscribe(form =>
        //   form.valueChanges.subscribe(val => {
        //     this.mainForm.value.service = val.service
        //   })
        // )
        // this.stepTwo.subscribe(form =>
        //   form.valueChanges.subscribe(val => {
        //     this.mainForm.value.subService = val.subService
        //   })
        // )

    }

    stepReady(form: FormGroup, part) {
        switch (part) {
            case 'one': { this.stepOneSource.next(form) }
            case 'two': { this.stepTwoSource.next(form) }
            case 'three': { this.stepTwoSource.next(form) }
            case 'four': { this.stepTwoSource.next(form) }
        }
    }
}