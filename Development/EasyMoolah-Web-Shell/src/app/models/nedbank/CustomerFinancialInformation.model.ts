import 'rxjs';

export interface Amount {
    _Amount: number;
    Currency: number;
}

export interface Declaration {
    Label: string;
    Description: string;
    Amount: Amount;
}

export interface Financials {
    Declarations: Declaration[];
    Accepted: boolean;
}

export interface CustomerFinancials {
    Financials: Financials;
}

export interface Links {
    self: string;
}

export interface Meta {
    total_pages: number;
}

export class RootObject {
    CustomerFinancials: CustomerFinancials;
    Links: Links;
    Meta: Meta;
}