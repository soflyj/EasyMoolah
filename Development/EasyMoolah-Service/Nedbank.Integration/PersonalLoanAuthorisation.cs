using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using EasyMoolah.Model;

namespace Nedbank.Integration
{
    public class PersonalLoanAuthorisation
    {
        public Result GetPersonalLoanAuthorisationURL(string intentId, string lightToken, int applicationKey)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = System.Configuration.ConfigurationSettings.AppSettings["client_id"];
            // string client_secret = System.Configuration.ConfigurationSettings.AppSettings["client_secret"];
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/nboauth/oauth20/authorize?";
            string redirect = System.Configuration.ConfigurationSettings.AppSettings["redirect"];

            result.Input = intentId + " | " + lightToken;

            apiLog.ApplicationKey = applicationKey;
            apiLog.ApiToken = lightToken;
            apiLog.Method = "nboauth/oauth20/authorize?";
            apiLog.Http = "Get";
            apiLog.Endpoint = apiUrl;
            apiLog.Request = "";
            apiLog.StartDateTime = DateTime.Now;

            try
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.BaseAddress = new Uri(apiUrl);
                    httpClient.DefaultRequestHeaders.Accept.Clear();
                    httpClient.DefaultRequestHeaders.Authorization =
                            new AuthenticationHeaderValue("Bearer", lightToken);
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    var query = HttpUtility.ParseQueryString(string.Empty);
                    query["client_id"] = client_id;
                    query["intentid"] = intentId;
                    query["redirect_uri"] = redirect;
                    query["scope"] = "openid,loans"; // default
                    query["itype"] = "loans"; // default
                    query["state"] = "loans"; // default
                    query["response_type"] = "code"; // default
                    string queryString = query.ToString();

                    var asyncResult = httpClient.GetAsync(apiUrl + queryString).Result;

                    //apiLog
                    apiLog.Request = queryString;
                    apiLog.Response = apiUrl + queryString;
                    apiLog.EndDateTime = DateTime.Now;

                    if (asyncResult.ReasonPhrase.ToUpper() != "BAD REQUEST")
                    {
                        //result
                        result.result = ResultEnum.OK;
                        result.Output = apiUrl + queryString;
                        result.ApiLog = apiLog;
                    }
                    else
                    {
                        //failure
                        result.result = ResultEnum.API;
                        result.Output = "";
                        result.ApiLog = apiLog;
                    }
                }
            }
            catch (Exception ex)
            {
                result.result = ResultEnum.API;
                result.Error = ex.InnerException.ToString();
                result.Error = "Error occurred in Nedbank API - " + apiLog.Method;
            }

            return result;
        }
    }
}
