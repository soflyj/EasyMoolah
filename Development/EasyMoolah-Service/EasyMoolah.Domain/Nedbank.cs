using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Xml;
using System.Web.Script.Serialization;
using System.Linq;

namespace EasyMoolah.Domain
{
    public class NedbankDomain
    {
        public static async Task<Repository.Nedbank> SaveNedbank(Model.Nedbank _nedbank)
        {
            try
            {
                _nedbank.IsActive = true;
                _nedbank.CreatedDate = DateTime.Now;
                _nedbank.ChangedDate = DateTime.Now;

                AutoMapper.Mapper.Reset();
                Mapper.Initialize(cfg =>
                {
                    cfg.CreateMap<Model.Nedbank, Repository.Nedbank>();             
                });

                using (var context = new EasyMoolahEntities())
                {
                    var entity = Mapper.Map<Repository.Nedbank>(_nedbank);
                    
                    context.Nedbanks.Add(entity);
                    await context.SaveChangesAsync()
                        .ConfigureAwait(false);

                    return entity;
                }
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public static async Task<Model.Nedbank> GetNedbankByApplicationKey(int _key)
        {
            Model.Nedbank response = null;       

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.Nedbanks.Where(x=> x.ApplicationKey ==_key).SingleOrDefault();

                if (entity != null)
                {
                    response = Mapper.Map<Model.Nedbank>(entity);
                }
            }

            return response;
        }

        public static async Task<Repository.Nedbank> UpdateNedbank(Model.Nedbank _nedbank)
        {
            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Nedbank, Repository.Nedbank>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var nedbank = context.Nedbanks.SingleOrDefault(x => x.ApplicationKey == _nedbank.ApplicationKey);
                if (nedbank != null)
                {                    
                    nedbank.ChangedDate = DateTime.Now;
                }

                var entity = Mapper.Map<Repository.Nedbank>(_nedbank);

                context.Nedbanks.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity;
            }
        }
    }
}
