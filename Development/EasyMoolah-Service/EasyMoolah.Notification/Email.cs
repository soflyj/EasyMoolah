using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using EasyMoolah.Repository;
using Newtonsoft.Json;

namespace EasyMoolah.Notification
{
    public class Email
    {
        private static string fromAddress = "";
        private static string toAddress = "";
        private static string toAddressTitle = "";
        private static string toAddressName = "";
        private static string subject = "";
        private static string body = "";
        private static string emailType = "";
        private static string templateHTML = "";

        public static AuditEmail auditEmail = new AuditEmail();

        private readonly ProcessingResults processingResults;
        private AcceptOffer FSPResult;

        public async static Task<Result> SendEmail()
        {
            Result result = new Result();
            try
            {
                using (var mailMessage = new MailMessage())
                using (var client = new SmtpClient("mail.easymoolah.co.za", 26))
                {
                    // configure the client and send the message
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential("info@easymoolah.co.za", "EasyMoolah@101");
                    //client.EnableSsl = true;

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

                    await EasyMoolah.Repository.CRUD.defaultRepo.InsertEmailAudit(new AuditEmail()
                    {
                        Body = body,
                        EmailType = "processingResults",
                        FromAddress = fromAddress,
                        SentDate = System.DateTime.Now,
                        Subject = subject,
                        ToAddress = toAddress,
                        ToAddressTitle = toAddressTitle,
                        ToAddressName = toAddressName
                    });
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

        public async static Task<Result> ProcessingResults(ProcessingResults _request)
        {
            Result result = new Result();
            fromAddress = _request.fromAddress;
            toAddress = _request.toAddress;
            subject = _request.subject;

            string firstName = "Jarrod";
            string loanAmount = "10000";
            string templateHTML = AppDomain.CurrentDomain.BaseDirectory + "Templates\\processing-results.html";

            try
            {
                var builder = new StringBuilder();               

                using (var reader = File.OpenText(templateHTML))
                {
                    builder.Append(reader.ReadToEnd());
                }
                //Completing the place holders
                builder.Replace("{{name}}", firstName);
                builder.Replace("{{date}}", System.DateTime.Now.ToShortDateString());
                builder.Replace("{{loan-amount}}", loanAmount);

                body = builder.ToString();

                result = await SendEmail();

                result.resultCode = 0;
                result.output = "";
                result.result = "Email Successfully Sent - ProcessingResults";

            }
            catch (Exception ex)
            {
                result.resultCode = 101;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - ProcessingResults";
            }

            return result;
        }

        public async static Task<Result> AcceptOffer(AcceptOffer _request)
        {
            Result result = new Result();
            fromAddress = _request.fromAddress;
            toAddress = _request.toAddress;
            subject = _request.subject;

            string firstName = "Jarrod";
            string companyName = "African Bank";
            string logo = "https://engine.fincheck.co.za/storage/images/partners/112/logo/jCo6CCi61ruBxNs4iDGuduxcpuKwllN1SIknda8i.jpeg";
            string templateHTML = AppDomain.CurrentDomain.BaseDirectory + "Templates\\call-me.html";

            try
            {
                var builder = new StringBuilder();

                using (var reader = File.OpenText(templateHTML))
                {
                    builder.Append(reader.ReadToEnd());
                }
                //Completing the place holders
                builder.Replace("{{name}}", firstName);
                builder.Replace("{{date}}", System.DateTime.Now.ToShortDateString());
                builder.Replace("{{company-name}}", companyName);
                builder.Replace("{{company-logo}}", logo);

                body = builder.ToString();

                result = await SendEmail();

                result.resultCode = 0;
                result.output = "";
                result.result = "Email Successfully Sent - AcceptOffer";
                                
            }
            catch (Exception ex)
            {
                result.resultCode = 101;
                result.error = ex.InnerException.ToString();
                result.errorFriendly = "Email Unsuccessfully Sent - AcceptOffer";
            }

            return result;
        }
    }
}
