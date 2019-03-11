using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using EasyMoolah.Model;
using EasyMoolah.Model.Database.Fincheck;
using EasyMoolah.Model.Fincheck;
using Newtonsoft.Json;

namespace Fincheck.Integration
{
    public class Accept: Base
    {
        private Result result = new Result();
        private Apilog apiLog = new Apilog();
        private string JsonBody = "";

        public Result AcceptOffer(AcceptRequest acceptRequest)
        {
            var apiUrl = "https://engine.fincheck.co.za/api/v1/accept/";

            //result
            result.input = "";
            //apiLog
            apiLog.SessionId = acceptRequest.sessionId;
            apiLog.Token = "6aezFnDAcPO5vKoma8eW";
            apiLog.Method = "accept";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartTimeStamp = DateTime.Now;

            if (acceptRequest != null)
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

                        JsonBody = JsonConvert.SerializeObject(acceptRequest);

                        var asyncResult = httpClient.PostAsync(apiUrl, new StringContent(JsonBody)).Result;

                        //result
                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;
                        result.result = result.output;
                        //apiLog
                        apiLog.Response = result.output;
                        apiLog.EndTimeStamp = DateTime.Now;
                        AddApiLog(apiLog);
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/lead/";
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - api/v1/lead/";
            }

            return result;
        }
    }
}
