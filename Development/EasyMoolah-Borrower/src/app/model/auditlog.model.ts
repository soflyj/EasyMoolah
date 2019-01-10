export class AuditLog {  
  public SessionGUID: string;
  public IPAddress: string;
  public XML: string;
  public StartTime: string;
  public EndTime: string;

  constructor(sessionGUID: string, ipAddress: string, xml: string, startTime: string, endTime: string) {
    this.SessionGUID = sessionGUID;
    this.IPAddress = ipAddress;
    this.XML = xml;
    this.StartTime = startTime;
    this.EndTime = endTime;
  }
}
