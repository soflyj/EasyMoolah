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
            await ApiLog.Insert(Fincheck.Integration.Lead.apiLog);

            return response;
        }

        public static Result GetIntent()
        {
            var response = Fincheck.Integration.Intent.GetIntent();            

            return response;
        }
    }
}
