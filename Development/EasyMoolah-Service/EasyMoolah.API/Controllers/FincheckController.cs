using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace EasyMoolah.API.Controllers
{
    public class FincheckController : Controller
    {
        //[HttpGet("{id}")]
        //public async Task<IActionResult> SendEmail([FromBody]FSPResultViewModel _request)
        //{
        //    FSPResultViewModel FRVM = new FSPResultViewModel();
        //    EasyMoolah.Model.Notification.Request R = new Request() { FromAddress = "jar.ninja.nas@gmail.com", Subject = "test subject", Template = "FSPResults", ToAddress = "soflyj@gmail.com", ToAddressName = "soflyj", ToAddressTitle = "Mr" };
        //    EasyMoolah.Model.Notification.FSPResult F = new FSPResult()
        //        { Date = "2018-01-01", Name = "Jarrod", IsSuccessful = true };
        //    FRVM.Request = R;
        //    FRVM.FspResult = F;

        //    var temp = Newtonsoft.Json.JsonConvert.SerializeObject(FRVM);
        //    //FSPResultViewModel _request = null;
        //    EasyMoolah.Notification.Email email = new Email();
        //    EasyMoolah.Model.Response response = new Response();

        //    try
        //    {
        //        response = await email.SendFSPResults(_request);
        //    }
        //    catch (Exception ex)
        //    {
        //        response.ResultCode = 1;
        //        response.Message = (ex.InnerException == null ? "" : ex.InnerException.ToString());
        //        response.Friendly = "Failed to send results email.";
        //    }
        //    return Ok(response);
        //}
    }
}