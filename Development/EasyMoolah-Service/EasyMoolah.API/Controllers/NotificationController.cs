
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
using Newtonsoft.Json;

namespace EasyMoolah.API.Controllers
{
    [Route("api/[controller]")]
    public class NotificationController : Controller
    {
        private string result = "";
        private Response response = new Response();

        // GET: api/Note/1
        [HttpGet("{id}")]
        public async Task<IActionResult> SendEmail([FromBody] FSPResultViewModel request)
        {
            try
            {
                response.Input = JsonConvert.SerializeObject(request).ToString();

                FSPResultViewModel FRVM = new FSPResultViewModel();
                EasyMoolah.Model.Notification.Request R = new Request()
                {
                    FromAddress = "jar.ninja.nas@gmail.com", Subject = "test subject", Template = "FSPResults",
                    ToAddress = "soflyj@gmail.com", ToAddressName = "soflyj", ToAddressTitle = "Mr"
                };
                EasyMoolah.Model.Notification.FSPResult F = new FSPResult()
                    {Date = "2018-01-01", Name = "Jarrod", IsSuccessful = true};
                FRVM.Request = R;
                FRVM.FspResult = F;

                var temp = Newtonsoft.Json.JsonConvert.SerializeObject(FRVM);
                //FSPResultViewModel _request = null;
                EasyMoolah.Notification.Email email = new Email();                

                response = await email.SendFSPResults(request);
            }
            catch (Exception ex)
            {
                response.ResultCode = 101;
                response.Error = ex.InnerException.ToString();
                response.ErrorFriendly = "Error 101 occurred in Notification API - api/note/";
                return Ok(response);
            }
        }
    }
}