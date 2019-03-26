using System.Web.Http;
using EasyMoolah.Model.Notification;


namespace EasyMoolah.API.Controllers
{
    public class NotificationController : ApiController
    {
        [System.Web.Http.Route("api/notification/confirmationafapplication")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult ConfirmationOfApplication([FromBody] ConfirmationOfApplication _request)
        {
            var response = EasyMoolah.Domain.Notification.confirmationOfApplication(_request);
            return Ok(response);
        }

        //[System.Web.Http.Route("api/notification/insert")]
        //[System.Web.Http.AcceptVerbs("GET", "POST")]
        //[System.Web.Http.HttpPost]
        //public IHttpActionResult SendFSPResults([FromBody] Request _request)
        //{
        //    Email email = new Email();
        //    var response = email.SendFSPResults(_request);
        //    return Ok(response);
        //}
    }
}