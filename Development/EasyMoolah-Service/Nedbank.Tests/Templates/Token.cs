using System;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class Token
    {
        [TestMethod]
        public async Task GetLightToken()
        {
            EasyMoolah.Domain.Integration.Token requestToken = new EasyMoolah.Domain.Integration.Token();
            var result = await requestToken.GetLightToken(1);

            Assert.IsTrue(result != null);
        }

        [TestMethod]
        public async Task GetHeavyToken()
        {
            EasyMoolah.Domain.Integration.Token requestToken = new EasyMoolah.Domain.Integration.Token();
            var code = "Fhk2TrJCMXlcdfTJf4wRxiJKkhD1Ba";

            var result = await requestToken.GetHeavyToken(code);

            Assert.IsTrue(result != null);
        }
    }
}

