using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace EasyMoolah.API.Controllers
{
    [Route("api/[controller]")]
    public class AuditController : Controller
    {
        [HttpPost, Authorize]
        public async Task<IActionResult> AuditBorrowerAppllication([FromBody]FSPResultViewModel _request)
        {
            var currentUser = HttpContext.User;
            var resultBookList = new Book[] {
                new Book { Author = "Ray Bradbury",Title = "Fahrenheit 451" },
                new Book { Author = "Gabriel García Márquez", Title = "One Hundred years of Solitude" },
                new Book { Author = "George Orwell", Title = "1984" },
                new Book { Author = "Anais Nin", Title = "Delta of Venus" }
            };

            return resultBookList;
        }
    }
}