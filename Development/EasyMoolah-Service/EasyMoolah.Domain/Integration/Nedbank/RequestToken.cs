using AutoMapper;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace EasyMoolah.Domain
{
    public class RequestToken
    {
        EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.Token token = new Nedbank.Integration.Token();

        public async Task<Model.Nedbank.RequestTokenLightResponse> GetLightToken()
        {
            var result = token.GetLightToken();
            var response = JsonConvert.DeserializeObject<Model.Nedbank.RequestTokenLightResponse>(result.Output);            

            return response;
        }
    }
}
