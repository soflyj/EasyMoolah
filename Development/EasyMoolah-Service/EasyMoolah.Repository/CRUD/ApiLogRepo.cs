using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class ApiLogRepo
    {
        //ApiLog
        public static int InsertApiLog(ApiLog _apiLog)
        {
            int key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.ApiLogs.Add(_apiLog);

                context.SaveChanges();

                key = _apiLog.Key;
            }

            return key;
        }
    }
}
