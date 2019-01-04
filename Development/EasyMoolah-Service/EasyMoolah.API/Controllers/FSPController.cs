using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
//using EasyMoolah.Model;

namespace EasyMoolah.API.Controllers
{
    [Route("api/[controller]")]
    public class FSPController : Controller
    {
        //[HttpGet, Authorize]
        //public IEnumerable<responseFSP> Get()
        //{
        //    var currentUser = HttpContext.User;

        //    /*
        //     * Call the third party API
        //     */

        //    IEnumerable<responseFSP> resultFSP = new responseFSP[]
        //    {
        //        new responseFSP {
        //            FSPLogo = "",
        //            FSPProvider = "Nedbank",
        //            ApprovedAmount = 10000,
        //            TermAmount = 12,
        //            TermPeriod = "months",
        //            TermsAndConditions = "Blah blah blah"
        //            },
        //        new responseFSP {FSPLogo = "",
        //            FSPProvider = "DirectAxis",
        //            ApprovedAmount = 13000,
        //            TermAmount = 24,
        //            TermPeriod = "months",
        //            TermsAndConditions = "Blah blah blah blah"
        //        },
        //        new responseFSP {FSPLogo = "",
        //            FSPProvider = "FNB",
        //            ApprovedAmount = 140000,
        //            TermAmount = 12,
        //            TermPeriod = "months",
        //            TermsAndConditions = "Blah blah"
        //        }
        //    };

        //    return resultFSP;
        //}

        public class Book
        {
            public string Author { get; set; }
            public string Title { get; set; }
            public bool AgeRestriction { get; set; }
        }
    }
}