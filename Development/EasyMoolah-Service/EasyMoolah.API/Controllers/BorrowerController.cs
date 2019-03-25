using EasyMoolah.Repository;

using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    public class BorrowerController : ApiController
    {
        [Route("api/borrower/insert")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult InsertBorrower([FromBody] Borrower _borrower)
        {
            EasyMoolah.Domain.Borrower borrower = new Domain.Borrower();
            var response = borrower.Insert(_borrower);
            return Ok(response);
        }

        [Route("api/borrower/get")]
        [System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetBorrower([FromBody] Borrower _borrower)
        {
            EasyMoolah.Domain.Borrower borrower = new Domain.Borrower();
            var response = borrower.Insert(_borrower);
            return Ok(response);
        }
    }
}