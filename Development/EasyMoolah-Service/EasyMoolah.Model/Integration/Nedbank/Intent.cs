using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.NedbankAPI.IntentResponse
{

    public class Data
    {
        public string LoanRequestId { get; set; }
        public string Status { get; set; }
        public string SelectedOffer { get; set; }
        public DateTime CreationDateTime { get; set; }
        public List<string> Permissions { get; set; }
        public DateTime ExpirationDateTime { get; set; }
        public string LoanAmount { get; set; }
    }

    public class PersonalLoanRequest
    {
        public Data Data { get; set; }
    }

    public class Links
    {
        public string self { get; set; }
    }

    public class Meta
    {
        public int total_pages { get; set; }
    }

    public class RootObject
    {
        public PersonalLoanRequest PersonalLoanRequest { get; set; }
        public Links Links { get; set; }
        public Meta Meta { get; set; }
    }
}

namespace EasyMoolah.Model.NedbankAPI.IntentRequest
{
    public class Data
    {
        public List<string> Permissions { get; set; }
        public DateTime ExpirationDateTime { get; set; }
        public string LoanAmount { get; set; }
    }

    public class RootObject
    {
        public Data Data { get; set; }
    }
}