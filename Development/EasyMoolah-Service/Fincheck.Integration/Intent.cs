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

        private static Result result = new Result();
        public static APILog apiLog = new APILog();
        private static string JsonBody = "";
        private static string fincheckAPI = "";
        private static string apiUrl = "";

        public static Result GetIntentById(IntentRequest _intentRequest)
        {
            apiUrl = System.Configuration.ConfigurationSettings.AppSettings["Fincheck"].ToString() + "intent";
            fincheckAPI = System.Configuration.ConfigurationSettings.AppSettings["FincheckAPI"].ToString();

            //result
            result.input = _intentRequest.id.ToString();
            //apiLog
            apiLog.SessionId = _intentRequest.sessionId;
            apiLog.Token = fincheckAPI;
            apiLog.Method = "intent";
            apiLog.Http = "Get";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = _intentRequest.id.ToString();
            apiLog.StartTimeStamp = DateTime.Now;

            if (_intentRequest.id != 0 && _intentRequest.id != null)
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
                            new AuthenticationHeaderValue("Bearer", fincheckAPI);
                        httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");

                        var asyncResult = httpClient.GetAsync(apiUrl).Result;
                        //result
                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;
                        result.result = result.output;
                        //apiLog
                        apiLog.Response = result.output;
                        apiLog.EndTimeStamp = DateTime.Now;
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/intent/" + _intentRequest.id;
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - api/v1/intent/" + _intentRequest.id;
            }

            return result;
        }

        public static Result GetIntent()
        {
            apiUrl = System.Configuration.ConfigurationSettings.AppSettings["Fincheck"].ToString() + "intent";
            fincheckAPI = System.Configuration.ConfigurationSettings.AppSettings["FincheckAPI"].ToString();

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
                        new AuthenticationHeaderValue("Bearer", fincheckAPI);
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
