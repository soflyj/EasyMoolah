using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Fincheck.Integration
{
    public class Offer
    {
        private string result = "";
        private string jsonBody = "";

        public string GetOffer(int id)
        {
            var apiUrl = "https://engine.fincheck.co.za/api/v1/offer";

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

                    result = asyncResult.Content.ReadAsStringAsync().Result;
                }
            }
            catch (Exception ex)
            {
                result = "Failed to call intent - " + ex.InnerException.ToString();
            }

            return result;
        }
    }
}
