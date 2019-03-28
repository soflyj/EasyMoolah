using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Repository;
using AutoMapper;

namespace EasyMoolah.Domain
{
    public class fincheck
    {
        public static void InsertResults(List<Repository.Result> _result)
        {
            foreach (Result result in _result)
            {
                Repository.CRUD.fincheckRepo.InsertResults(result);
            }
        }

        public static void InsertApiLog(APILog _apiLog)
        {
            Repository.CRUD.fincheckRepo.InsertApiLog(_apiLog);
        }
    }
}
