using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Xml;
using System.Web.Script.Serialization;
using System.Linq;

namespace EasyMoolah.Domain
{
    public class ApplicationDomain
    {
        public static async Task<Repository.Application> SaveApplication(Model.Shared.ApplicationApplicationAccess _applicationApplicationAccess)
        {
            try
            {
                var application = _applicationApplicationAccess.Application;
                application.StartDate = DateTime.Now;
                application.IsActive = true;
                application.CreatedDate = DateTime.Now;
                application.ChangedDate = DateTime.Now;

                var applicationAccess = _applicationApplicationAccess.ApplicationAccess;
                applicationAccess.StartDate = DateTime.Now;
                applicationAccess.IsActive = true;
                applicationAccess.CreatedDate = DateTime.Now;
                applicationAccess.ChangedDate = DateTime.Now;

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
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<Model.Application> GetApplicationByKey(int _key)
        {
            Model.Application response = null;       

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.Applications.Where(x=> x.Key ==_key).SingleOrDefault();

                if (entity != null)
                {
                    response = Mapper.Map<Model.Application>(entity);
                }
            }

            return response;
        }

        public static async Task<Model.Application> GetApplicationByGuid(string _guid)
        {
            Model.Application response = null;

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.Applications.Where(x => x.Guid == Guid.Parse(_guid)).SingleOrDefault();

                if (entity != null)
                {
                    response = Mapper.Map<Model.Application>(entity);
                }
            }

            return response;
        }

        public static async Task<Repository.Applicant> SaveApplicant(Model.Applicant _applicant)
        {
            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Applicant, Repository.Applicant>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.Applicants.Where(x => x.ApplicationKey == _applicant.ApplicationKey && x.IsActive == true).SingleOrDefault();
                if (entity != null)
                {                   
                    if (_applicant.Street != null)
                    {
                        entity.Street = _applicant.Street;
                        entity.Suburb = _applicant.Suburb;
                        entity.City = _applicant.City;
                        entity.Province = _applicant.Province;
                        entity.Country = _applicant.Country;
                        entity.PostalCode = _applicant.PostalCode;
                        //applicant.PostalCode = _applicant.PostalCode;
                        //applicant.PostalCode = _applicant.PostalCode;
                    }

                    if (_applicant.FirstName != null)
                    {                        
                        entity.FirstName = _applicant.FirstName;
                        entity.LastName = _applicant.LastName;
                        entity.Email = _applicant.Email;
                        entity.MobileNumber = _applicant.MobileNumber;
                        entity.LandlineNumber = _applicant.LandlineNumber;
                    }

                    if (_applicant.IdNumber != null)
                    {
                        entity.IdNumber = _applicant.IdNumber;                        
                    }
                }
                else
                {
                    entity = Mapper.Map<Repository.Applicant>(_applicant);
                    context.Applicants.Add(entity);
                }

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
