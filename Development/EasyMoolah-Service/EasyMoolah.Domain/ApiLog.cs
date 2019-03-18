using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Domain
{
    public class ApiLog
    {

        public int Insert(EasyMoolah.Repository.ApiLog _apiLog)
        {
            EasyMoolah.Repository.CRUD.ApiLog apiLog = new EasyMoolah.Repository.CRUD.ApiLog();

            return apiLog.Insert(_apiLog);
        }

    }
}
