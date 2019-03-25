using EasyMoolah.Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Fincheck.Integration
{
    public class Base
    {
        public void AddApiLog(ApiLog _apiLog)
        {
            EasyMoolah.Domain.ApiLog apiLog = new EasyMoolah.Domain.ApiLog();
            apiLog.Insert(_apiLog);

        }
    }
}
