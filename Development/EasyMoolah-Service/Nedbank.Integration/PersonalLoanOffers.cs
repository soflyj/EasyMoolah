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
    public class PersonalLoanOffers
    {
        public Result GetPersonalLoanOffers(string loanAmount, string heavyToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-offers?";

            result.Input = loanAmount + " | " + heavyToken;

            apiLog.ApplicationKey = 0; // From FE
            apiLog.ApiToken = heavyToken;
            apiLog.Method = "open-banking/v1/personal-loan-offers?";
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
                            new AuthenticationHeaderValue("Bearer", heavyToken);
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-idempotency-key", new Random().Next(1,100).ToString());
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-fapi-financial-id", "OB/2017/001");
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-id", client_id);
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-secret", client_secret);


                    var query = HttpUtility.ParseQueryString(string.Empty);
                    query["loanAmount"] = loanAmount;
                    string queryString = query.ToString();

                    var asyncResult = httpClient.GetAsync(apiUrl + queryString).Result;

                    //apiLog
                    apiLog.Request = "";
                    apiLog.Response = asyncResult.Content.ReadAsStringAsync().Result;
                    apiLog.EndDateTime = DateTime.Now;

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = asyncResult.Content.ReadAsStringAsync().Result;
                    result.ApiLog = apiLog;
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

        public Result GetPersonalLoanOfferDetails(string loanAmount, string loanTerm, string heavyToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-offers?";

            result.Input = loanAmount + " | " + loanTerm + " | " + heavyToken;

            apiLog.ApplicationKey = 0; // From FE
            apiLog.ApiToken = heavyToken;
            apiLog.Method = "open-banking/v1/personal-loan-offers?";
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
                            new AuthenticationHeaderValue("Bearer", heavyToken);
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-idempotency-key", new Random().Next(1, 100).ToString());
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-fapi-financial-id", "OB/2017/001");
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-id", client_id);
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-secret", client_secret);


                    var query = HttpUtility.ParseQueryString(string.Empty);
                    query["loanAmount"] = loanAmount;
                    query["loanTerm"] = loanTerm;
                    string queryString = query.ToString();

                    var asyncResult = httpClient.GetAsync(apiUrl + queryString).Result;

                    //apiLog
                    apiLog.Request = "";
                    apiLog.Response = asyncResult.Content.ReadAsStringAsync().Result;
                    apiLog.EndDateTime = DateTime.Now;

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = asyncResult.Content.ReadAsStringAsync().Result;
                    result.ApiLog = apiLog;
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

        public Result GetCustomerFinancialInformation(string offerId, string heavyToken)
        {
            Result result = new EasyMoolah.Model.Result();
            EasyMoolah.Model.Logs.ApiLog apiLog = new EasyMoolah.Model.Logs.ApiLog();
            string client_id = "123349a9-fb0a-443d-8227-9f05b212e81d";
            string client_secret = "oX5oH1eI2qT7aC8lG7cE6nI6dS7tM2eH7pC1kQ3nP0iX0jE8eP";
            string apiUrl = $"https://api.nedbank.co.za/apimarket/sandbox/open-banking/v1/personal-loan-offers/{offerId}/financials";
            apiUrl.Replace("{offerId}", offerId);


            result.Input = offerId + " | " + heavyToken;

            apiLog.ApplicationKey = 0; // From FE
            apiLog.ApiToken = heavyToken;
            apiLog.Method = "open-banking/v1/personal-loan-offers";
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
                            new AuthenticationHeaderValue("Bearer", heavyToken);
                    httpClient.DefaultRequestHeaders.Accept.Add(
                        new MediaTypeWithQualityHeaderValue("application/json"));

                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-idempotency-key", new Random().Next(1, 100).ToString());
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-fapi-financial-id", "OB/2017/001");
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-id", client_id);
                    httpClient.DefaultRequestHeaders.TryAddWithoutValidation("x-ibm-client-secret", client_secret);

                    var asyncResult = httpClient.GetAsync(apiUrl).Result;

                    //apiLog
                    apiLog.Request = "";
                    apiLog.Response = asyncResult.Content.ReadAsStringAsync().Result;
                    apiLog.EndDateTime = DateTime.Now;

                    //result
                    result.result = ResultEnum.OK;
                    result.Output = asyncResult.Content.ReadAsStringAsync().Result;
                    result.ApiLog = apiLog;
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
