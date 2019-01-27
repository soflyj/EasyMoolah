using System;
using System.Collections.Generic;

namespace EasyMoolah.Model
{
    public partial class AuditBorrowerApplicationLog
    {
        public int Key { get; set; }
        public int? BorrowerSessionKey { get; set; }
        public string Xml { get; set; }
        public string StageName { get; set; }
        public DateTime? TimeStamp { get; set; }
    }
}
