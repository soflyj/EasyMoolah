using EasyMoolah.Model.NedbankAPI.PersonLoanOffersResponse;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.NedbankAPI.PersonLoanOffersResponse
{
    public class MaxAmount
    {
        public int Amount { get; set; }
        public int Currency { get; set; }
    }

    public class MinAmount
    {
        public int Amount { get; set; }
        public int Currency { get; set; }
    }

    public class InterestRate
    {
        public double Rate { get; set; }
        public string Label { get; set; }
        public string Description { get; set; }
        public object Help { get; set; }
    }

    public class Term
    {
        public MaxAmount MaxAmount { get; set; }
        public MinAmount MinAmount { get; set; }
        [JsonProperty(PropertyName = "Term")]
        public int _Term { get; set; }
        public InterestRate InterestRate { get; set; }
    }

    public class PersonalLoanOffers
    {
        public int PLOfferId { get; set; }
        public List<Term> Terms { get; set; }
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
        public PersonalLoanOffers PersonalLoanOffers { get; set; }
        public Links Links { get; set; }
        public Meta Meta { get; set; }
    }
}

namespace EasyMoolah.Model.NedbankAPI.CustomerFinancialInformation
{
    public class Amount
    {
        [JsonProperty(PropertyName = "Amount")]
        public int _Amount { get; set; }
        public int Currency { get; set; }
    }

    public class Declaration
    {
        public string Label { get; set; }
        public string Description { get; set; }
        public Amount Amount { get; set; }
    }

    public class Financials
    {
        public List<Declaration> Declarations { get; set; }
        public bool Accepted { get; set; }
    }

    public class CustomerFinancials
    {
        public Financials Financials { get; set; }
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
        public CustomerFinancials CustomerFinancials { get; set; }
        public Links Links { get; set; }
        public Meta Meta { get; set; }
    }
}