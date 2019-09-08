using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Xml;
using System.Web.Script.Serialization;

namespace EasyMoolah.Domain
{
    public class Application
    {
        public static async Task<Repository.Application> InsertApplication(Model.Shared.ApplicationApplicationAccess _applicationApplicationAccess)
        {
            var application = _applicationApplicationAccess.Application;
            var applicationAccess = _applicationApplicationAccess.ApplicationAccess;

            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Application, Repository.Application>();
                cfg.CreateMap<Model.ApplicationAccess, Repository.ApplicationAccess>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entityA = Mapper.Map<Repository.Application>(application);

                context.Applications.Add(entityA);

                applicationAccess.ApplicationKey = entityA.Key;

                var entityAA = Mapper.Map<Repository.ApplicationAccess>(applicationAccess);
                context.ApplicationAccesses.Add(entityAA);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);

                return entityA;
            }
        }
    }
}
