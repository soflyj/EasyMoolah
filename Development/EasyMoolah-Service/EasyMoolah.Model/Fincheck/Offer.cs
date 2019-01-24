using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json.Serialization;

namespace EasyMoolah.Model.Fincheck
{
    public class Offer
    {

    }

    public class OfferRequest
    {
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
        public string popi { get; set; } // yes / no
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
        public string timestamp { get; set; } // yes / no
    }

    public class Accept
    {
        public string hasid { get; set; }
        public int partner_id { get; set; }
    }
}
