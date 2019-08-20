using EasyMoolah.Model.Nedbank.PersonLoanOffersResponse;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.Nedbank.PersonLoanRequest
{
    public class InterestRate
    {
        public string Description { get; set; }
        public object Help { get; set; }
        public string Label { get; set; }
        public double Rate { get; set; }
    }

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

    public class Term
    {
        public InterestRate InterestRate { get; set; }
        public MaxAmount MaxAmount { get; set; }
        public MinAmount MinAmount { get; set; }
        public bool Preferred { get; set; }
        [JsonProperty(PropertyName = "Term")]
        public int _Term { get; set; }
    }

    public class CostMultiplier
    {
        public string Description { get; set; }
        public object Help { get; set; }
        public string Label { get; set; }
        public double Rate { get; set; }
    }

    public class Amount
    {
        [JsonProperty(PropertyName = "Amount")]
        public double _Amount { get; set; }
        public int Currency { get; set; }
    }

    public class InitiationFee
    {
        public Amount Amount { get; set; }
        public object Description { get; set; }
        public string Label { get; set; }
    }

    public class Amount2
    {
        public string Amount { get; set; }
        public int Currency { get; set; }
    }

    public class LoanAmount
    {
        public Amount2 Amount { get; set; }
        public object Description { get; set; }
        public string Label { get; set; }
    }

    public class Amount3
    {
        public double Amount { get; set; }
        public int Currency { get; set; }
    }

    public class TotalLoanAmount
    {
        public Amount3 Amount { get; set; }
        public string Description { get; set; }
        public string Label { get; set; }
    }

    public class LoanDetail
    {
        public CostMultiplier CostMultiplier { get; set; }
        public InitiationFee InitiationFee { get; set; }
        public LoanAmount LoanAmount { get; set; }
        public TotalLoanAmount TotalLoanAmount { get; set; }
    }

    public class Amount4
    {
        public double Amount { get; set; }
        public int Currency { get; set; }
    }

    public class BaseRepaymentAmount
    {
        public Amount4 Amount { get; set; }
        public object Description { get; set; }
        public string Label { get; set; }
    }

    public class Amount5
    {
        public double Amount { get; set; }
        public int Currency { get; set; }
    }

    public class CreditLife
    {
        public Amount5 Amount { get; set; }
        public object Description { get; set; }
        public string Label { get; set; }
    }

    public class Amount6
    {
        public int Amount { get; set; }
        public int Currency { get; set; }
    }

    public class ServiceFee
    {
        public Amount6 Amount { get; set; }
        public object Description { get; set; }
        public string Label { get; set; }
    }

    public class RepaymentDetail
    {
        public BaseRepaymentAmount BaseRepaymentAmount { get; set; }
        public CreditLife CreditLife { get; set; }
        public ServiceFee ServiceFee { get; set; }
    }

    public class Disclaimer
    {
        public bool Accepted { get; set; }
        public string DisclaimerLabel { get; set; }
        public int Disclaimerid { get; set; }
    }

    public class Disclaimers
    {
        public List<string> DataLabels { get; set; }
        [JsonProperty(PropertyName = "Disclaimers")]
        public List<Disclaimer> _Disclaimers { get; set; }
    }

    public class DisclosureDetail
    {
        public string Description { get; set; }
        public int DisclosureDetailId { get; set; }
        public string Label { get; set; }
        public List<object> Options { get; set; }
        public object Selected { get; set; }
    }

    public class Option
    {
        public string Label { get; set; }
        public int OptionsId { get; set; }
    }

    public class Purpose
    {
        public List<Option> Options { get; set; }
    }

    public class Disclosures
    {
        public bool Accepted { get; set; }
        public List<DisclosureDetail> DisclosureDetails { get; set; }
        public string Email { get; set; }
        public Purpose Purpose { get; set; }
    }

    public class TermsAndConditions
    {
        public bool Accepted { get; set; }
        public string Label { get; set; }
        public string Url { get; set; }
    }

    public class Amount7
    {
        public int Amount { get; set; }
        public int Currency { get; set; }
    }

    public class Declaration
    {
        public Amount7 Amount { get; set; }
        public object DeclarationId { get; set; }
        public string Description { get; set; }
        public string Label { get; set; }
    }

    public class Financials
    {
        public bool Accepted { get; set; }
        public List<Declaration> Declarations { get; set; }
    }

    public class PLOffer
    {
        public string PLOfferId { get; set; }
        public List<Term> Terms { get; set; }
        public List<LoanDetail> LoanDetails { get; set; }
        public List<RepaymentDetail> RepaymentDetails { get; set; }
        public Disclaimers Disclaimers { get; set; }
        public Disclosures Disclosures { get; set; }
        public TermsAndConditions TermsAndConditions { get; set; }
        public Financials Financials { get; set; }
    }

    public class RootObject
    {
        public string PLOfferId { get; set; }
        public PLOffer PLOffer { get; set; }
    }
}

namespace EasyMoolah.Model.Nedbank.PersonLoanResponse
{
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
        public string PersonalLoanId { get; set; }
        public string PLStatus { get; set; }
        public string PLOfferId { get; set; }
        public Links Links { get; set; }
        public Meta Meta { get; set; }
    }
}