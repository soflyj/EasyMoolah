using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Repository;
using AutoMapper;

namespace EasyMoolah.Domain
{
    public class ApiLog
    {
        public static int Insert(Repository.ApiLog _apiLog)
        {
            var id = Repository.CRUD.ApiLogRepo.Insert(_apiLog);
            return id;
        }

    }
}
