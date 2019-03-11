using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json.Serialization;

namespace EasyMoolah.Model.Fincheck
{
    public class AcceptRequest
    {
        public int sessionId { get; set; }
        public string hasid { get; set; }
        public int partner_id { get; set; }
    }

    public class AcceptResponse
    {
        public List<OfferMatches> offerMatches { get; set; }
        public List<OfferAll> offerAll { get; set; }
    }   
}
