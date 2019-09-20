using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class PersonalLoanAuthorisation
    {
        [TestMethod]
        public async Task GetPersonalLoanAuthorisationURL()
        {
            EasyMoolah.Domain.Integration.PersonalLoanAuthorisationDomain personalLoanAuthorisation = new EasyMoolah.Domain.Integration.PersonalLoanAuthorisationDomain();

            var intentId = "bce41f38-3d5c-4013-b907-b3798041cd56";

            var lightToken = "qiODsg8l2ecYJb5VD0Jo";

            var result = personalLoanAuthorisation.GetPersonalLoanAuthorisationURL(intentId, lightToken, 1);

            Assert.IsTrue(result != null);
        }
    }
}

