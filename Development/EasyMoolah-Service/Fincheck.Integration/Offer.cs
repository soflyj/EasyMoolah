using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using EasyMoolah.Model;
using EasyMoolah.Model.Audit;
using EasyMoolah.Model.Fincheck;
using Newtonsoft.Json;

namespace Fincheck.Integration
{
    public class Offer: Base
    {
        private Result result = new Result();
        private ApiLog apiLog = new ApiLog();
        private string JsonBody = "";

        public Result GetOffer(OfferRequest offerRequest)
        {
            var apiUrl = "https://dev.engine.fincheck.co.za/api/v1/offer/";

            //result
            result.input = "";
            //apiLog
            apiLog.SessionId = offerRequest.sessionId;
            apiLog.Token = "6aezFnDAcPO5vKoma8eW";
            apiLog.Method = "offer";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartTimeStamp = DateTime.Now;

            if (offerRequest != null)
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

                        JsonBody = JsonConvert.SerializeObject(offerRequest);
                        var dictionary = JsonConvert.DeserializeObject<Dictionary<string, string>>(JsonBody);
                        var content = new FormUrlEncodedContent(dictionary);

                        var asyncResult = httpClient.PostAsync(apiUrl, content).Result;

                        //result
                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;

                        OfferResponse offerResponse = JsonConvert.DeserializeObject<OfferResponse>(result.output);

                        var response = JsonConvert.SerializeObject(offerResponse.matches);

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
                    result.errorFriendly = "Error 101 occurred in Fincheck API - api/v1/offer/";
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - api/v1/offer/";
            }

            return result;
        }

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
