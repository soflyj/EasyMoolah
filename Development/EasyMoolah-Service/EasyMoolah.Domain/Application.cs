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
        public static async Task<Repository.Application> InsertApplication(Model.Application _application)
        {
            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Application, Repository.Application>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.Application>(_application);

                context.Applications.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity;
            }
        }
    }
}
