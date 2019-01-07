using System;
using System.Collections.Generic;
using System.Reflection.Metadata;
using System.Text;

namespace EasyMoolah.Model.Notification
{
    public class Request
    {
        public string ToAddress { get; set; }
        public string ToAddressTitle { get; set; }
        public string ToAddressName { get; set; }
        public string FromAddress { get; set; }
        public string Subject { get; set; }
        public string Template { get; set; }
    }
}
