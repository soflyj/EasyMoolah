using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Model.Logs
{
    public class ErrorLog: Base
    {
        public Nullable<int> ApplicationKey { get; set; }
        public string Method { get; set; }
        public string Input { get; set; }
        public string Output { get; set; }
        public string Error { get; set; }
        public string ErrorDescription { get; set; }
        public Nullable<System.DateTime> StartDate { get; set; }
        public Nullable<System.DateTime> EndDate { get; set; }
    }
}
