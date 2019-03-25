using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using EasyMoolah.Model.Fincheck;
using Newtonsoft.Json;

namespace Fincheck.Integration
{
    public class Intent : Base
    {

        private Result result = new Result();
        private ApiLog apiLog = new ApiLog();

        public Result GetIntentById(IntentRequest intentRequest)
        {            
            var apiUrl = "https://engine.fincheck.co.za/api/v1/intent/" + intentRequest.id;

            //result
            result.input = intentRequest.id.ToString();
            //apiLog
            apiLog.SessionId = intentRequest.sessionId;
            apiLog.Token = "6aezFnDAcPO5vKoma8eW";
            apiLog.Method = "intent";
            apiLog.Http = "Get";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = intentRequest.id.ToString();
            apiLog.StartTimeStamp = DateTime.Now;

            if (intentRequest.id != 0 && intentRequest.id != null)
            {
                try
                {
                    using (var httpClient = new HttpClient())
                    {
                        httpClient.BaseAddress = new Uri(apiUrl);
                        httpClient.DefaultRequestHeaders.Accept.Clear();
                        httpClient.DefaultRequestHeaders.Accept.Add(
                            new MediaTypeWithQualityHeaderValue("application/json"));
                        httpClient.DefaultRequestHeaders.Authorization =
                            new AuthenticationHeaderValue("Bearer", "6aezFnDAcPO5vKoma8eW");
                        httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");

                        var asyncResult = httpClient.GetAsync(apiUrl).Result;
                        //result
                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;
                        result.result = result.output;
                        //apiLog
                        apiLog.Response = result.output;
                        apiLog.EndTimeStamp = DateTime.Now;
                        AddApiLog(apiLog);
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/intent/" + intentRequest.id;
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - api/v1/intent/" + intentRequest.id;
            }

            return result;
        }

        public Result GetIntent()
        {
            var apiUrl = "https://dev.engine.fincheck.co.za/api/v1/intent";
            result.input = "";

            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(apiUrl);
                    httpClient.DefaultRequestHeaders.Accept.Clear();
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));
                    httpClient.DefaultRequestHeaders.Authorization =
                        new AuthenticationHeaderValue("Bearer", "6aezFnDAcPO5vKoma8eW");
                    httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");

                    var asyncResult = httpClient.GetAsync(apiUrl).Result;
                    var jsonBody = asyncResult.Content.ReadAsStringAsync().Result;
                    EasyMoolah.Model.Fincheck.Intent intentRepsonse = JsonConvert.DeserializeObject<EasyMoolah.Model.Fincheck.Intent>(jsonBody);

                    result.resultCode = 0;                    
                    result.output = asyncResult.Content.ReadAsStringAsync().Result;
                    result.result = result.output;
                }
            }
            catch (Exception ex)
            {
                result.resultCode = 1;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/intent/";
            }

            return result;
        }
    }
}
