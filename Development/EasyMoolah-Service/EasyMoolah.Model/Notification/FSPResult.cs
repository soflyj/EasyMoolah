using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using System.Text;
using Newtonsoft.Json;

namespace EasyMoolah.Model.Notification
{
    public class FSPResult
    {
        [Required]
        [JsonProperty(PropertyName = "Name")]
        public string Name { get; set; }
        [Required]
        [JsonProperty(PropertyName = "Date")]
        public string Date { get; set; }
        [Required]
        [JsonProperty(PropertyName = "IsSuccessful")]
        public bool IsSuccessful { get; set; }
    }
}
