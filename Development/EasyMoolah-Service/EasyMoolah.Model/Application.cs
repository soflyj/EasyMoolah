using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Application : Base
    {
        public Nullable<System.Guid> Guid { get; set; }
        public string Reference { get; set; }
        public string FormData { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string Version { get; set; }
    }
}
