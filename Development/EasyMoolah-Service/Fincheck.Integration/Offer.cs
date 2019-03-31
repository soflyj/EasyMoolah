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
    public class Offer: Base
    {
        private static EasyMoolah.Model.Result result = new EasyMoolah.Model.Result();
        public static APILog apiLog = new APILog();
        private static string JsonBody = "";
        private static string fincheckAPI = "";
        private static string apiUrl = "";
        private static string referId = "";

        /// <summary>
        /// POST
        /// Add Leads for a given Intent to Engine, return Offers and accept Offer
        /// https://engine.fincheck.co.za/api/docs
        /// 2019/03/25
        /// </summary>
        /// <param name="offerRequest"></param>
        /// <returns></returns>
        public static EasyMoolah.Model.Result GetOffer(OfferRequest _offerRequest)
        {
            apiUrl = System.Configuration.ConfigurationSettings.AppSettings["Fincheck"].ToString() + "offer";
            fincheckAPI = System.Configuration.ConfigurationSettings.AppSettings["FincheckAPI"].ToString();
            referId = System.Configuration.ConfigurationSettings.AppSettings["referee_id"].ToString();

            //apiLog
            apiLog.ApplicationKey = _offerRequest.applicationKey;
            apiLog.ApiToken = fincheckAPI;
            apiLog.Reference = referId;
            apiLog.Method = "offer";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartDateTime = DateTime.Now;

            if (_offerRequest != null)
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
                            new AuthenticationHeaderValue("Bearer", fincheckAPI);
                        httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");
                        //Reference for Fincheck to know EasyMoolah to calling
                        _offerRequest.referee_id = referId;


                        JsonBody = JsonConvert.SerializeObject(_offerRequest);
                        var dictionary = JsonConvert.DeserializeObject<Dictionary<string, string>>(JsonBody);
                        var content = new FormUrlEncodedContent(dictionary);

                        var asyncResult = httpClient.PostAsync(apiUrl, content).Result;

                        //result
                        result.resultCode = 0;
                        result.result = asyncResult.Content.ReadAsStringAsync().Result;
                        result.input = JsonBody;
                        result.output = result.result;

                        OfferResponse offerResponse = JsonConvert.DeserializeObject<OfferResponse>(result.output);

                        var response = JsonConvert.SerializeObject(offerResponse.matches);

                        //apiLog
                        apiLog.Request = JsonBody;
                        apiLog.Response = result.output;
                        apiLog.EndDateTime = DateTime.Now;
                    }
                }
                catch (Exception ex)
                { 
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - /offer/";
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - /offer/";
            }

            return result;
        }

        /// <summary>
        /// POST
        /// Accept Offer
        /// https://engine.fincheck.co.za/api/docs
        /// 2019/03/25
        /// </summary>
        /// <param name="acceptRequest"></param>
        /// <returns></returns>
        public static EasyMoolah.Model.Result AcceptOffer(AcceptRequest _acceptRequest)
        {
            var apiUrl = System.Configuration.ConfigurationSettings.AppSettings["Fincheck"].ToString() + "accept";
            fincheckAPI = System.Configuration.ConfigurationSettings.AppSettings["FincheckAPI"].ToString();

            //result
            result.input = "";
            //apiLog
            apiLog.ApplicationKey = _acceptRequest.applicationKey;
            apiLog.ApiToken = fincheckAPI;
            apiLog.Method = "accept";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartDateTime = DateTime.Now;

            if (_acceptRequest != null)
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
                            new AuthenticationHeaderValue("Bearer", fincheckAPI);
                        httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");

                        JsonBody = JsonConvert.SerializeObject(_acceptRequest);

                        var asyncResult = httpClient.PostAsync(apiUrl, new StringContent(JsonBody)).Result;

                        //result
                        result.resultCode = 0;
                        result.result = asyncResult.Content.ReadAsStringAsync().Result;
                        result.output =

                        //apiLog
                        apiLog.Request = JsonBody;
                        apiLog.Response = result.output;
                        apiLog.EndDateTime = DateTime.Now;
                    }
                }
                catch (Exception ex)
                {
                    result.resultCode = 101;
                    result.error = ex.InnerException.ToString();
                    result.errorFriendly = "Error 101 occurred in Fincheck API - /accept/";
                }
            }
            else
            {
                result.resultCode = 201;
                result.error = "parameter is null";
                result.errorFriendly = "Error 201 occurred in Fincheck API - /accept/";
            }

            return result;
        }
    }
}
