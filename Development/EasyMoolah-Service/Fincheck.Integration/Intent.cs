using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;

namespace Fincheck.Integration
{
    public class Intent
    {

        private string result = "";

        public string GetIntentById(int id)
        {            
            var apiUrl = "https://engine.fincheck.co.za/api/v1/intent/" + id;

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
