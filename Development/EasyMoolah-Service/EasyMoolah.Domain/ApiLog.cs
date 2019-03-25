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

        public int Insert(Repository.ApiLog _apiLog)
        {
            EasyMoolah.Repository.CRUD.ApiLogRepo apiLog = new EasyMoolah.Repository.CRUD.ApiLogRepo();

            return apiLog.Insert(_apiLog);
        }

    }
}
