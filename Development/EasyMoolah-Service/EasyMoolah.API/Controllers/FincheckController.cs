using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using EasyMoolah.Model.Fincheck;

namespace EasyMoolah.API.Controllers
{
    [Route("api/[controller]")]
    public class FincheckController : Controller
    {
        // GET: api/Intent
        [HttpGet("intent")]
        public IActionResult GetIntent()
        {
            Fincheck.Integration.Intent intent = new Fincheck.Integration.Intent();
            var response = intent.GetIntent();
            return Ok(response);
        }

        // Post: api/IntentById
        [HttpPost("intentById")]
        public IActionResult GetIntentById(IntentRequest intentRequest)
        {
            Fincheck.Integration.Intent intent = new Fincheck.Integration.Intent();
            var response = intent.GetIntentById(intentRequest);
            return Ok(response);
        }

        // Post: api/lead
        [HttpPost("lead")]
        public IActionResult CreateLead(LeadRequest leadRequest)
        {
            Fincheck.Integration.Lead lead = new Fincheck.Integration.Lead();
            var response = lead.CreateLead(leadRequest);
            return Ok(response);
        }

        // Post: api/lead
        [HttpPost("offer")]
        public IActionResult GetOffer(OfferRequest offerRequest)
        {
            Fincheck.Integration.Offer offer = new Fincheck.Integration.Offer();
            var response = offer.GetOffer(offerRequest);
            return Ok(response);
        }

        // Post: api/lead
        [HttpPost("accept")]
        public IActionResult AcceptOffer(AcceptRequest acceptrequest)
        {
            Fincheck.Integration.Offer offer = new Fincheck.Integration.Offer();
            var response = offer.AcceptOffer(acceptrequest);
            return Ok(response);
        }
    }
}