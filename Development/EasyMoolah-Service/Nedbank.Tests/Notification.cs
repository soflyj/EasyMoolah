using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class Notification
    {
        [TestMethod]
        public async Task send()
        {
            EasyMoolah.Notification.SMS sms = new EasyMoolah.Notification.SMS();

            sms.sendSMS();

            Assert.IsTrue(true);
        }

    }
}

