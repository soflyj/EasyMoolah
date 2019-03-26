using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class ProcessingResults
    {
        public string toAddress { get; set; }

        public string toAddressTitle { get; set; }

        public string toAddressName { get; set; }

        public string fromAddress { get; set; }

        public string subject { get; set; }

        public bool isSuccessful { get; set; }

        public int borrowerId { get; set; }              
    }
}
