using System;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Repository;
using System.Xml;
using System.Web.Script.Serialization;

namespace EasyMoolah.Domain
{
    public class Notification
    {
        //Notification
        public static async Task<Model.Result> ProcessingResults(Model.Notification.ProcessingResults _request)
        {
            Model.Result response = null;
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = await EasyMoolah.Notification.Email.ProcessingResults(_request);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = 0,
                    Input = new JavaScriptSerializer().Serialize(_request),
                    Output = new JavaScriptSerializer().Serialize(response),
                    Error = "Error sending email: Application Successful",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "ProcessingResults",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }

        public static async Task<Model.Result> AcceptOffer(Model.Notification.AcceptOffer _request)
        {
            Model.Result response = null;
            DateTime startDateTime = System.DateTime.Now;

            try
            {
                response = await EasyMoolah.Notification.Email.AcceptOffer(_request);
            }
            catch (Exception ex)
            {
                //Build error object
                Logs.InsertError(new ErrorLog()
                {
                    ApplicationKey = 0,
                    Input = new JavaScriptSerializer().Serialize(_request),
                    Output = new JavaScriptSerializer().Serialize(response),
                    Error = "Error sending email: Accept Offer",
                    ErrorDescription = ex.InnerException.ToString(),
                    Method = "AcceptOffer",
                    StartDate = startDateTime,
                    EndDate = System.DateTime.Now,
                });
            }

            return response;
        }
    }
}
