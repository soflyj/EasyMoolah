using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Xml;
using System.Web.Script.Serialization;
using System.Linq;

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

        public static async Task<Model.Application> GetApplication(int _key)
        {
            Model.Application response = null;

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.Applications.FindAsync(_key);

                if (entity != null)
                {
                    response = Mapper.Map<Model.Application>(entity);
                }                
            }

            return response;
        }

        public static async Task<Repository.Applicant> InsertApplicant(Model.Applicant _applicant)
        {
            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Applicant, Repository.Applicant>();                
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.Applicant>(_applicant);
                context.Applicants.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);

                return entity;
            }
        }

        public static async Task<Repository.ApplicationAudit> UpdateFormData(Model.ApplicationAudit _formData)
        {            
            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.ApplicationAudit, Repository.ApplicationAudit>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var application = context.Applications.SingleOrDefault(x => x.Key == _formData.ApplicationKey);
                if (application != null)
                {
                    application.FormData = _formData.FormData;
                    application.ChangedDate = DateTime.Now;
                }

                var entity = Mapper.Map<Repository.ApplicationAudit>(_formData);

                context.ApplicationAudits.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity;
            }
        }
    }
}
