export class Userable {
    partner_type: string;
    probability_conditions?: any;
}

export class Match {
    id: number;
    company_name: string;
    company_logo_path: string;
    company_logo_url: string;
    company_website_url: string;
    rank: string;
    probability: number;
    userable: Userable;
    live_score: Live_score;
    hasOffers: boolean;
}

export class RootObject {
    matches: Match[];
    id: string;
}

export class Live_score {
    offers: Offers[]
}

export class Offers {
    type: string;
    TermAllowed: number;
    LoanAmount: number;
    InterestRate: number;
}