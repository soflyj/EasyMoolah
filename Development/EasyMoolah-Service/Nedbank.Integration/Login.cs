using EasyMoolah.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;

namespace Nedbank.Integration
{
    public class Login
    {
        private static EasyMoolah.Model.Result result = new EasyMoolah.Model.Result();
        public static APILog apiLog = new APILog();
        private static string JsonBody = "";
        private static string client_id = "";
        private static string client_secret = "";
        private static string apiUrl = "";

        public static EasyMoolah.Model.Result GetLogin()
        {
            apiUrl = System.Configuration.ConfigurationSettings.AppSettings["NedbankAPI"].ToString() + "nboauth/oauth20/token";
            client_id = System.Configuration.ConfigurationSettings.AppSettings["client_id"].ToString();
            client_secret = System.Configuration.ConfigurationSettings.AppSettings["client_secret"].ToString();


            //result
            result.input = "";
            //apiLog
            apiLog.ApplicationKey = 0;
            apiLog.ApiToken = apiUrl;
            apiLog.Method = "nboauth/oauth20/token";
            apiLog.Http = "Post";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartDateTime = DateTime.Now;

            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(apiUrl);
                    httpClient.DefaultRequestHeaders.Accept.Clear();
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));
                    httpClient.DefaultRequestHeaders.Add("Content-Type", "application/x-www-form-urlencoded");

                    var body = new List<KeyValuePair<string, string>>();
                    body.Add(new KeyValuePair<string, string>("client_id", client_id));
                    body.Add(new KeyValuePair<string, string>("client_secret", client_secret));
                    body.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));
                    body.Add(new KeyValuePair<string, string>("scope", "tpp_client_credential"));
                    
                    var asyncResult = httpClient.PostAsync(apiUrl, new FormUrlEncodedContent(body)).Result;

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
                result.errorFriendly = "Error 101 occurred in Nedbank API - /nboauth/oauth20/token/";
            }


            return result;
        }
    }
}
