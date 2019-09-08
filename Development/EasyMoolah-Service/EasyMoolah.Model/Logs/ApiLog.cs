using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Model.Logs
{
    public class ApiLog: Base
    {
        public Nullable<int> ApplicationKey { get; set; }
        public string ApiToken { get; set; }
        public string Method { get; set; }
        public string Http { get; set; }
        public string Endpoint { get; set; }
        public string Reference { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public Nullable<System.DateTime> StartDateTime { get; set; }
        public Nullable<System.DateTime> EndDateTime { get; set; }
    }
}
