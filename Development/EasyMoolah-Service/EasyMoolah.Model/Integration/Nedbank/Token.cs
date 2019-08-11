using System;
using System.Collections.Generic;
using System.Text;

namespace EasyMoolah.Model.Nedbank
{
    public class TokenLightResponse
    {
        public string access_token { get; set; }        
        public string scope { get; set; }
        public string token_type { get; set; }
        public int expires_in { get; set; }
    }
}

