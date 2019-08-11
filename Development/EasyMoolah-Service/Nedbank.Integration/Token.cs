using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model;

namespace Nedbank.Integration
{
    public class Token
    {
        public Result GetLightToken()
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/nboauth/oauth20/token";

            result.Input = "";

            apiLog.ApplicationKey = 0; // From FE
            apiLog.ApiToken = ""; // If a token is used
            apiLog.Method = "nboauth/oauth20/token";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartDateTime = DateTime.Now;

            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(apiUrl);
                    httpClient.DefaultRequestHeaders.Accept.Clear();
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));
                    // httpClient.DefaultRequestHeaders.Add("Content-Type", "application/x-www-form-urlencoded");

                    var body = new List<KeyValuePair<string, string>>();
                    body.Add(new KeyValuePair<string, string>("client_id", client_id));
                    body.Add(new KeyValuePair<string, string>("client_secret", client_secret));
                    body.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));
                    body.Add(new KeyValuePair<string, string>("scope", "tpp_client_credential"));

                    var asyncResult = httpClient.PostAsync(apiUrl, new FormUrlEncodedContent(body)).Result;

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
