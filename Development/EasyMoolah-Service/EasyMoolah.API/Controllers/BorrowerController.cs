using EasyMoolah.Model.Borrower;

using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    public class BorrowerController : ApiController
    {
        [Route("api/borrower/insert")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult InsertBorrower(Borrower.InsertRequest _borrower)
        {            
            EasyMoolah.Domain.Borrower borrower = new Domain.Borrower();
            var response = borrower.Insert(_borrower);         
            return Ok(response);
        }
    }
}