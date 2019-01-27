using EasyMoolah.Model;
using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Fincheck.Integration
{
    public class Offer
    {
        private Result result = new Result();
        private string jsonBody = "";

        public Result GetOffer(int? id)
        {
            var apiUrl = "https://engine.fincheck.co.za/api/v1/offer";
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


                        // object
                        jsonBody = ""; // JSON Object
                        var content = new StringContent(jsonBody.ToString(), Encoding.UTF8, "application/json");

                        var asyncResult = httpClient.PostAsync(apiUrl, content).Result;

                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;
                        result.result = result.output;
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/offer/" + id;
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - api/v1/offer/" + id;
            }

            return result;
        }
    }
}
