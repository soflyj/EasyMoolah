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
    public class PersonalLoanRequestsDomain
    {
        EasyMoolah.Domain.LogsDomain logs = new LogsDomain();
        Nedbank.Integration.PersonalLoanRequests personalLoaRequests = new Nedbank.Integration.PersonalLoanRequests();

        /// <summary>
        /// Step 8
        /// https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-requests/
        /// </summary>
        /// <param name="intentId"></param>
        /// <param name="lightToken"></param>
        /// <returns></returns>
        public async Task<Model.NedbankAPI.PersonalLoanRequestsResponse.RootObject> RegisterPersonalLoanOffer(string intentId, string offerId, string lightToken)
        {
            var result = personalLoaRequests.RegisterPersonalLoanOfferAsync(intentId, offerId,  lightToken);
            // await logs.LogIntegration(result); Why doesn't this work

            var response = JsonConvert.DeserializeObject<Model.NedbankAPI.PersonalLoanRequestsResponse.RootObject>(result.Output);

            return response;
        }       
    }
}
