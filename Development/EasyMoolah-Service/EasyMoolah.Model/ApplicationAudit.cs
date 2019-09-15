using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class ApplicationAudit
    {
        public Nullable<int> Key { get; set; }
        public int ApplicationKey { get; set; }
        public string FormData { get; set; }
        public string Action { get; set; }
        public Nullable<System.DateTime> DateStamp { get; set; }
    }
}
