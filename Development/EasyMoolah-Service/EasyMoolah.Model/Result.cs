using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Result
    {
        public ResultEnum result;        
        public string Input { get; set; }
        public string Output { get; set; }
        public string Error { get; set; }
        public string ErrorFriendly { get; set; }
        public DateTime CapturedDate { get; set; }
    }
}
