import 'rxjs';
import { BaseModel } from './base.model';

export class ErrorLogModel extends BaseModel {
    ItemType: string;
    ItemKey: number | null;
    ApplicationKey: number | null;
    Method: string;
    Input: string;
    Output: string;
    Error: string;
    ErrorDescription: string;
    StartDate: Date | null;
    EndDate: Date | null;
}