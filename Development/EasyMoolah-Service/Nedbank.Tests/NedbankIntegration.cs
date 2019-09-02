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
        public async Task GetAuthorisationLink()
        {
            decimal loanAmount = 5000;

            EasyMoolah.Domain.Integration.NedbankIntegration nedbankIntegration = new EasyMoolah.Domain.Integration.NedbankIntegration();

            var result = nedbankIntegration.GetAuthorisationLink(loanAmount);

            Assert.IsTrue(result != null);
        }   
    }
}

