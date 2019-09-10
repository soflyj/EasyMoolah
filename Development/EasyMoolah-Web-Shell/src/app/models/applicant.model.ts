import 'rxjs';
import { BaseModel } from './base.model';

export class ApplicantModel extends BaseModel {
    applicationKey: number | null;
    idNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    landlineNumber: string;
    street: string;
    suburb: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
    longitude: string;
    latitude: string;
}