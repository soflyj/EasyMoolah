using System.Web.Http;
using EasyMoolah.Model.Notification;


namespace EasyMoolah.API.Controllers
{
    public class NotificationController : ApiController
    {
        [System.Web.Http.Route("api/notification/processingresults")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult ProcessingResults([FromBody] ProcessingResults _request)
        {
            var response = EasyMoolah.Domain.Notification.ProcessingResults(_request);
            return Ok(response);
        }

        [System.Web.Http.Route("api/notification/acceptoffer")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult AcceptOffer([FromBody] AcceptOffer _request)
        {
            var response = EasyMoolah.Domain.Notification.AcceptOffer(_request);
            return Ok(response);
        }
    }
}