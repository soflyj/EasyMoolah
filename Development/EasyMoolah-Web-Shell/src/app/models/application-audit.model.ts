import 'rxjs';

export class ApplicationAuditModel {
    key: number;
    applicationKey: number;
    formData: string;
    action: string
    dateStamp: Date;
}