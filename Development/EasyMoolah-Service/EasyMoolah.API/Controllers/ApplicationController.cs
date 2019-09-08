using EasyMoolah.Domain;
using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    [Authorize]
    public class ApplicationController : ApiController
    {
        [Route("api/application/save")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult InsertApplication(EasyMoolah.Model.Shared.ApplicationApplicationAccess _application)
        {
           var response = EasyMoolah.Domain.Application.InsertApplication(_application);
            return Ok(response);
        }

        [Route("api/applicant/save")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult InsertApplicant(EasyMoolah.Model.Applicant _applicant)
        {
            var response = EasyMoolah.Domain.Application.InsertApplicant(_applicant);
            return Ok(response);
        }

        [Route("api/applicationformdata/save")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult UpdateFormData(EasyMoolah.Model.ApplicationAudit _formData)
        {
            var response = EasyMoolah.Domain.Application.UpdateFormData(_formData);
            return Ok(response);
        }

        //[Route("api/application/save")]
        //[System.Web.Http.AcceptVerbs("GET", "POST")]
        //[System.Web.Http.HttpGet]
        //public IHttpActionResult UpdateFormData(EasyMoolah.Model.ApplicationAudit _formData)
        //{
        //    var response = EasyMoolah.Domain.Application.UpdateFormData(_formData);
        //    return Ok(response);
        //}
    }
}