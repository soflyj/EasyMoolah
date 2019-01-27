using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using EasyMoolah.Model;
using EasyMoolah.Model.Fincheck;
using Newtonsoft.Json;

namespace Fincheck.Integration
{
    public class Intent
    {

        private Result result = new Result();

        public Result GetIntentById(int? id)
        {            
            var apiUrl = "https://engine.fincheck.co.za/api/v1/intent/" + id;
            result.input = id.ToString();

            if (id != 0 && id != null)
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

                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;
                        result.result = result.output;
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/intent/" + id;
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - api/v1/intent/" + id;
            }

            return result;
        }

        public Result GetIntent()
        {
            var apiUrl = "https://engine.fincheck.co.za/api/v1/intent";
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
