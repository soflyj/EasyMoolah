using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class ErrorLogRepo
    {
        //ApiLog
        public static int InsertErrorLog(ErrorLog _errorLog)
        {
            int key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.ErrorLogs.Add(_errorLog);

                context.SaveChanges();

                key = _errorLog.Key;
            }

            return key;
        }
    }
}
