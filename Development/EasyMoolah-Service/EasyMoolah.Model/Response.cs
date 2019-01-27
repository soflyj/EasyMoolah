using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Response
    {
        public int ResultCode;
        public string Result { get; set; }
        public string Input { get; set; }
        public string Output { get; set; }
        public string Error { get; set; }
        public string ErrorFriendly { get; set; }
        public DateTime StartDateTime { get; set; }
        public DateTime EndDateTime { get; set; }

        // 0 -   Postive
        // 101 - API
        // 201 - Parameter
        // 301 - CRUD
        // 401 - Email
    }
}
