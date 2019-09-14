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
        public IHttpActionResult SaveApplication(EasyMoolah.Model.Shared.ApplicationApplicationAccess _application)
        {
            var response = EasyMoolah.Domain.Application.SaveApplication(_application);
            return Ok(response);
        }

        [Route("api/applicant/save")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult SaveApplicant(EasyMoolah.Model.Applicant _applicant)
        {
            var response = EasyMoolah.Domain.Application.SaveApplicant(_applicant);
            return Ok(response);
        }

        [Route("api/applicationip/update")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult SaveApplicationIP(EasyMoolah.Model.ApplicationAccess _applicationAccess)
        {
            var response = EasyMoolah.Domain.ApplicationAccess.SaveApplicationAccess(_applicationAccess);
            return Ok(response);
        }

        [Route("api/applicationformdata/update")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPut]
        public IHttpActionResult UpdateFormData(EasyMoolah.Model.ApplicationAudit _formData)
        {
            var response = EasyMoolah.Domain.Application.UpdateFormData(_formData);
            return Ok(response);
        }

        [Route("api/application/get/{id}")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpGet]
        public IHttpActionResult GetApplicationByKey(int id)
        {
            var response = EasyMoolah.Domain.Application.GetApplicationByKey(id);
            return Ok(response);
        }
    }
}