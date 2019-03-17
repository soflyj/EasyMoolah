using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class APILog
    {

        public void Insert(EasyMoolah.Repository.APILog apiLog)
        {
            using (var context = new EasyMoolahEntities())
            {
                context.APILogs.Add(apiLog);

                context.SaveChanges();
            }
        }
    }
}
