using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using EasyMoolah.Model.Notification.ViewModel;
using Newtonsoft.Json;

namespace EasyMoolah.Notification
{
    public class Email
    {
        private readonly ConfirmationOfApplication confirmationOfApplication;
        private FSPResult FSPResult;

        /// <summary>
        /// Send email method that actually does the outcoming
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public Result SendEmail(Request request)
        {
            Result result = new Result
            {
                input = JsonConvert.SerializeObject(request).ToString()
            };

            string templateLocation = "./Templates/";
            string templateHTML = "";

            try
            {
                using (var mailMessage = new MailMessage())
                using (var client = new SmtpClient("smtp.gmail.com", 587))
                {
                    // configure the client and send the message
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential("jar.ninja.nas@gmail.com", "hOnda123");
                    client.EnableSsl = true;

                    var builder = new StringBuilder();
                    
                    if (request.Template == "FSPResults")
                    {
                        if (FSPResult.IsSuccessful)
                        {
                            templateHTML = templateLocation + "fsp_results-successful.html";
                        }
                        else
                        {
                            templateHTML = templateLocation + "fsp_results-unsuccessful.html";
                        }

                        using (var reader = File.OpenText(templateHTML))
                        {
                            builder.Append(reader.ReadToEnd());
                        }

                        builder.Replace("{{name}}", FSPResult.Name);
                        builder.Replace("{{date}}", FSPResult.Date);

                    }

                    // configure the mail message
                    mailMessage.From = new MailAddress(request.FromAddress);
                    mailMessage.To.Insert(0, new MailAddress(request.ToAddress));
                    mailMessage.Subject = request.Subject;
                    mailMessage.Body = builder.ToString();
                    mailMessage.IsBodyHtml = true;

                    client.Send(mailMessage);

                    result.resultCode = 0;                    
                    result.output = "";
                    result.result = "Email Successfully Sent - " + request.Template.ToString();
                }
            }
            catch (Exception ex)
            {
                result.resultCode = 401;                
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - " + request.Template.ToString() + "_SendEmail";
            }

            return result;
        }

        public Result SendNotificationConfirmationOfApplication(Request request)
        {
            Result result = new Result();

            try
            {
                result = SendEmail(request);

                result.resultCode = 0;
                result.output = "";
                result.result = "Email Successfully Sent - " + request.Template.ToString();
            }
            catch (Exception ex)
            {
                result.resultCode = 101;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - " + request.Template.ToString() + "_SendNotificationConfirmationOfApplication";
            }
            
            return result;
        }

        public Result SendFSPResults(FSPResultViewModel request)
        {
            Result result = new Result();
            FSPResult = request.FspResult;

            try
            {
                result = SendEmail(request.Request);
            }
            catch (Exception ex)
            {
                result.resultCode = 401;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - " + request.Request.Template.ToString() + "_SendFSPResults";
            }

            return result;
        }
    }
}
