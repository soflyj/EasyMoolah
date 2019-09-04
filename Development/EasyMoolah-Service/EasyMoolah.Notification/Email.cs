using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using EasyMoolah.Repository;
using Newtonsoft.Json;

namespace EasyMoolah.Notification
{
    public class Email
    {
        public async static Task<Result> SendEmail(EasyMoolah.Model.Notification.Request _request, string type)
        {
            var where = "";
            var woop = "";

            Result result = new Result();
            try
            {
                using (var mailMessage = new MailMessage())
                using (var client = new SmtpClient("mail.easymoolah.co.za", 25))
                {
                    where += "1";
                    // configure the client and send the message
                    client.UseDefaultCredentials = false;
                    client.Credentials = new NetworkCredential("info@easymoolah.co.za", "EasyMoolah@101");
                    client.EnableSsl = false;

                    client.Host = "mail.easymoolah.co.za";
                    client.Port = 25;
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;



                    where += "2";
                    // configure the mail message
                    mailMessage.From = new MailAddress(_request.fromAddress);
                    where += "3";
                    mailMessage.To.Insert(0, new MailAddress(_request.toAddress));
                    where += "4";
                    mailMessage.Subject = _request.subject;
                    where += "5";
                    mailMessage.Body = _request.body;
                    where += "6";
                    mailMessage.IsBodyHtml = true;
                    where += "7";
                    client.Send(mailMessage);
                    where += "8";
                    result.result = ResultEnum.OK;
                    result.Output = "Email Successfully Sent - " + type;
                    result.Error = "eish";
                }
            }
            catch (Exception ex)
            {
                woop = ex.Message.ToString();
                result.result = ResultEnum.Notification;
                result.Error = ex.InnerException.ToString();
                result.Output = "Email Unsuccessfully Sent - " + type;
            }

            InsertNotificationLog(new Model.Logs.NotificationLog()
            {
                ApplicationKey = _request.applicationKey,
                Body = _request.body,
                FromAddress = _request.fromAddress,
                ToAddress = _request.toAddress,
                SentDateTime = DateTime.Now,
                Subject = _request.subject,
                ToName = _request.toAddressFirstName + " " + _request.toAddressLastName,
                ToTitle = _request.toAddressTitle,
                IsActive = true,
                CreatedDate = DateTime.Now,
                ChangedDate = DateTime.Now,
                NotificationType = woop,
                Reason = where,
            });

            return result;
        }

        public static async Task<int> InsertNotificationLog(Model.Logs.NotificationLog _notificationLog)
        {
            AutoMapper.Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Model.Logs.NotificationLog, Repository.NotificationLog>();
            });

            using (var context = new EasyMoolahEntities())
            {
                var entity = Mapper.Map<Repository.NotificationLog>(_notificationLog);

                context.NotificationLogs.Add(entity);
                await context.SaveChangesAsync()
                    .ConfigureAwait(false);
                return entity.Key;
            }
        }
    }
}
