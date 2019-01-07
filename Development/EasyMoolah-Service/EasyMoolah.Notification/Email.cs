using System;
using System.IO;
using System.Net;
using System.Net.Mail;
using System.Text;
using EasyMoolah.Model.Email;


namespace EasyMoolah.Notification
{
    public class Email
    {
        public Response sendEmail()
        {
            Response response = new Response();

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

                    using (var reader = File.OpenText("c:\\testemail.html"))
                    {
                        builder.Append(reader.ReadToEnd());
                    }

                    builder.Replace("{{name-tmp}}", "Bar!");

                    // configure the mail message
                    mailMessage.From = new MailAddress("jar.ninja.nas@gmail.com");
                    mailMessage.To.Insert(0, new MailAddress("soflyj@gmail.com"));
                    mailMessage.Subject = "Test Subject";
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
    }
}
