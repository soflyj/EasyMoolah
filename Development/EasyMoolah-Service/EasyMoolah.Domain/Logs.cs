using AutoMapper;
using EasyMoolah.Model;
using EasyMoolah.Repository;
using System;
using System.Threading.Tasks;

namespace EasyMoolah.Domain
{
    public class LogsDomain
    {
        public async Task<int> InsertErrorLog(Model.Logs.ErrorLog _errorLog)
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Logs.ErrorLog, Repository.ErrorLog>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.ErrorLog>(_errorLog);

                context.ErrorLogs.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity.Key;
            }
        }

        public async Task<int> InsertNotificationLog(Model.Logs.NotificationLog _notificationLog)
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Logs.NotificationLog, Repository.NotificationLog>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.NotificationLog>(_notificationLog);

                context.NotificationLogs.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity.Key;
            }
        }

        public async Task<Repository.ApiLog> InsertApiLog(Model.Logs.ApiLog _apiLog)
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Logs.ApiLog, Repository.ApiLog>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.ApiLog>(_apiLog);

                context.ApiLogs.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity;
            }
        }

        public static async Task LogIntegration(Result _result)
        {
            // Default
            _result.ApiLog.IsActive = true;
            _result.ApiLog.CreatedDate = DateTime.Now;
            _result.ApiLog.ChangedDate = DateTime.Now;
            _result.ApiLog.Reference = "";

            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Logs.ApiLog, Repository.ApiLog>();
                cfg.CreateMap<Model.Logs.ErrorLog, Repository.ErrorLog>();
            });

            using (var context = new EasyMoolahEntities())
            {
                // ApiLog
                var apiLogEntity = Mapper.Map<Repository.ApiLog>(_result.ApiLog);
                context.ApiLogs.Add(apiLogEntity);

                if (_result.result != ResultEnum.OK)
                {
                    // Error Log
                    var entity = Mapper.Map<Repository.ErrorLog>(new Model.Logs.ErrorLog()
                    {
                        ItemType = "ApiLog",
                        ItemKey = apiLogEntity.Key,
                        ApplicationKey = _result.ApiLog.ApplicationKey,
                        StartDate = apiLogEntity.StartDateTime,
                        EndDate = apiLogEntity.EndDateTime,
                        Error = _result.Error,
                        ErrorDescription = _result.ErrorFriendly,
                        Method = apiLogEntity.Method,
                        Input = _result.Input,
                        Output = _result.Output,
                        IsActive = true,
                        ChangedDate = System.DateTime.Now,
                        CreatedDate = System.DateTime.Now,
                    }); ;

                    context.ErrorLogs.Add(entity);
                }

                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
            }
        }
    }
}
