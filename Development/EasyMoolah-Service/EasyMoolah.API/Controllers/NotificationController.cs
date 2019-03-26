using System.Web.Http;
using EasyMoolah.Model.Notification;
using EasyMoolah.Notification;


namespace EasyMoolah.API.Controllers
{
    public class NotificationController : ApiController
    {
        [System.Web.Http.Route("api/notification/insert")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult SendNotificationConfirmationOfApplication([FromBody] Request _request)
        {
            Email email = new Email();
            var response = email.SendNotificationConfirmationOfApplication(_request);
            return Ok(response);
        }

        [System.Web.Http.Route("api/notification/insert")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult SendFSPResults([FromBody] Request _request)
        {
            Email email = new Email();
            var response = email.SendFSPResults(_request);
            return Ok(response);
        }
    }
}