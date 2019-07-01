using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model.Nedbank;
using EasyMoolah.Model;

namespace EasyMoolah.Domain
{
    public class nedbank
    {
        public static Result Login()
        {
            var response = Nedbank.Integration.Login.GetLogin();            

            return response;
        }
    }
}
