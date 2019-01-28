using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EasyMoolah.API.Controllers
{
    [Route("api/[controller]")]
    public class FincheckController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            Fincheck.Integration.Intent intent = new Fincheck.Integration.Intent();
            var response = intent.GetIntent();
            return Ok(response);
        }
    }
}