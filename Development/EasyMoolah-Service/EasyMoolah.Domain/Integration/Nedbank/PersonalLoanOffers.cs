using AutoMapper;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using Nedbank.Integration;

namespace EasyMoolah.Domain.Integration
{
    public class PersonalLoanOffers
    {
        EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.PersonalLoanOffers personalLoanOffers = new Nedbank.Integration.PersonalLoanOffers();

        /// <summary>
        /// Step 5
        /// https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-offers
        /// </summary>
        /// <param name="loanAmount"></param>
        /// <param name="heavyToken"></param>
        /// <returns></returns>
        public async Task<Model.Nedbank.PersonLoanOffersResponse.RootObject> GetPersonalLoanOffers(string loanAmount, string heavyToken)
        {
            var result = personalLoanOffers.GetPersonalLoanOffers(loanAmount, heavyToken);
            // await logs.LogIntegration(result); Why doesn't this work

            var response = JsonConvert.DeserializeObject<Model.Nedbank.PersonLoanOffersResponse.RootObject>(result.Output);

            return response;
        }

        /// <summary>
        /// Step 6
        /// https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-offers
        /// </summary>
        /// <param name="loanAmount"></param>
        /// <param name="loanTerm"></param>
        /// <param name="heavyToken"></param>
        /// <returns></returns>
        public async Task<Model.Nedbank.PersonLoanOffersResponse.RootObject> GetPersonalLoanOfferDetails(string loanAmount, string loanTerm, string heavyToken)
        {
            var result = personalLoanOffers.GetPersonalLoanOfferDetails(loanAmount, loanTerm, heavyToken);
            // await logs.LogIntegration(result); Why doesn't this work

            var response = JsonConvert.DeserializeObject<Model.Nedbank.PersonLoanOffersResponse.RootObject>(result.Output);

            return response;
        }

        /// <summary>
        /// Step 7
        /// https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-offers/{offerId}/financials
        /// </summary>
        /// <param name="offerId"></param>        
        /// <param name="heavyToken"></param>
        /// <returns></returns>
        public async Task<Model.Nedbank.CustomerFinancialInformation.RootObject> GetCustomerFinancialInformation(string offerId, string heavyToken)
        {
            var result = personalLoanOffers.GetCustomerFinancialInformation(offerId, heavyToken);
            // await logs.LogIntegration(result); Why doesn't this work

            var response = JsonConvert.DeserializeObject<Model.Nedbank.CustomerFinancialInformation.RootObject>(result.Output);

            return response;
        }
    }
}
