using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace EasyMoolah.Model.Fincheck
{
    public class Intent
    {        
    }

    public class LeadResponse
    {
        public List<Intents> intents { get; set; }
    }

    public class IntentFields
    {        
        public int id { get; set; }
        public string title { get; set; }
        public bool required { get; set; }
        public string field_name { get; set; }
        public string description { get; set; }
    }

    public class Intents
    {
        public int id { get; set; }
        public string title { get; set; }
        public List<IntentFields> fields { get; set; }
    }
}
