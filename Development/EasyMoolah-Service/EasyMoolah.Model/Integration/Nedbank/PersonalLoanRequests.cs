using EasyMoolah.Model.NedbankAPI.PersonLoanOffersResponse;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.NedbankAPI.PersonalLoanRequestsResponse
{
    public class Data
    {
        public string LoanRequestId { get; set; }
        public string Status { get; set; }
        public string SelectedOffer { get; set; }
        public DateTime CreationDateTime { get; set; }
        public List<string> Permissions { get; set; }
        public DateTime ExpirationDateTime { get; set; }
    }

    public class Links
    {
        public string self { get; set; }
    }

    public class Meta
    {
        [JsonProperty(PropertyName = "total-pages")]
        public int total_pages { get; set; }
    }

    public class RootObject
    {
        public Data Data { get; set; }
        public Links Links { get; set; }
        public Meta Meta { get; set; }
    }
}