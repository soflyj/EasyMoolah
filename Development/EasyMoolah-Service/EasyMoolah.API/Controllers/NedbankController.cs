using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    [Authorize]
    public class NedbankController : ApiController
    {
        [Route("api/nedbank/login")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult Login()
        {
            var response = Domain.nedbank.Login();
            return Ok(response);
        }
    }
}