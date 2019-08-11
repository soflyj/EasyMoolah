using AutoMapper;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using System;
using System.Threading.Tasks;

namespace EasyMoolah.Domain
{
    public class Logs
    {
        public async Task<int> InsertErrorLog(Model.Logs.ErrorLog _errorLog)
        {
            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.ErrorLog>(_errorLog);

                context.ErrorLogs.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity.Key;
            }
        }


        public async Task<int> InsertApiLog(Model.Logs.ApiLog _apiLog)
        {
            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.ApiLog>(_apiLog);

                context.ApiLogs.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity.Key;
            }
        }

    }
}
