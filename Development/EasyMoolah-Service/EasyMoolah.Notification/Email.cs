using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using Newtonsoft.Json;

namespace EasyMoolah.Notification
{
    public class Email
    {
        private static string fromAddress = "";
        private static string toAddress = "";
        private static string subject = "";
        private static string body = "";
        private static string emailType = "";
        private static string templateHTML = "";

        private readonly ConfirmationOfApplication confirmationOfApplication;
        private FSPResult FSPResult;
       
        public static Result SendEmail()
        {
            Result result = new Result();
            try
            {
                using (var mailMessage = new MailMessage())
                using (var client = new SmtpClient("mail.easymoolah.co.za", 465))
                {
                    // configure the client and send the message
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential("info@easymoolah.co.za", "EasyMoolah@101");
                    client.EnableSsl = true;                                     

                    // configure the mail message
                    mailMessage.From = new MailAddress(fromAddress);
                    mailMessage.To.Insert(0, new MailAddress(toAddress));
                    mailMessage.Subject = subject;
                    mailMessage.Body = body;
                    mailMessage.IsBodyHtml = true;

                    client.Send(mailMessage);

                    result.resultCode = 0;
                    result.output = "";
                    result.result = "Email Successfully Sent - " + emailType;
                }
            }
            catch (Exception ex)
            {
                result.resultCode = 401;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - " + emailType;
            }

            return result;
        }

        public static Result ConfirmationOfApplication(ConfirmationOfApplication _request)
        {
            Result result = new Result();
         fromAddress = _request.FromAddress;
         toAddress = _request.ToAddress;
         subject = _request.Subject;         

        string firstName = "Jarrod";
            string lastName = "Ramsaroop";
            string templateHTML = "";


            try
            {
                var builder = new StringBuilder();

                //What template to use
                if (_request.isSuccessful)
                {
                    templateHTML ="fsp_results-successful.html";
                }
                else
                {
                    templateHTML = "fsp_results-unsuccessful.html";
                }

                using (var reader = File.OpenText(templateHTML))
                {
                    builder.Append(reader.ReadToEnd());
                }
                //Completing the place holders
                builder.Replace("{{name}}", firstName + ' ' + lastName);
                builder.Replace("{{date}}", System.DateTime.Now.ToShortDateString());

                result = SendEmail();

                result.resultCode = 0;
                result.output = "";
                result.result = "Email Successfully Sent - " + _request.Template.ToString();
            }
            catch (Exception ex)
            {
                result.resultCode = 101;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - " + _request.Template.ToString() + "_SendNotificationConfirmationOfApplication";
            }
            
            return result;
        }

        //public Result SendFSPResults(FSPResult request)
        //{
        //    Result result = new Result();
        //    FSPResult = request.FspResult;

        //    try
        //    {
        //        result = SendEmail(request.Request);
        //    }
        //    catch (Exception ex)
        //    {
        //        result.resultCode = 401;
        //        result.error = ex.InnerException.ToString();
        //        result.errorFriendly = "Email Unsuccessfully Sent - " + request.Request.Template.ToString() + "_SendFSPResults";
        //    }

        //    return result;
        //}
    }
}
