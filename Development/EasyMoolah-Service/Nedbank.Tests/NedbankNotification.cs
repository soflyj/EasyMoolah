using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class NedbankNotification
    {
        [TestMethod]
        public async Task SendAuthorisation()
        {
            decimal loanAmount = 5000;

            var result = await EasyMoolah.Notification.Nedbank.Nedbank.SendAuthorisation(new EasyMoolah.Model.Notification.Request() {
                applicationKey = 1,
                toAddress = "soflyj@gmail.com",
                toAddressFirstName = "Jarrod",
                toAddressLastName = "Ramsaroop",
                toAddressTitle = "Mr",
            }, 5000, "www.google.com");
           
            Assert.IsTrue(result.result == EasyMoolah.Model.ResultEnum.OK);
        }   
    }
}

