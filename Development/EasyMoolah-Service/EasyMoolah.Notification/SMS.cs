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
using Twilio;
using Twilio.Rest.Api.V2010.Account;
using Twilio.Types;

namespace EasyMoolah.Notification
{
    public class SMS
    {
        public void sendSMS()
        {
            try
            {
                TwilioClient.Init(
                       "AC3426b27d3ce993a1039bed401899ef7e", "1e41c38dc95e515a0e0932db07e5434d");

                MessageResource.Create(
                    to: new PhoneNumber("+27826426395"),
                    from: new PhoneNumber("+27836996366"),
                    body: "Ahoy from Twilio!");
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
