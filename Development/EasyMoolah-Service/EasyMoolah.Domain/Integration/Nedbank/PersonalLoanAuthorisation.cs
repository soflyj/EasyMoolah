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

        public async Task<string> GetPersonalLoanAuthorisationURL(string intentId, string lightToken)
        {
            var result = personalLoanAuthorisation.GetPersonalLoanAuthorisationURL(intentId, lightToken);
            var response = result.Output.ToString();

            return response;
        }
    }
}
