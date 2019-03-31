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
        public IHttpActionResult InsertBorrower([FromBody] Borrower _borrower)
        {            
            var response = Domain.Borrower.InsertBorrower(_borrower);
            return Ok(response);
        }

        [Route("api/borrower/get")]
        //[System.Web.Http.AcceptVerbs("GET", "POST")]
        [System.Web.Http.HttpPost]
        public IHttpActionResult GetBorrower([FromBody] Borrower _borrower)
        {            
            var response = Domain.Borrower.GetBorrower(_borrower.Key);
            return Ok(response);
        }
    }
}