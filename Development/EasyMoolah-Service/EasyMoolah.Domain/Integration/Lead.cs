using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model.Fincheck;
using EasyMoolah.Model;

namespace EasyMoolah.Domain.Integration
{
    public class Lead
    {
        public static Result CreateLead(LeadRequest leadRequest)
        {
            var response = Fincheck.Integration.Lead.CreateLead(leadRequest);
            ApiLog.Insert(Fincheck.Integration.Lead.apiLog);

            return response;
        }
    }
}
