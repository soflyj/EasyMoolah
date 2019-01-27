using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.Fincheck
{
    public class Lead
    {
    }

    public class leadRequest
    {
        public int Id_number { get; set; }
        public string First_name { get; set; }
        public string Last_name { get; set; }
        public string cell_phone_number { get; set; }
        public string email { get; set; }
        public string intent { get; set; }
        public int intent_id { get; set; }
        public decimal gross_income { get; set; }
        public decimal net_income { get; set; }
        public bool citizen { get; set; }
        public string debt_review { get; set; }
        public bool debt_review_opt { get; set; }
        public bool popi { get; set; }
        public decimal loan_amount_required { get; set; }
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

    public class leadResponse
    {
        public int id { get; set; }
        public string status { get; set; }
        public string code { get; set; }
    }
}
