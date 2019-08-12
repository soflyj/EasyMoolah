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

        public async Task<Model.Nedbank.Token.TokenLightResponse> GetLightToken()
        {
            var result = token.GetLightToken();
            var response = JsonConvert.DeserializeObject<Model.Nedbank.Token.TokenLightResponse> (result.Output);            

            return response;
        }

        public async Task<Model.Nedbank.Token.TokenHeavyResponse> GetHeavyToken(string code)
        {
            var result = token.GetHeavyToken(code);
            var response = JsonConvert.DeserializeObject<Model.Nedbank.Token.TokenHeavyResponse>(result.Output);

            return response;
        }
    }
}
