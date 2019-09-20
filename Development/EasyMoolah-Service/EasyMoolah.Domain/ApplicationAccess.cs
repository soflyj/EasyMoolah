using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Xml;
using System.Web.Script.Serialization;
using System.Linq;
using System.Collections.Generic;

namespace EasyMoolah.Domain
{
    public class ApplicationAccessDomain
    {
        public static async Task<Repository.ApplicationAccess> SaveApplicationAccess(Model.ApplicationAccess _applicationAccess)
        {
            try
            {
                AutoMapper.Mapper.Reset();
                Mapper.Initialize(cfg =>
                {
                    cfg.CreateMap<Model.ApplicationAccess, Repository.ApplicationAccess>();
                });

                using (var context = new EasyMoolahEntities())
                {
                    //Update all records with the same application
                    var applicationAccesses = context.ApplicationAccesses.Where(x => x.ApplicationKey == _applicationAccess.ApplicationKey && x.IsActive == true).ToList();                    
                    applicationAccesses.ForEach(x =>
                    {
                        x.IsActive = false;
                        x.ChangedDate = DateTime.Now;
                    });

                    var entityInsert = Mapper.Map<Repository.ApplicationAccess>(_applicationAccess);
                    entityInsert.StartDate = DateTime.Now;
                    entityInsert.IsActive = true;
                    entityInsert.CreatedDate = DateTime.Now;
                    entityInsert.ChangedDate = DateTime.Now;

                    context.ApplicationAccesses.Add(entityInsert);

                    await context.SaveChangesAsync()
                        .ConfigureAwait(false);

                    return entityInsert;
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<Model.ApplicationAccess> GetApplicationAccessByApplicationKey(int _applicationKey)
        {
            Model.ApplicationAccess response = null;

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.ApplicationAccesses.Where(x => x.ApplicationKey == _applicationKey && x.IsActive == true);

                if (entity != null)
                {
                    response = Mapper.Map<Model.ApplicationAccess>(entity);
                }
            }

            return response;
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
