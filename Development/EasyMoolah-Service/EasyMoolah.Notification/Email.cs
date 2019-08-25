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

        public static NotificationLog notificationLog = new NotificationLog();

        private readonly ProcessingResults processingResults;
        private AcceptOffer FSPResult;

        public async static Task<Model.Result> SendEmail()
        {
            Model.Result result = new Model.Result();
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
                    mailMessage.From = new MailAddress("info@easymoolah.co.za");
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

        public async static Task<Model.Result> ProcessingResults(ProcessingResults _request)
        {
            Model.Result result = new Model.Result();

            var borrower = EasyMoolah.Repository.CRUD.commonRepo.GetBorrowerByApplicationKey(_request.applicationKey);

            fromAddress = _request.fromAddress;
            toAddress = _request.toAddress;
            subject = _request.subject;

            //Populate email
            string firstName = borrower.FirstName + ' ' + borrower.LastName;
            string loanAmount = borrower.RequiredLoanAmount.ToString();
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
                if (result.resultCode == 0)
                {
                    EasyMoolah.Repository.CRUD.LogRepo.InsertNotification(new NotificationLog()
                    {
                        ApplicationKey = _request.applicationKey,
                        NotificationType = "email",
                        Reason = "Application was successful",
                        SentDateTime = DateTime.Now,
                        FromAddress = fromAddress,
                        ToAddress = toAddress,
                        ToName = toAddressName,
                        ToTitle = toAddressTitle,
                        Body = body,
                        Subject = subject
                    });
                }

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

        public async static Task<Model.Result> AcceptOffer(AcceptOffer _request)
        {
            var borrower = EasyMoolah.Repository.CRUD.commonRepo.GetBorrowerByApplicationKey(_request.applicationKey);

            Model.Result result = new Model.Result();
            fromAddress = _request.fromAddress;
            toAddress = _request.toAddress;
            subject = _request.subject;

            string firstName = borrower.FirstName + ' ' + borrower.LastName;
            string companyName = _request.providerName;
            string logo = _request.providerLogo;
            string website = _request.providerWebsite;
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
                builder.Replace("{{company-website}}", website);

                body = builder.ToString();

                result = await SendEmail();
                if (result.resultCode == 0)
                {
                    EasyMoolah.Repository.CRUD.LogRepo.InsertNotification(new NotificationLog()
                    {
                        ApplicationKey = _request.applicationKey,
                        NotificationType = "email",
                        Reason = "Accepted an Offer",
                        SentDateTime = DateTime.Now,
                        FromAddress = fromAddress,
                        ToAddress = toAddress,
                        ToName = toAddressName,
                        ToTitle = toAddressTitle,
                        Body = body,
                        Subject = subject
                    });
                }

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
