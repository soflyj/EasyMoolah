using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.Email
{
    public class Response
    {
        public int ResultCode;
        public string Message { get; set; }
        public string Friendly { get; set; }
    }
}
