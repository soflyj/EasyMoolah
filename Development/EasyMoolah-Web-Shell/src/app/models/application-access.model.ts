import 'rxjs';
import { BaseModel } from './base.model';

export class ApplicationAccessModel extends BaseModel {
    applicationKey: number;
    ipAddress: string;
    MiniApplicationReference: string;
    browser: string;    
    startDate: Date;
    endDate: Date;
}