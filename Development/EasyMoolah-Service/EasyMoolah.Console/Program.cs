using System;
using System.Collections.Generic;
using EasyMoolah.Repository;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace EasyMoolah.Console
{
    class Program
    {
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");

            Offer offer = new Offer();
            string json = offer.offerJson.Replace(" ", "");


            //string json = "" +
            //    "{\"PeopleList\":" +
            //    "[" +
            //        "{\"FirstName\":\"Jarrod\",\"LastName\":\"Ramsaroop\"}," +
            //        "{\"FirstName\":\"Keshena\",\"LastName\":\"Munbodh\"}" +
            //  "]}";

            //var parsed = JObject.Parse(json);


            //var temp = CustomerInfo(json);

            var yourObject = JsonConvert.DeserializeObject<RootObject>(json);

            //person.FirstName = parsed.SelectToken("FirstName").Value<string>();

        }

        public static List<Person> CustomerInfo(string json)
        {
            var n = JsonConvert.DeserializeObject(json, new JsonSerializerSettings
            {
                ObjectCreationHandling = ObjectCreationHandling.Replace
            });
            return JsonConvert.DeserializeObject<List<Person>>(json);
        }
    }

    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class People
    {
        public Person[] PeopleList { get; set; }
    }

    public class Userable
    {
        public string partner_type { get; set; }
    }

    public class All
    {
        public int id { get; set; }
        public string company_name { get; set; }
        public string company_logo_path { get; set; }
        public string company_logo_url { get; set; }
        public string company_website_url { get; set; }
        public string rank { get; set; }
        public Userable userable { get; set; }
    }

    public class RootObject
    {
        public List<matches> matches { get; set; }
        public List<All> all { get; set; }
        public string id { get; set; }
    }

    public class matches
    {
        
    }

}