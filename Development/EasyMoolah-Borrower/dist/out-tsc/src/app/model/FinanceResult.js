var FinanceResult = /** @class */ (function () {
    function FinanceResult(id, company_name, company_logo_path, company_logo_url, company_website_url, rank, probability, userable) {
        this.id = id;
        this.company_name = company_name;
        this.company_logo_path = company_logo_path;
        this.company_logo_url = company_logo_url;
        this.company_website_url = company_website_url;
        this.rank = rank;
        this.probability = probability;
        this.userable = userable;
    }
    return FinanceResult;
}());
export { FinanceResult };
var userable = /** @class */ (function () {
    function userable(partner_type) {
        this.partner_type = partner_type;
    }
    return userable;
}());
export { userable };
// export class FinanceResult {
//     public ApprovedAmount: number;
//     public Bank: string;
//     public ImagePath: string;
//     public ImageAlt: string;
//     constructor(approvedAmount: number, bank: string, imagePath: string, imageAlt: string) {
//         this.ApprovedAmount = approvedAmount;
//         this.Bank = bank;
//         this.ImagePath = imagePath;
//         this.ImageAlt = imageAlt;
//     }
// }
//# sourceMappingURL=FinanceResult.js.map