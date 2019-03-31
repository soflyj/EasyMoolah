using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class fincheckRepo
    {
        //ApiLog
        public static int InsertApiLog(APILog _apiLog)
        {
            int key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.APILogs.Add(_apiLog);

                context.SaveChanges();

                key = _apiLog.Key;
            }

            return key;
        }
        //Results
        public static int InsertResults(Result _result)
        {
            int key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.Results.Add(_result);

                context.SaveChanges();

                key = _result.Key;
            }

            return key;
        }
        public static List<Result> GetResultByApplicationKey(int _applicationkey)
        {
            List<Result> result = null;
            using (var context = new EasyMoolahEntities())
            {
                result = context.Results.Where(x => x.ApplicationKey == _applicationkey).ToList();
            }

            return result;
        }
    }
}
