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
    public class IntentDomain
    {
        Nedbank.Integration.Intent intent = new Nedbank.Integration.Intent();

        /// <summary>
        /// Step 2
        /// https://apim.nedbank.co.za/static/docs/personal-loans-intent
        /// </summary>
        /// <param name="intentRequest"></param>
        /// <param name="lightToken"></param>
        /// <returns></returns>
        public async Task<Model.NedbankAPI.IntentResponse.RootObject> CreateIntent(Model.NedbankAPI.IntentRequest.RootObject intentRequest, string lightToken, int applicationKey)
        {
            var result = intent.CreateIntent(intentRequest, lightToken, applicationKey);
            LogsDomain.LogIntegration(result);

            var response = JsonConvert.DeserializeObject<Model.NedbankAPI.IntentResponse.RootObject>(result.Output);

            return response;
        }
    }
}
