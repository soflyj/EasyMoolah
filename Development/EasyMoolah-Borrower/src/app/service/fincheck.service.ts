import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Fincheck } from "../model/fincheck.model";

@Injectable()
export class FincheckService {

    constructor() {

    }
    
     public fincheck: Fincheck; 

     Save(fincheck: Fincheck) {

        this.fincheck = fincheck;        
    }
}
