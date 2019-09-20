using AutoMapper;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Nedbank.Integration;

namespace EasyMoolah.Domain.Integration
{
    public class NedbankIntegrationDomain
    {
        EasyMoolah.Domain.LogsDomain logs = new LogsDomain();

        /// <summary>
        /// Step
        /// </summary>
        /// <returns></returns>
        public async Task<string> GenerateAuthorisationLink(int applicationKey, decimal loanAmount)
        {

            EasyMoolah.Domain.LogsDomain logs = new LogsDomain();

            EasyMoolah.Domain.Integration.TokenDomain token = new EasyMoolah.Domain.Integration.TokenDomain();
            EasyMoolah.Domain.Integration.IntentDomain intent = new EasyMoolah.Domain.Integration.IntentDomain();
            EasyMoolah.Domain.Integration.PersonalLoanAuthorisationDomain personalLoanAuthorisation = new EasyMoolah.Domain.Integration.PersonalLoanAuthorisationDomain();

            // Step 1
            var lightTokenResult = token.GetLightToken(applicationKey);
            var lightToken = lightTokenResult.Result.access_token.ToString();

            // Step 2
            var intentRequest = new Model.NedbankAPI.IntentRequest.RootObject()
            {
                Data = new Model.NedbankAPI.IntentRequest.Data()
                {
                    ExpirationDateTime = System.DateTime.Now.AddYears(2),
                    Permissions = new List<string>()
                        { "ReadPersonalLoanOffers", "ReadSalaryInformation", "SubmitPersonalLoanAcceptance"},
                    LoanAmount = loanAmount.ToString()
                }
            };

            var intentResult = intent.CreateIntent(intentRequest, lightToken, applicationKey);
            var intentId = intentResult.Result.PersonalLoanRequest.Data.LoanRequestId.ToString();

            //Step 3
            var personalLoanAuthorisationResult = personalLoanAuthorisation.GetPersonalLoanAuthorisationURL(intentId, lightToken, applicationKey);
            var url = personalLoanAuthorisationResult.Result.ToString();

            //Send email
            //var application = await Application.GetApplicationByKey(applicationKey);
            var applicant = await ApplicantDomain.GetApplicantByApplicationKey(applicationKey);
            var request = new EasyMoolah.Model.Notification.Request()
            {
                applicationKey = applicationKey,
                toAddress = applicant.Email,
                toAddressFirstName = applicant.FirstName,
                toAddressLastName = applicant.LastName,
                toAddressTitle = "",
                fromAddress = "info@easymoolah.co.za"
            };

            await EasyMoolah.Notification.NedbankNofication.SendAuthorisation(request, loanAmount, url, "");

            return "";
        }

        //public async Task<string> GetAuthorisationURL(string guid, string accessCode)
        //{
        //    var application = await Application.GetApplicationByGuid(guid);
        //    //return await Application.GetApplicationAdditionalDetailsByAccessCode(application.Key, accessCode);
        //}
    }
}
