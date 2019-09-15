import 'rxjs';
import { BaseModel } from './base.model';

export class ApiLogModel extends BaseModel {
    ApplicationKey: number | null;
    ApiToken: string;
    Method: string;
    Http: string;
    Endpoint: string;
    Reference: string;
    Request: string;
    Response: string;
    StartDateTime: Date | null;
    EndDateTime: Date | null;
}