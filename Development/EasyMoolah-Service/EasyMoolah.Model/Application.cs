using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Application
    {
        public int Key { get; set; }
        public Nullable<System.Guid> Guid { get; set; }
        public string IPAddress { get; set; }
        public string Browser { get; set; }
        public string FormData { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
        public string Version { get; set; }
        public Nullable<bool> IsActive { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> ChangedDate { get; set; }
    }
}
