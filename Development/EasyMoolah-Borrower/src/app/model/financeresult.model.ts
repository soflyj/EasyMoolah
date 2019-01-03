export class FinanceResult {
    public ApprovedAmount: number;
    public Bank: string;
    public ImagePath: string;
    public ImageAlt: string;

    constructor(approvedAmount: number, bank: string, imagePath: string, imageAlt: string) {
        this.ApprovedAmount = approvedAmount;
        this.Bank = bank;
        this.ImagePath = imagePath;
        this.ImageAlt = imageAlt;
    }
}
