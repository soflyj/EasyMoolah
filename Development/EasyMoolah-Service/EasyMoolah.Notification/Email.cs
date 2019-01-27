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
        private ConfirmationOfApplication confirmationOfApplication;
        private FSPResult FSPResult;

        public Response SendEmail(Request request)
        {
            Response response = new Response();
            response.Input = JsonConvert.SerializeObject(request).ToString();

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

                    response.ResultCode = 0;                    
                    response.Output = "";
                    response.Result = "Email Successfully Sent - " + request.Template.ToString();
                }
            }
            catch (Exception ex)
            {
                response.ResultCode = 401;                
                response.Error = ex.InnerException.ToString();
                response.ErrorFriendly = "Email Unsuccessfully Sent - " + request.Template.ToString() + "_SendEmail";
            }

            return response;
        }

        public Response SendNotificationConfirmationOfApplication(Request request)
        {
            Response response = new Response();

            try
            {
                response = SendEmail(request);

                response.ResultCode = 0;
                response.Output = "";
                response.Result = "Email Successfully Sent - " + request.Template.ToString();
            }
            catch (Exception ex)
            {
                response.ResultCode = 101;
                response.Error = ex.InnerException.ToString();
                response.ErrorFriendly = "Email Unsuccessfully Sent - " + request.Template.ToString() + "_SendNotificationConfirmationOfApplication";
            }
            
            return response;
        }

        public async Task<Response> SendFSPResults(FSPResultViewModel request)
        {
            Response response = new Response();
            FSPResult = request.FspResult;

            try
            {
                response = SendEmail(request.Request);
            }
            catch (Exception ex)
            {
                response.ResultCode = 401;
                response.Error = ex.InnerException.ToString();
                response.ErrorFriendly = "Email Unsuccessfully Sent - " + request.Request.Template.ToString() + "_SendFSPResults";
            }

            return response;
        }
    }
}
