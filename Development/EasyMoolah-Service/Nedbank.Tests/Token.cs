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
            var result = await requestToken.GetLightToken();

            Assert.IsTrue(result != null);
        }
    }
}

