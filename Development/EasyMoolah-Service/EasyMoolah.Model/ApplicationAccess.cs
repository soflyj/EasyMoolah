using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class ApplicationAccess : Base
    {
        public Nullable<int> ApplicationKey { get; set; }
        public string IPAddress { get; set; }
        public string Browser { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
    }
}
