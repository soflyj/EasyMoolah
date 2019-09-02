using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    [Authorize]
    public class NedbankController : ApiController
    {
        [Route("api/fincheck/intent")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetIntent()
        {
            EasyMoolah.Domain.Integration.Token requestToken = new EasyMoolah.Domain.Integration.Token();

            var response = requestToken.GetLightToken();
            return Ok(response);
        }

        [Route("api/nedbank/authorisationlink")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult Authorisationlink([FromBody] decimal loanAmount)
        {
            EasyMoolah.Domain.Integration.NedbankIntegration nedbankIntegration = new EasyMoolah.Domain.Integration.NedbankIntegration();

            var response = nedbankIntegration.GetAuthorisationLink(loanAmount);
            return Ok(response);
        }
    }
}