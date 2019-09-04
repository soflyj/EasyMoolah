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
    public class NedbankIntegration
    {
        EasyMoolah.Domain.Logs logs = new Logs();

        /// <summary>
        /// Step
        /// </summary>
        /// <returns></returns>
        public async Task<string> GetAuthorisationLink(int applicationKey, decimal loanAmount)
        {

            EasyMoolah.Domain.Logs logs = new Logs();
            // Step 1
            EasyMoolah.Domain.Integration.Token token = new EasyMoolah.Domain.Integration.Token();

            var lightTokenResult = token.GetLightToken(applicationKey);

            var lightToken = lightTokenResult.Result.access_token.ToString();

            // Step 2
            EasyMoolah.Domain.Integration.Intent intent = new EasyMoolah.Domain.Integration.Intent();

            var intentRequest = new Model.Nedbank.IntentRequest.RootObject()
            {
                Data = new Model.Nedbank.IntentRequest.Data()
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
            EasyMoolah.Domain.Integration.PersonalLoanAuthorisation personalLoanAuthorisation = new EasyMoolah.Domain.Integration.PersonalLoanAuthorisation();

            var personalLoanAuthorisationResult = personalLoanAuthorisation.GetPersonalLoanAuthorisationURL(intentId, lightToken, applicationKey);

            var url = personalLoanAuthorisationResult.Result.ToString();

            var request = new EasyMoolah.Model.Notification.Request()
            {
                applicationKey = 1,
                toAddress = "soflyj@gmail.com",
                toAddressFirstName = "Jarrod",
                toAddressLastName = "Ramsaroop",
                toAddressTitle = "Mr",
            };

            await EasyMoolah.Notification.Nedbank.Nedbank.SendAuthorisation(request, loanAmount, url);

            return "";
        }
    }
}
