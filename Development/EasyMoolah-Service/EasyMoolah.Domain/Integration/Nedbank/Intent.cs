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

        public async Task<Model.Nedbank.IntentResponse.RootObject> CreateIntent(Model.Nedbank.IntentRequest.RootObject intentRequest, string lightToken)
        {
            var result = intent.CreateIntent(intentRequest, lightToken);
            
            var response = JsonConvert.DeserializeObject<Model.Nedbank.IntentResponse.RootObject>(result.Output);

            return response;
        }
    }
}
