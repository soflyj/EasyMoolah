using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.Fincheck
{
    public class Intent
    {        
    }

    public class LeadResponse
    {
        public List<intents> intents { get; set; }
    }

    public class intentFields
    {
        public int id { get; set; }
        public string title { get; set; }
        public bool required { get; set; }
        public string field_name { get; set; }
        public string description { get; set; }
    }

    public class intents
    {
        public int id { get; set; }
        public string title { get; set; }
        public List<intentFields> fields { get; set; }
    }
}
