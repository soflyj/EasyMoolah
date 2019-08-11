using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model;
using Newtonsoft.Json;

namespace Nedbank.Integration
{
    public class Intent
    {
        public Result CreateIntent(EasyMoolah.Model.Nedbank.IntentRequest.RootObject intentRequest, string lightToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-requests";

            result.Input = Newtonsoft.Json.JsonConvert.SerializeObject(intentRequest);

            apiLog.ApplicationKey = 0; // From FE
            apiLog.ApiToken = lightToken; // If a token is used
            apiLog.Method = "open-banking/v1/personal-loan-requests";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = ""; // TODO: Add json
            apiLog.StartDateTime = DateTime.Now;

            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(apiUrl);
                    httpClient.DefaultRequestHeaders.Accept.Clear();
                    httpClient.DefaultRequestHeaders.Authorization =
                            new AuthenticationHeaderValue("Bearer", lightToken);
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));
                    httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");
                    httpClient.DefaultRequestHeaders.Add("x-fapi-financial-id", "OB/2017/001");
                    httpClient.DefaultRequestHeaders.Add("x-ibm-client-id", client_id);
                    httpClient.DefaultRequestHeaders.Add("x-ibm-client-secret", client_secret);

                    var JsonBody = JsonConvert.SerializeObject(intentRequest);
                    var dictionary = JsonConvert.DeserializeObject<Dictionary<string, string>>(JsonBody);
                    var body = new FormUrlEncodedContent(dictionary);


                    var asyncResult = httpClient.PostAsync(apiUrl, body).Result;

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = asyncResult.Content.ReadAsStringAsync().Result;

                    //apiLog
                    apiLog.Request = Newtonsoft.Json.JsonConvert.SerializeObject(body);
                    apiLog.Response = asyncResult.Content.ReadAsStringAsync().Result;
                    apiLog.EndDateTime = DateTime.Now;
                }
            }
            catch (Exception ex)
            {
                result.result = ResultEnum.API;
                result.Error = ex.InnerException.ToString();
                result.Error = "Error occurred in Nedbank API - /nboauth/oauth20/token/";
            }

            return result;
        }
    }
}
