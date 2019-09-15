using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Collections.Generic;
using System.Linq;
using System;

namespace EasyMoolah.Domain
{
    public class Applicant
    {
        public static async Task<Model.Applicant> GetApplicantByApplicationKey(int _applicationKey)
        {
            Model.Applicant response = null;

            using (var context = new EasyMoolahEntities())
            {
                var entity = context.Applicants.Where(x => x.ApplicationKey == _applicationKey).SingleOrDefault();

                if (entity != null)
                {
                    response = Mapper.Map<Model.Applicant>(entity);
                }
            }

            return response;
        }
    }
}
