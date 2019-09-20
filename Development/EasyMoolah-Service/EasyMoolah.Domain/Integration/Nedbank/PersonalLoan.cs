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
    public class PersonalLoanDomain
    {
        // EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.PersonalLoan personalLoan = new Nedbank.Integration.PersonalLoan();

        /// <summary>
        /// Step 9
        /// https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan
        /// </summary>
        /// <param name="intentRequest"></param>
        /// <param name="lightToken"></param>
        /// <returns></returns>
        public async Task<Model.NedbankAPI.PersonLoanResponse.RootObject> AcceptPersonalLoan(Model.NedbankAPI.PersonLoanRequest.RootObject personalLoanRequest, string lightToken)
        {
            var result = personalLoan.AcceptPersonalLoan(personalLoanRequest, lightToken);
            await LogsDomain.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.NedbankAPI.PersonLoanResponse.RootObject>(result.Output);

            return response;
        }
    }
}
