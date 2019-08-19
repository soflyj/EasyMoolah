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
    public class PersonalLoanRequests
    {
        EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.PersonalLoanRequests personalLoaRequests = new Nedbank.Integration.PersonalLoanRequests();

        /// <summary>
        /// Step 8
        /// https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-requests/
        /// </summary>
        /// <param name="intentId"></param>
        /// <param name="lightToken"></param>
        /// <returns></returns>
        public async Task<Model.Nedbank.PersonalLoanRequestsResponse.RootObject> RegisterPersonalLoanOffer(string intentId, string offerId, string lightToken)
        {
            var result = personalLoaRequests.RegisterPersonalLoanOffer(intentId, offerId,  lightToken);
            // await logs.LogIntegration(result); Why doesn't this work

            var response = JsonConvert.DeserializeObject<Model.Nedbank.PersonalLoanRequestsResponse.RootObject>(result.Output);

            return response;
        }       
    }
}
