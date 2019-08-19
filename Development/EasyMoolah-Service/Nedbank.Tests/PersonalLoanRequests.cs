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

            var intentId  = "cc4f9f1f-fad2-41e3-b965-76127d750f87";
            var offerId = "605350";
            var lightToken = "n81Sf0wp2CXdSNtSvOqT";

            var result = personalLoanRequests.RegisterPersonalLoanOffer(intentId, offerId, lightToken);

            Assert.IsTrue(result != null);
        }   
    }
}

