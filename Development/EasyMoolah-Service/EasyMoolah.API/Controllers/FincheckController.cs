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
        public IActionResult Lead(LeadRequest leadrequest)
        {
            Fincheck.Integration.Lead lead = new Fincheck.Integration.Lead();
            var response = lead.SetLead(leadrequest);
            return Ok(response);
        }
    }
}