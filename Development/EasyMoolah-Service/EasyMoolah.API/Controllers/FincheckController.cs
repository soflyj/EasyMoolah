using EasyMoolah.API.Models;
using EasyMoolah.Model;
using EasyMoolah.Model.Fincheck;
using EasyMoolah.Domain;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
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
            Fincheck.Integration.Intent intent = new Fincheck.Integration.Intent();
            var response = intent.GetIntent();
            return Ok(response);
        }

        [Route("api/fincheck/intentById")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetIntentById(IntentRequest intentRequest)
        {
            Fincheck.Integration.Intent intent = new Fincheck.Integration.Intent();
            var response = intent.GetIntentById(intentRequest);
            return Ok(response);
        }

        [Route("api/fincheck/lead")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult CreateLead(LeadRequest leadRequest)
        {
            Fincheck.Integration.Lead lead = new Fincheck.Integration.Lead();
            var response = lead.CreateLead(leadRequest);
            return Ok(response);
        }

        [Route("api/fincheck/offer")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetOffer(OfferRequest offerRequest)
        {
            EasyMoolah.Domain.Integration.Fincheck offer = new EasyMoolah.Domain.Integration.Fincheck();
            var response = offer.GetOffer(offerRequest);

            return Ok(response);
        }

        [Route("api/fincheck/accept")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult AcceptOffer(AcceptRequest acceptrequest)
        {
            Fincheck.Integration.Offer offer = new Fincheck.Integration.Offer();
            var response = offer.AcceptOffer(acceptrequest);
            return Ok(response);
        }
    }
}