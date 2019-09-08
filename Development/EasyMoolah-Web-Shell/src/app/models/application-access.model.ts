import 'rxjs';

export class ApplicationAccessModel {
    key: number;
    applicationKey: number;
    ipAddress: string;
    MiniApplicationReference: string;
    browser: string;    
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    createdDate: Date;
    changedDate: Date;
}