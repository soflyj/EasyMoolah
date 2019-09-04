using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace EasyMoolah.Notification.Nedbank
{
    public class Nedbank: Email
    {
        public async static Task<Model.Result> SendAuthorisation(EasyMoolah.Model.Notification.Request _request, decimal loanAmount, string url)
        {
            Model.Result result = new Model.Result();            

            string templateHTML = AppDomain.CurrentDomain.BaseDirectory + "\\Templates\\nedbank-authorisationurl.html";

            try
            {
                var builder = new StringBuilder();

                using (var reader = File.OpenText(templateHTML))
                {
                    builder.Append(reader.ReadToEnd());
                }
                //Completing the place holders
                builder.Replace("{{Name}}", _request.toAddressFirstName + ' ' + _request.toAddressLastName);
                builder.Replace("{{Date}}", System.DateTime.Now.ToShortDateString());
                builder.Replace("{{AuthorisationURL}}", url);

                _request.body = builder.ToString();
                _request.subject = "Authorisation Nedbank loan offer";

                result = await SendEmail(_request, "SendAuthorisation");
                
                result.result = Model.ResultEnum.OK;
                result.Output = "Email Successfully Sent - ProcessingResults";

            }
            catch (Exception ex)
            {
                result.result = Model.ResultEnum.Notification;
                result.Error = ex.InnerException.ToString();
                result.ErrorFriendly = "Email Unsuccessfully Sent - ProcessingResults";
            }

            return result;
        }
    }
}
