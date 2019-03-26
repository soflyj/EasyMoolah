using EasyMoolah.Repository;
using EasyMoolah.Model;
using System.Threading.Tasks;
using System.Web.Http;

namespace EasyMoolah.API.Controllers
{
    public class BorrowerController : ApiController
    {
        [Route("api/borrower/insert")]
        //[System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public async Task<IHttpActionResult> InsertBorrower([FromBody] Borrower _borrower)
        {
            EasyMoolah.Domain.Borrower borrower = new Domain.Borrower();
            var response = await borrower.Insert(_borrower);
            return Ok(response);
        }

        [Route("api/borrower/get")]
        //[System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetBorrower([FromBody] Borrower _borrower)
        {
            EasyMoolah.Domain.Borrower borrower = new Domain.Borrower();
            var response = borrower.Insert(_borrower);
            return Ok(response);
        }
    }
}