using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;

namespace Fincheck.Integration
{
    public class Intent
    {
        public void getIntentById(int id)
        {
            var apiUrl = "https://jsonplaceholder.typicode.com/todos/" + id;

            HttpClient httpClient = new HttpClient
            {
                BaseAddress = new Uri(apiUrl)
            };
            httpClient.DefaultRequestHeaders.Accept.Clear();
            httpClient.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            //httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "6aezFnDAcPO5vKoma8eW");
            //httpClient.DefaultRequestHeaders.Add("X-Requested-With", "XMLHttpRequest");

            var temp = httpClient.GetAsync(apiUrl).Result;
            string content = temp.Content.ReadAsStringAsync().Result;

            var yourObject = JsonConvert.DeserializeObject<todos>(content);
        }
    }

    public class todos
    {
        public int userId { get; set; }
        public int id { get; set; }
        public string title { get; set; }
        public string completed { get; set; }  
    }
}
