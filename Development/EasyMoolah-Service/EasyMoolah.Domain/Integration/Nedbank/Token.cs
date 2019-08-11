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
    public class Token
    {
        EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.Token token = new Nedbank.Integration.Token();

        public async Task<Model.Nedbank.TokenLightResponse> GetLightToken()
        {
            var result = token.GetLightToken();
            var response = JsonConvert.DeserializeObject<Model.Nedbank.TokenLightResponse> (result.Output);            

            return response;
        }
    }
}
