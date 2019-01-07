using System;
using System.Security.Cryptography.X509Certificates;
using Xunit;
using EasyMoolah.Model;
using EasyMoolah.Model.Notification;
using EasyMoolah.Notification;

namespace EasyMoolah.Test
{
    public class Notification
    {
        [Fact]
        public void SendEmail()
        {
            EasyMoolah.Model.Notification.Response response = new Response();

            try
            {
                EasyMoolah.Notification.Email email = new Email();

                EasyMoolah.Model.Notification.Request request = new Request()
                {
                    FromAddress = "jar.ninja.nas@gmail.com",
                    Subject = "test email",
                    Template = "test",
                    ToAddress = "soflyj@gmail.com",
                    ToAddressName = "soflyj",
                    ToAddressTitle = "Dr"
                };

                response = email.SendEmail(request);

            }
            catch (Exception ex)
            {
                response.ResultCode = 1;
            }

            Assert.Equal(0, response.ResultCode);
        }
    }
}
