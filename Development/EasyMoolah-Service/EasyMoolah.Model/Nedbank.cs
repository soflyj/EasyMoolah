using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model
{
    public class Nedbank: Base
    {
        public Nullable<int> ApplicationKey { get; set; }
        public string LightToken { get; set; }
        public string HeavyToken { get; set; }
        public string IntentId { get; set; }
        public string NedbankAuthorisationURL { get; set; }
        public string Code { get; set; }
        public string OfferId { get; set; }
    }
}
