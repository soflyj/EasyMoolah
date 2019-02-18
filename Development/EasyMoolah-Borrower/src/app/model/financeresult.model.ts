export class FinanceResult {
    public id: number;
    public company_name: string;
    public company_logo_path: string;
    public company_logo_url: string;
    public company_website_url: string;
    public rank: number;
    public probability: number;    

    constructor(id: number, company_name: string, company_logo_path: string, company_logo_url: string, 
        company_website_url: string, rank: number, probability: number) {
        this.id = id;
        this.company_name = company_name;
        this.company_logo_path = company_logo_path;
        this.company_website_url = company_website_url;
        this.rank = rank;
        this.probability = probability;
    }
}
