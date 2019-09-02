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

        /// <summary>
        /// Step 1
        /// https://apim.nedbank.co.za/static/docs/personal-loans-token
        /// </summary>
        /// <returns></returns>
        public async Task<Model.Nedbank.Token.TokenLightResponse> GetLightToken()
        {
            var result = token.GetLightToken();
            // await logs.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.Nedbank.Token.TokenLightResponse> (result.Output);            

            return response;
        }

        /// <summary>
        /// Step 4
        /// https://apim.nedbank.co.za/static/docs/personal-loans-tokenheavy
        /// </summary>
        /// <param name="code"></param>
        /// <returns></returns>
        public async Task<Model.Nedbank.Token.TokenHeavyResponse> GetHeavyToken(string code)
        {
            var result = token.GetHeavyToken(code);
            await logs.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.Nedbank.Token.TokenHeavyResponse>(result.Output);

            return response;
        }
    }
}
