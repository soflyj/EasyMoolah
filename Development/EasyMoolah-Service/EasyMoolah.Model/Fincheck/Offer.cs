using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json.Serialization;

namespace EasyMoolah.Model.Fincheck
{
    public class OfferRequest
    {
        public int sessionId { get; set; }        
        public int id_number { get; set; }
        public string first_name { get; set; }
        public string last_name { get; set; }
        public string cell_phone_number { get; set; }
        public string email { get; set; }
        public string intent { get; set; }
        public int intent_id { get; set; }
        public decimal gross_income { get; set; }
        public decimal net_income { get; set; }
        public bool citizen { get; set; } // true / false
        public string debt_review { get; set; } // yes / no
        public bool debt_review_opt { get; set; } // true / false
        public bool popi { get; set; } // true / false
        public decimal loan_amount_required { get; set; }
        public int repayment_period { get; set; } // in months
        public int expenses { get; set; }
        public string education { get; set; } // retrieved from the api doc
        public string city { get; set; }
        public int payday { get; set; } // day of the month eg. 25
        public string province { get; set; }
        public bool employed { get; set; } // true / false
        public int employment_period { get; set; }  // eg. 1 year
        public int payment_frequency { get; set; }
        public string bank_name { get; set; }
        public int credit_score { get; set; }
        //public string timestamp { get; set; } // yes / no
    }

    public class OfferResponse
    {
        public List<OfferMatches> offerMatches { get; set; }
        public List<OfferAll> offerAll { get; set; }
    }

    public class OfferMatches
    {
        public int id { get; set; }
        public string company_name { get; set; }
        public string company_logo_path { get; set; }
        public string company_logo_url { get; set; }
        public string company_website_url { get; set; }
        public int rank { get; set; }
        public decimal probability { get; set; }
        public string userable { get; set; }
    }

    public class OfferAll
    {
        public int id { get; set; }
        public string company_name { get; set; }
        public string company_logo_path { get; set; }
        public string company_logo_url { get; set; }
        public string company_website_url { get; set; }        
    }
}
