using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using EasyMoolah.Model;
using Newtonsoft.Json;

namespace Nedbank.Integration
{
    public class PersonalLoanRequests
    {
        public Result RegisterPersonalLoanOffer(string intentId, string offerId, string lightToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-requests/{intentId}";
            apiUrl.Replace("{intentId}", intentId);

            result.Input = intentId + " | " + lightToken;

            apiLog.ApplicationKey = 0; // From FE
            apiLog.ApiToken = lightToken;
            apiLog.Method = "https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-requests/";
            apiLog.Http = "PATCH";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
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

                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("Content-Type", "application/json");
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-fapi-financial-id", "OB/2017/001");
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-id", client_id);
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-secret", client_secret);

                    var body = new List<KeyValuePair<string, string>>();
                    body.Add(new KeyValuePair<string, string>("SelectedOffer", offerId));                  

                    var asyncResult = httpClient.PostAsync(apiUrl, new FormUrlEncodedContent(body)).Result;





                    var asyncResult = httpClient.SendAsync(new HttpRequestMessage(new HttpMethod("PATCH"), apiUrl) { Content = JsonConvert.SerializeObject(body).ToString()});

                    //apiLog
                    apiLog.Request = "";
                    apiLog.Response = asyncResult.Result.Content.ReadAsStringAsync().Result;
                    apiLog.EndDateTime = DateTime.Now;

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = asyncResult.Result.Content.ReadAsStringAsync().Result;
                    result.ApiLog = apiLog;
                }
            }
            catch (Exception ex)
            {
                result.result = ResultEnum.API;
                result.Error = ex.InnerException.ToString();
                result.Error = "Error occurred in Nedbank API - " + apiLog.Method;
            }

            return result;
        }
    }
}
