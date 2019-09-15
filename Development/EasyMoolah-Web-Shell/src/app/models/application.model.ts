import 'rxjs';
import { BaseModel } from './base.model';
import { ApiLogModel } from './apiLog.model';
import { ApplicantModel } from './applicant.model';
import { ApplicationAccessModel } from './application-access.model';
import { ErrorLogModel } from './errorLog.model';
import { ApplicationAuditModel } from './application-audit.model';

export class ApplicationModel extends BaseModel {
    guid: string;
    formData: string;
    startDate: Date;
    endDate: Date;
    version: string;
    // References
    apiLog: ApiLogModel | null;
    applicant: ApplicantModel | null;
    applicationAccess: ApplicationAccessModel | null;
    applicationAudit: ApplicationAuditModel | null;
    errorLog: ErrorLogModel | null;
}