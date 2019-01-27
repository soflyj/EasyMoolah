using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Result
    {
        public int resultCode;
        public string result { get; set; }
        public string input { get; set; }
        public string output { get; set; }
        public string error { get; set; }
        public string errorFriendly { get; set; }
        public DateTime startDateTime { get; set; }
        public DateTime endDateTime { get; set; }

        // 0 -   Postive
        // 101 - API
        // 201 - Parameter
        // 301 - CRUD
        // 401 - Email
    }
}
