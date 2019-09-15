using System.Net.Http;

namespace EasyMoolah.API.Models
{
    public class AuthorisationlinkRequest
    {
        public int ApplicationKey { get; set; }
        public decimal LoanAmount { get; set; }
    }    
}