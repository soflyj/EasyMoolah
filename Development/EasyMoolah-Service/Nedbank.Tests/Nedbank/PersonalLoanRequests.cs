using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class PersonalLoanRequests
    {
        [TestMethod]
        public async Task RegisterPersonalLoanOffer()
        {
            EasyMoolah.Domain.Integration.PersonalLoanRequests personalLoanRequests = new EasyMoolah.Domain.Integration.PersonalLoanRequests();

            var intentId  = "a3b544d7-c146-4292-b980-9ef7737e5274";
            var offerId = "605350";
            var lightToken = "LgNmRt0rB5pVZ1PvfR1g";

            var result = personalLoanRequests.RegisterPersonalLoanOffer(intentId, offerId, lightToken);

            Assert.IsTrue(result != null);
        }   
    }
}

