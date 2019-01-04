using System;
using System.Collections.Generic;

namespace EasyMoolah.API.Models
{
    public partial class AuditBorrowerSession
    {
        public int Key { get; set; }
        public Guid? SessionGuid { get; set; }
        public string Ipaddress { get; set; }
        public string Xml { get; set; }
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
    }
}
