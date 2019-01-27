using System;
using EasyMoolah.Model.Database.Fincheck;
using EasyMoolah.Model;
using EasyMoolah.Repository.Models;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Linq;

namespace EasyMoolah.Repository
{
    public class FinCheckRepository : BaseRepository
    {
        private Result result = new Result();


        // Insert
        public Result AddApiLog(Apilog apilog)
        {
            result.input = JsonConvert.SerializeObject(apilog);

            try
            {
                using (var context = new EasyMoolahContext())
                {
                    context.Apilog.Add(apilog);
                    context.SaveChanges();

                    result.resultCode = 0;
                    result.output = apilog.Key.ToString();
                    result.result = result.output;
                }
            }
            catch(Exception ex)
            {
                result.resultCode = 101;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Error 301 occurred in FinCheck Repository - AddApiLog()";
            }

            return result;
        }
        
        //Get
        public List<Apilog> GetApiLog()
        {
            List<Apilog> result = new List<Apilog>();
            try
            {
                using (var context = new EasyMoolahContext())
                {
                    result = context.Apilog
                                    .ToList();
                }
            }
            catch (Exception ex)
            {                
            }

            return result;
        }

        // Insert
        //public Result AddIntent(Intent intent)
        //{
        //    result.input = JsonConvert.SerializeObject(intent);

        //    try
        //    {
        //        using (var context = new EasyMoolahContext())
        //        {
        //            context.Intent.Add(intent);
        //            context.SaveChanges();

        //            result.resultCode = 0;
        //            result.output = intent.Key.ToString();
        //            result.result = result.output;
        //        }
        //    }
        //    catch (Exception ex)
        //    {
        //        result.resultCode = 101;
        //        result.error = ex.InnerException.ToString();
        //        result.errorFriendly = "Error 301 occurred in FinCheck Repository - AddIntent()";
        //    }

        //    return result;
        //}
    }
}
