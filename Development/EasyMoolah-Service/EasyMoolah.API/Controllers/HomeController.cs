using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyMoolah.API.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "EasyMoolah - Service";
            ViewBag.PublishDate = DateTime.Now;            

            return View();
        }
    }
}
