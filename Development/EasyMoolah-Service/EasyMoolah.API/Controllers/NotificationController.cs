
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using EasyMoolah.Notification;
using EasyMoolah.Model.Notification.ViewModel;

namespace EasyMoolah.API.Controllers
{
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        //[HttpPost, Authorize]
        //public IEnumerable<Book> Get()
        //{
        //    var currentUser = HttpContext.User;
        //    var resultBookList = new Book[] {
        //        new Book { Author = "Ray Bradbury",Title = "Fahrenheit 451" },
        //        new Book { Author = "Gabriel García Márquez", Title = "One Hundred years of Solitude" },
        //        new Book { Author = "George Orwell", Title = "1984" },
        //        new Book { Author = "Anais Nin", Title = "Delta of Venus" }
        //    };

        //    return resultBookList;
        //}

        // GET: api/Note?itemType=1&id=1&itemId=1
        //[HttpGet("SendFSPResults/"), Authorize]
        //public Response Get([FromBody]int i)
        //{
        //    FSPResultViewModel _request = null;
        //    EasyMoolah.Notification.Email email = new Email();
        //    EasyMoolah.Model.Response response = new Response();

        //    try
        //    {
        //        response = email.SendFSPResults(_request);
        //    }
        //    catch (Exception ex)
        //    {
        //        response.ResultCode = 1;
        //        response.Message = (ex.InnerException == null ? "" : ex.InnerException.ToString());
        //        response.Friendly = "Failed to send results email.";
        //    }
        //    return response;
        //}

        // GET: api/Note/1
        [HttpGet("{id}")]
        public async Task<IActionResult> SendEmail([FromBody]FSPResultViewModel _request)
        {
            FSPResultViewModel FRVM = new FSPResultViewModel();
            EasyMoolah.Model.Notification.Request R = new Request(){FromAddress = "jar.ninja.nas@gmail.com", Subject = "test subject", Template = "FSPResults", ToAddress = "soflyj@gmail.com", ToAddressName = "soflyj", ToAddressTitle = "Mr"};
            EasyMoolah.Model.Notification.FSPResult F = new FSPResult()
                {Date = "2018-01-01", Name = "Jarrod", IsSuccessful = true};
            FRVM.Request = R;
            FRVM.FspResult = F;

            var temp = Newtonsoft.Json.JsonConvert.SerializeObject(FRVM);
            //FSPResultViewModel _request = null;
            EasyMoolah.Notification.Email email = new Email();
            EasyMoolah.Model.Response response = new Response();

            try
            {
                response = await email.SendFSPResults(_request);                
            }
            catch (Exception ex)
            {
                response.ResultCode = 1;
                response.Message = (ex.InnerException == null ? "" : ex.InnerException.ToString());
                response.Friendly = "Failed to send results email.";
            }
            return Ok(response);
        }
    }
}