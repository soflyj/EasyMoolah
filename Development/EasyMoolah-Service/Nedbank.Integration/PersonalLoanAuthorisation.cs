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
        public Result GetPersonalLoanAuthorisationURL(string intentId, string lightToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/nboauth/oauth20/authorize?";
            string redirect = $"https://easymoolah.co.za";

            result.Input = "";

            apiLog.ApplicationKey = 0; // From FE
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

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = apiUrl + queryString;

                    //apiLog
                    apiLog.Request = queryString;
                    apiLog.Response = apiUrl + queryString;
                    apiLog.EndDateTime = DateTime.Now;
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
