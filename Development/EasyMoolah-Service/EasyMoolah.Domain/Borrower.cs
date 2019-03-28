using System;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using AutoMapper;
using EasyMoolah.Repository;

namespace EasyMoolah.Domain
{
    public class Borrower
    {
        public static async Task<int> InsertBorrower(Repository.Borrower _borrower)
        {
            int response = -1;
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                //Borrower is saved to Easy Moolah
                _borrower.CreateDate = DateTime.Now;
                _borrower.ChangeDate = DateTime.Now;
                _borrower.isActive = true;
                response = Repository.CRUD.commonRepo.InsertBorrower(_borrower);

                //Create lead on Fincheck
                Model.Fincheck.LeadRequest leadRequest = new Model.Fincheck.LeadRequest();
                leadRequest.applicationKey = _borrower.ApplicationKey;
                leadRequest.id_number = _borrower.IdNumber;
                leadRequest.first_name = _borrower.FirstName;
                leadRequest.last_name = _borrower.LastName;
                leadRequest.cell_phone_number = _borrower.MobileNumber;
                leadRequest.email = _borrower.Email;
                leadRequest.intent_id = 2;
                leadRequest.gross_income = Convert.ToInt32(_borrower.GrossMonthlyIncome);
                leadRequest.net_income = Convert.ToInt32(_borrower.NettMonthlyIncome);
                leadRequest.citizen = true;
                leadRequest.debt_review_opt = _borrower.IsUnderDebtReview ? true : false;
                leadRequest.debt_review = _borrower.IsUnderDebtReview ? "yes": "no";
                leadRequest.popi = true;
                leadRequest.loan_amount_required = Convert.ToInt32(_borrower.RequiredLoanAmount);
                leadRequest.repayment_period = _borrower.RepaymentPeriod;
                leadRequest.expenses = Convert.ToInt32(_borrower.TotalMonthlyExpense);
                leadRequest.education = "University";
                leadRequest.city = _borrower.CityName;
                leadRequest.payday = 25;
                leadRequest.province = _borrower.CityName;
                leadRequest.employed = _borrower.EmploymentStatus != "Unemployed" ? true : false;
                leadRequest.employment_period = _borrower.EmploymentStatus != "Unemployed" ? 12 : 0;
                leadRequest.payment_frequency = _borrower.EmploymentStatus != "Unemployed" ? 1 : 0;
                leadRequest.bank_name = _borrower.BankName;
                // leadRequest.credit_score = 0;

                var createLeadResponse = Integration.Lead.CreateLead(leadRequest);

                if (createLeadResponse.resultCode == 0)
                {
                    Model.Notification.ProcessingResults processingResults = new Model.Notification.ProcessingResults();
                    processingResults.applicationKey = _borrower.ApplicationKey;
                    processingResults.isSuccessful = true;
                    processingResults.subject = "Application Successfully created";
                    processingResults.fromAddress = "";
                    processingResults.toAddress = _borrower.Email;
                    processingResults.toAddressName = _borrower.FirstName + " " + _borrower.LastName;
                    processingResults.toAddressTitle = "";

                    await Notification.ProcessingResults(processingResults);
                }
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = 0,
                    Input = "",
                    Output = response.ToString(),
                    Error = "Error saving borrower",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "InsertBorrower",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }

        public static Repository.Borrower GetBorrower(int _key)
        {
            int key = -1;
            Repository.Borrower response = new Repository.Borrower();
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = Repository.CRUD.commonRepo.GetBorrower(_key);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = key,
                    Error = "Error getting application",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "GetBorrower",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }

        public static Repository.Borrower GetBorrowerByApplicationKey(int _applicationkey)
        {
            int key = -1;
            Repository.Borrower response = new Repository.Borrower();
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = Repository.CRUD.commonRepo.GetBorrower(_applicationkey);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = key,
                    Error = "Error getting application",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "GetBorrower",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }

    }
}
