import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { FincheckOffer } from "src/app/model/fincheck-offer.model";
import { Result } from "src/app/model/Result.model";
import { CommonService } from "src/app/service/common.service";
import { Observable } from 'rxjs';

@Injectable()
export class FincheckService {
    private apiUrl = 'clm/api/claim';

    constructor(
        private readonly commonService: CommonService) {
    }

    GetOffer(fincheckOffer: FincheckOffer): Observable<Result> {
        return this.commonService.getOffer<FincheckOffer>(fincheckOffer, `${this.apiUrl}/CreateClaimPayment`);
    }

    // GetOffer(fincheckOffer: FincheckOffer): Observable<Result> {
    //     return this.commonService.getOffer<FincheckOffer>(fincheckOffer, `${this.apiUrl}/CreateClaimPayment`);
    // }
}
