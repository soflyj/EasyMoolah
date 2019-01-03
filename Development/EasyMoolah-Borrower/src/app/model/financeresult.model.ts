export class FinanceResult {
    public ApprovedAmount: number;
    public Bank: string;
    public ImagePath: string;

    constructor(approvedAmount: number, bank: string, imagePath: string) {
        this.ApprovedAmount = approvedAmount;
        this.Bank = bank;
        this.ImagePath = imagePath;
    }
}
