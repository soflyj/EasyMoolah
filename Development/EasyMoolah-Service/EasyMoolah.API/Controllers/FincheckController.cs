using EasyMoolah.Model.Fincheck;
using System.Web.Http;

namespace WEBAPI_JWT_Authentication.API.Controllers
{
    [Authorize]
    public class FincheckController : ApiController
    {
        [Route("api/fincheck/intent")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetIntent()
        {
            var response = EasyMoolah.Domain.Integration.Intent.GetIntentAsync();            
            return Ok(response);
        }

        [Route("api/fincheck/intentById")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetIntentById(IntentRequest _intentRequest)
        {
            var response = EasyMoolah.Domain.Integration.Intent.GetIntentById(_intentRequest);
            return Ok(response);
        }

        [Route("api/fincheck/lead")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult CreateLead(LeadRequest _leadRequest)
        {
            var response = EasyMoolah.Domain.Integration.Lead.CreateLead(_leadRequest);
            return Ok(response);
        }

        [Route("api/fincheck/offer")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetOffer(OfferRequest _offerRequest)
        {
            var response = EasyMoolah.Domain.Integration.Offer.GetOffer(_offerRequest);
            return Ok(response);
        }

        [Route("api/fincheck/accept")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult AcceptOffer(AcceptRequest _acceptrequest)
        {
            var response = EasyMoolah.Domain.Integration.Offer.AcceptOffer(_acceptrequest);
            return Ok(response);
        }
    }
}