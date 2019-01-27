using System;
using System.Collections.Generic;

namespace EasyMoolah.Model.Database.Fincheck
{
    public partial class Apilog
    {
        public int Key { get; set; }
        public int Id { get; set; }
        public int? SessionId { get; set; }
        public string Token { get; set; }
        public string Method { get; set; }
        public string Http { get; set; }
        public string Endpoint { get; set; }
        public string Request { get; set; }
        public string Response { get; set; }
        public DateTime TimeStamp { get; set; }
    }
}
