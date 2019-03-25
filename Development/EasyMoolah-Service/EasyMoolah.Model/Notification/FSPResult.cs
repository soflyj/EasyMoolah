using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class FSPResult
    {
        [JsonRequired]
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }

        [JsonRequired]
        [JsonProperty(PropertyName = "Date")]
        public string Date { get; set; }

        [JsonRequired]
        [JsonProperty(PropertyName = "IsSuccessful")]
        public bool IsSuccessful { get; set; }
    }
}
