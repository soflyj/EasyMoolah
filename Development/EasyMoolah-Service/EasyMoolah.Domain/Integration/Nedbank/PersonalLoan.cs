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
    public class PersonalLoan
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
        public async Task<Model.Nedbank.PersonLoanResponse.RootObject> AcceptPersonalLoan(Model.Nedbank.PersonLoanRequest.RootObject personalLoanRequest, string lightToken)
        {
            var result = personalLoan.AcceptPersonalLoan(personalLoanRequest, lightToken);
            await Logs.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.Nedbank.PersonLoanResponse.RootObject>(result.Output);

            return response;
        }
    }
}
