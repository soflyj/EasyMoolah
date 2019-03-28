using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model.Fincheck;
using EasyMoolah.Model;

namespace EasyMoolah.Domain.Integration
{
    public class Intent
    {
        public async static Task<Result> GetIntentById(IntentRequest _intentRequest)
        {
            var response = Fincheck.Integration.Intent.GetIntentById(_intentRequest);
            fincheck.InsertApiLog(Fincheck.Integration.Intent.apiLog);

            return response;
        }

        public static async Task<Result> GetIntentAsync()
        {
            var response = Fincheck.Integration.Intent.GetIntent();
            fincheck.InsertApiLog(Fincheck.Integration.Intent.apiLog);

            return response;
        }
    }
}
