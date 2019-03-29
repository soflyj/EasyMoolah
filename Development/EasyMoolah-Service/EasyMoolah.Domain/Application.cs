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
        //Application
        public int InsertApplication(Repository.Application _application)
        {
            int response = -1;
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = Repository.CRUD.commonRepo.InsertApplication(_application);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = 0,
                    Input = new JavaScriptSerializer().Serialize(_application),
                    Output = response.ToString(),
                    Error = "Error saving application",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "InsertApplication",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }

        public static Repository.Application GetApplication(int _key)
        {
            int key = -1;
            Repository.Application response = new Repository.Application();
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = Repository.CRUD.commonRepo.GetApplication(_key);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = key,
                    Error = "Error getting application",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "GetApplication",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }
        //Questions
        public int InsertQuestion(Repository.Question _question)
        {
            int response = -1;
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = Repository.CRUD.commonRepo.InsertQuestion(_question);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = 0,
                    Input = new JavaScriptSerializer().Serialize(_question),
                    Output = response.ToString(),
                    Error = "Error saving question",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "InsertQuestion",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }
    }
}
