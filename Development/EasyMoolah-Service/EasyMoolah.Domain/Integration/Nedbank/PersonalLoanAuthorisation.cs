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
    public class PersonalLoanAuthorisation
    {
        EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.PersonalLoanAuthorisation personalLoanAuthorisation = new Nedbank.Integration.PersonalLoanAuthorisation();

        /// <summary>
        /// Step 3
        /// https://apim.nedbank.co.za/static/docs/personal-loans-auth
        /// </summary>
        /// <param name="intentId"></param>
        /// <param name="lightToken"></param>
        /// <returns></returns>
        public async Task<string> GetPersonalLoanAuthorisationURL(string intentId, string lightToken)
        {
            var result = personalLoanAuthorisation.GetPersonalLoanAuthorisationURL(intentId, lightToken);
            // await logs.LogIntegration(result);

            var response = result.Output.ToString();

            return response;
        }
    }
}
