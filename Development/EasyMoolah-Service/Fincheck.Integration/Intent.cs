using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using EasyMoolah.Model;

namespace Fincheck.Integration
{
    public class Intent
    {

        private string result = "";
        private Response response = new Response();

        public Response GetIntentById(int? id)
        {            
            var apiUrl = "https://engine.fincheck.co.za/api/v1/intent/" + id;
            response.Input = id.ToString();

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

                        response.ResultCode = 0;
                        response.Output = asyncResult.Content.ReadAsStringAsync().Result;
                        response.Result = response.Output;
                    }
                }
                catch (Exception ex)
                {
                    response.ResultCode = 101;
                    response.Error = ex.InnerException.ToString();
                    response.ErrorFriendly = "Error 101 occurred in Fincheck API - api/v1/intent/" + id;
                }
            }
            else
            {
                response.ResultCode = 201;
                response.Error = "parameter is null";
                response.ErrorFriendly = "Error 201 occurred in Fincheck API - api/v1/intent/" + id;
            }

            return response;
        }

        public Response GetIntent()
        {
            var apiUrl = "https://engine.fincheck.co.za/api/v1/intent";
            response.Input = "";

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

                    response.ResultCode = 0;                    
                    response.Output = asyncResult.Content.ReadAsStringAsync().Result;
                    response.Result = response.Output;
                }
            }
            catch (Exception ex)
            {
                response.ResultCode = 1;
                response.Error = ex.InnerException.ToString();
                response.ErrorFriendly = "Error 101 occurred in Fincheck API - api/v1/intent/";
            }

            return response;
        }
    }
}
