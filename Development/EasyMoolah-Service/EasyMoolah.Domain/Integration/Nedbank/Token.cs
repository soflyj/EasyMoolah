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
    public class TokenDomain
    {
        // EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.Token token = new Nedbank.Integration.Token();

        /// <summary>
        /// Step 1
        /// https://apim.nedbank.co.za/static/docs/personal-loans-token
        /// </summary>
        /// <returns></returns>
        public async Task<Model.NedbankAPI.Token.TokenLightResponse> GetLightToken(int applicationKey)
        {
            var result = token.GetLightToken(applicationKey);
            LogsDomain.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.NedbankAPI.Token.TokenLightResponse>(result.Output);

            return response;
        }

        /// <summary>
        /// Step 4
        /// https://apim.nedbank.co.za/static/docs/personal-loans-tokenheavy
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public async Task<Model.NedbankAPI.Token.TokenHeavyResponse> GetHeavyToken(string code)
        {
            var result = token.GetHeavyToken(code);
            LogsDomain.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.NedbankAPI.Token.TokenHeavyResponse>(result.Output);

            return response;
        }
    }
}
