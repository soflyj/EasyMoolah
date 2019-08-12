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
    public class Intent
    {
        EasyMoolah.Domain.Logs logs = new Logs();
        Nedbank.Integration.Intent intent = new Nedbank.Integration.Intent();

        /// <summary>
        /// Step 2
        /// https://apim.nedbank.co.za/static/docs/personal-loans-intent
        /// </summary>
        /// <param name="intentRequest"></param>
        /// <param name="lightToken"></param>
        /// <returns></returns>
        public async Task<Model.Nedbank.IntentResponse.RootObject> CreateIntent(Model.Nedbank.IntentRequest.RootObject intentRequest, string lightToken)
        {
            var result = intent.CreateIntent(intentRequest, lightToken);
            await logs.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.Nedbank.IntentResponse.RootObject>(result.Output);

            return response;
        }
    }
}
