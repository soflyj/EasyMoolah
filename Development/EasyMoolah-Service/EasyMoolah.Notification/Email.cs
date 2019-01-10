using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using EasyMoolah.Model.Notification.ViewModel;

namespace EasyMoolah.Notification
{
    public class Email
    {
        private ConfirmationOfApplication confirmationOfApplication;
        private FSPResult FSPResult;

        public Response SendEmail(Request _request)
        {
            Response response = new Response();
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
                    
                    if (_request.Template == "FSPResults")
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
                    mailMessage.From = new MailAddress(_request.FromAddress);
                    mailMessage.To.Insert(0, new MailAddress(_request.ToAddress));
                    mailMessage.Subject = _request.Subject;
                    mailMessage.Body = builder.ToString();
                    mailMessage.IsBodyHtml = true;

                    client.Send(mailMessage);

                    response.ResultCode = 0;
                    response.Message = "";
                    response.Friendly = "";
                }
            }
            catch (Exception ex)
            {
                response.ResultCode = 1;
                response.Message = ex.InnerException.ToString();
                response.Friendly = "Isn't this awkard. Your email could not be sent.";
            }

            return response;
        }

        public Response SendNotificationConfirmationOfApplication(Request _request,
            ConfirmationOfApplication _confirmationOfApplication)
        {
            Response response = new Response();
            confirmationOfApplication = _confirmationOfApplication;

            try
            {
                response = SendEmail(_request);
            }
            catch (Exception ex)
            {
                response.ResultCode = 1;
                response.Message = ex.InnerException.ToString();
                response.Friendly = "Isn't this awkard. Your email could not be sent.";
            }
            
            return response;
        }

        public async Task<Response> SendFSPResults(FSPResultViewModel _request)
        {
            Response response = new Response();
            FSPResult = _request.FspResult;

            try
            {
                response = SendEmail(_request.Request);
            }
            catch (Exception ex)
            {
                response.ResultCode = 1;
                response.Message = ex.InnerException.ToString();
                response.Friendly = "Isn't this awkard. Your results email could not be sent.";
            }

            return response;
        }
    }
}
