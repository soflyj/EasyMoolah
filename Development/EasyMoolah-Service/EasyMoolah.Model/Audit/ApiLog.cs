using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Model.Audit
{
    public class ApiLog
    {
        public int Key { get; set; }
        public int Id { get; set; }
        public Nullable<int> SessionId { get; set; }
        public string Token { get; set; }
        public string Method { get; set; }
        public string Http { get; set; }
        public string Endpoint { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public Nullable<System.DateTime> StartTimeStamp { get; set; }
        public System.DateTime EndTimeStamp { get; set; }
    }
}
