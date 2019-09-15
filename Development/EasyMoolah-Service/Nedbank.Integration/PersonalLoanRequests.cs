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
        public Result RegisterPersonalLoanOfferAsync(string intentId, string offerId, string lightToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = System.Configuration.ConfigurationSettings.AppSettings["client_id"];
            string client_secret = System.Configuration.ConfigurationSettings.AppSettings["client_secret"];
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


                    var method = new HttpMethod("PATCH");
                    string jsonbody = "{\"SelectedOffer\":\"605350\"}";
                    var request = new HttpRequestMessage(method, string.Format(apiUrl))
                    {
                        Content = new StringContent(jsonbody, Encoding.Default, "application/json")
                    };
                    request.Content.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json");


                    var asyncResult = httpClient.SendAsync(request).Result;



                    //apiLog
                    apiLog.Request = "";
                    apiLog.Response = asyncResult.Content.ReadAsStringAsync().Result;
                    apiLog.EndDateTime = DateTime.Now;

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = asyncResult.Content.ReadAsStringAsync().Result; ;
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
