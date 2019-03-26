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
        public async static Task<int> Insert(Repository.APILog _apiLog)
        {
            var key = await Repository.CRUD.fincheckRepo.InsertApiLog(_apiLog);
            return key;
        }

    }
}
