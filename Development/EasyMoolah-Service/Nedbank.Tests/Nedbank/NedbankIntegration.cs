using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class NedbankIntegration
    {
        [TestMethod]
        public async Task GenerateAuthorisationLink()
        {
            decimal loanAmount = 5000;

            EasyMoolah.Domain.Integration.NedbankIntegrationDomain nedbankIntegration = new EasyMoolah.Domain.Integration.NedbankIntegrationDomain();

            var result = nedbankIntegration.GenerateAuthorisationLink(1, loanAmount);

            Assert.IsTrue(result != null);
        }   
    }
}

