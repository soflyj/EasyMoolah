using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using EasyMoolah.Model.Fincheck;
using Newtonsoft.Json;

namespace Fincheck.Integration
{
    public class Lead : Base
    {
        private static Result result = new Result();
        public static ApiLog apiLog = new ApiLog();
        private static string JsonBody = "";
        private static string fincheckAPI = "";
        private static string apiUrl = "";

        /// <summary>
        /// POST
        /// Add Leads for a given Intent to Engine
        /// https://engine.fincheck.co.za/api/docs
        /// 2019/03/25
        /// </summary>
        /// <param name="_leadRequest"></param>
        /// <returns></returns>
        public static Result CreateLead(LeadRequest _leadRequest)
        {
            apiUrl = System.Configuration.ConfigurationSettings.AppSettings["Fincheck"].ToString() + "lead";
            fincheckAPI = System.Configuration.ConfigurationSettings.AppSettings["FincheckAPI"].ToString();

            //result
            result.input = "";
            //apiLog
            apiLog.SessionId = _leadRequest.sessionId;
            apiLog.Token = fincheckAPI;
            apiLog.Method = "lead";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartTimeStamp = DateTime.Now;

            if (_leadRequest != null)
            {
                try
                {
                    using (var httpClient = new HttpClient())
                    {
                        httpClient.BaseAddress = new Uri(apiUrl);
                        //Headers
                        httpClient.DefaultRequestHeaders.Accept.Clear();
                        httpClient.DefaultRequestHeaders.Accept.Add(
                            new MediaTypeWithQualityHeaderValue("application/json"));
                        httpClient.DefaultRequestHeaders.Authorization =
                            new AuthenticationHeaderValue("Bearer", fincheckAPI);
                        httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");

                        JsonBody = JsonConvert.SerializeObject(_leadRequest);
                        var dictionary = JsonConvert.DeserializeObject<Dictionary<string, string>>(JsonBody);
                        var content = new FormUrlEncodedContent(dictionary);

                        var asyncResult = httpClient.PostAsync(apiUrl, content).Result;

                        //result
                        result.resultCode = 0;
                        result.output = asyncResult.Content.ReadAsStringAsync().Result;
                        result.result = result.output;
                        //apiLog
                        apiLog.Response = result.output;
                        apiLog.EndTimeStamp = DateTime.Now;
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - /lead/";
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - /lead/";
            }

            return result;
        }
    }
}
