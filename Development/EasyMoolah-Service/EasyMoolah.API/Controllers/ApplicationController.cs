using EasyMoolah.Domain;
using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    [Authorize]
    public class ApplicationController : ApiController
    {
        [Route("api/application/save")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult InsertApplication(EasyMoolah.Model.Shared.ApplicationApplicationAccess _application)
        {
            var response = EasyMoolah.Domain.Application.InsertApplication(_application);
            return Ok(response);
        }
    }
}