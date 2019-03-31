using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class AcceptOffer
    {
        public string toAddress { get; set; }

        public string toAddressTitle { get; set; }

        public string toAddressName { get; set; }

        public string fromAddress { get; set; }

        public string subject { get; set; }

        public string providerName { get; set; }

        public string providerLogo { get; set; }

        public string providerWebsite { get; set; }

        public string probability { get; set; }

        public int applicationKey { get; set; }
    }
}
