using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class Request
    {
        [Required]
        [JsonProperty(PropertyName = "ToAddress")]
        public string ToAddress { get; set; }
        [Required]
        [JsonProperty(PropertyName = "ToAddressTitle")]
        public string ToAddressTitle { get; set; }
        [Required]
        [JsonProperty(PropertyName = "ToAddressName")]
        public string ToAddressName { get; set; }
        [Required]
        [JsonProperty(PropertyName = "FromAddress")]
        public string FromAddress { get; set; }
        [Required]
        [JsonProperty(PropertyName = "Subject")]
        public string Subject { get; set; }
        [Required]
        [JsonProperty(PropertyName = "Template")]
        public string Template { get; set; }
    }
}
