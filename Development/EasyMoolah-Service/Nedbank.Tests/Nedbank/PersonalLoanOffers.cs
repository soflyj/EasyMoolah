using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class PersonalLoanOffers
    {
        [TestMethod]
        public async Task GetPersonalLoanOffers()
        {
            EasyMoolah.Domain.Integration.PersonalLoanOffers personalLoanOffers = new EasyMoolah.Domain.Integration.PersonalLoanOffers();

            var loanAmount  = "5000";

            var heavyToken = "D23vbp3L4RHLvLaqJXtM";

            var result = personalLoanOffers.GetPersonalLoanOffers(loanAmount, heavyToken);

            Assert.IsTrue(result != null);
        }

        [TestMethod]
        public async Task GetPersonalLoanOfferDetails()
        {
            EasyMoolah.Domain.Integration.PersonalLoanOffers personalLoanOffers = new EasyMoolah.Domain.Integration.PersonalLoanOffers();

            var loanAmount = "5000";
            var loanTerm = "24";

            var heavyToken = "D23vbp3L4RHLvLaqJXtM";

            var result = personalLoanOffers.GetPersonalLoanOfferDetails(loanAmount, loanTerm, heavyToken);

            Assert.IsTrue(result != null);
        }

        [TestMethod]
        public async Task GetCustomerFinancialInformation()
        {
            EasyMoolah.Domain.Integration.PersonalLoanOffers personalLoanOffers = new EasyMoolah.Domain.Integration.PersonalLoanOffers();

            var offerId = "605350";

            var heavyToken = "D23vbp3L4RHLvLaqJXtM";

            var result = personalLoanOffers.GetCustomerFinancialInformation(offerId, heavyToken);

            Assert.IsTrue(result != null);
        }
    }
}

