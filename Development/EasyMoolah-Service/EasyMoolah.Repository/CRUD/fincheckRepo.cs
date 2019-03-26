using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class fincheckRepo
    {

        public async static Task<int> InsertApiLog(APILog _apiLog)
        {
            int Key = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.APILogs.Add(_apiLog);

                context.SaveChangesAsync();

                Key = 0;
            }

            return Key;
        }
    }
}
