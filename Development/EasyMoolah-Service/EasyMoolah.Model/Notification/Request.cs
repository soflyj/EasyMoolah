using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class Request
    {
        public int applicationKey { get; set; }

        public string toAddress { get; set; }

        public string toAddressTitle { get; set; }

        public string toAddressFirstName { get; set; }

        public string toAddressLastName { get; set; }

        public string fromAddress { get; set; }

        public string subject { get; set; }

        public string body { get; set; }
    }
}
