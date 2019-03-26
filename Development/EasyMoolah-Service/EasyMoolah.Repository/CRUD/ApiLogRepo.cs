using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class ApiLogRepo
    {

        public static int Insert(EasyMoolah.Repository.ApiLog apiLog)
        {
            int Id = 0;
            using (var context = new EasyMoolahEntities())
            {
                context.ApiLogs.Add(apiLog);

                Id = context.SaveChanges();
            }

            return Id;
        }
    }
}
