using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.NedbankAPI.Error
{
    public class RootObject
    {
        public string httpCode { get; set; }
        public string httpMessage { get; set; }
        public string moreInformation { get; set; }
    }
}