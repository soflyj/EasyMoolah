using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.Fincheck
{
    public class Lead
    {
    }

    public class LeadRequest
    {
        public int applicationKey { get; set; }
        public string id_number { get; set; } // Mandatory
        public string first_name { get; set; } // Mandatory
        public string last_name { get; set; } // Mandatory
        public string cell_phone_number { get; set; } // Mandatory
        public string email { get; set; } // Mandatory
        public string intent { get; set; } // Mandatory
        public int intent_id { get; set; } // Mandatory
        public int gross_income { get; set; }
        public int net_income { get; set; }
        public bool citizen { get; set; }
        public string debt_review { get; set; }
        public bool debt_review_opt { get; set; }
        public bool popi { get; set; }
        public int loan_amount_required { get; set; }
        public int repayment_period { get; set; }
        public int expenses { get; set; }
        public string education { get; set; }
        public string city { get; set; }
        public int payday { get; set; }
        public string province { get; set; }
        public bool employed { get; set; }
        public int employment_period { get; set; }
        public int payment_frequency { get; set; }
        public string bank_name { get; set; }
        public int credit_score { get; set; }
    }

    public class LeadResponse
    {
        public int id { get; set; }
        public string status { get; set; }
        public string code { get; set; }
    }
}
