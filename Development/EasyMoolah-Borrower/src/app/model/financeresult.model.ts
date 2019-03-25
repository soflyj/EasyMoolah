export class FinanceResult {
    public id: number;
    public company_name: string;
    public company_logo_path: string;
    public company_logo_url: string;
    public company_website_url: string;
    public rank: number;
    public probability: number;
    public userable: userable;

    constructor(id: number, company_name: string, company_logo_path: string, company_logo_url: string,company_website_url: string, rank: number, probability: number, userable: userable) {
        this.id = id;
        this.company_name = company_name;
        this.company_logo_path = company_logo_path;
        this.company_logo_url = company_logo_url;
        this.company_website_url = company_website_url;
        this.rank = rank;
        this.probability = probability;
        this.userable = userable;
    }
}

export class userable {
    public partner_type: string;

    constructor(partner_type: string) {
        this.partner_type = partner_type;
    }
}

export class matches {
    public financeResult: FinanceResult[];

    constructor(financeResult: FinanceResult[]) {
        this.financeResult = financeResult;
    }
}