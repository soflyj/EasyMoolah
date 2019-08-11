using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Repository.CRUD
{
    public class ConfigurationRepo
    {
        public static Configuration GetConfiguration(string _id)
        {
            Configuration configuration = null;
            using (var context = new EasyMoolahEntities())
            {
                configuration = context.Configurations.Where(x => x.Id == _id).FirstOrDefault();
            }

            return configuration;
        }
    }
}
