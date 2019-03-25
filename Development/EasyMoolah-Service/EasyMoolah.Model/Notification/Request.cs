using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class Request
    {
        [JsonRequired]
        [JsonProperty(PropertyName = "ToAddress")]
        public string ToAddress { get; set; }
        [JsonRequired]
        [JsonProperty(PropertyName = "ToAddressTitle")]
        public string ToAddressTitle { get; set; }
        [JsonRequired]
        [JsonProperty(PropertyName = "ToAddressName")]
        public string ToAddressName { get; set; }
        [JsonRequired]
        [JsonProperty(PropertyName = "FromAddress")]
        public string FromAddress { get; set; }
        [JsonRequired]
        [JsonProperty(PropertyName = "Subject")]
        public string Subject { get; set; }
        [JsonRequired]
        [JsonProperty(PropertyName = "Template")]
        public string Template { get; set; }
    }
}
