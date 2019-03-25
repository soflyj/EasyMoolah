using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Model.Borrower
{
    public class Borrower
    {

        public class InsertRequest
        {
            public int Key { get; set; }
            public string IdNumber { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
            public string MobileNumber { get; set; }
            public string LandlineNumber { get; set; }
            public Nullable<decimal> LoanAmount { get; set; }
            public Nullable<bool> IsUnderDebtReview { get; set; }
            public Nullable<bool> IsDeclaredInsolvent { get; set; }
            public Nullable<bool> PermissionToDoCreditCheck { get; set; }
            public string EmploymentStatus { get; set; }
            public Nullable<decimal> GrossMonthlyIncome { get; set; }
            public Nullable<decimal> NettMonthlyIncome { get; set; }
            public Nullable<decimal> TotalMonthlyExpense { get; set; }
            public string BankAccountName { get; set; }
            public Nullable<int> NumberOfDependants { get; set; }
            public string ResidenceType { get; set; }
            public string FullAddress { get; set; }
            public string StreetName { get; set; }
            public string SuburbName { get; set; }
            public string CityName { get; set; }
            public string PostalCode { get; set; }
        }

        public class InsertResponse
        {
            public int Id { get; set; }
        }

    }
}
