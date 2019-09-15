import 'rxjs';

export interface MaxAmount {
    Amount: number;
    Currency: number;
}

export interface MinAmount {
    Amount: number;
    Currency: number;
}

export interface InterestRate {
    Rate: number;
    Label: string;
    Description: string;
    Help: any;
}

export interface Term {
    MaxAmount: MaxAmount;
    MinAmount: MinAmount;
    _Term: number;
    InterestRate: InterestRate;
}

export interface PersonalLoanOffers {
    PLOfferId: number;
    Terms: Term[];
}

export interface Links {
    self: string;
}

export interface Meta {
    total_pages: number;
}

export class RootObject {
    PersonalLoanOffers: PersonalLoanOffers;
    Links: Links;
    Meta: Meta;
}