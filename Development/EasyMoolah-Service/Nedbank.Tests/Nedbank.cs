using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class Nedbank
    {
        [TestMethod]
        public async Task SaveNedbank()
        {
            var result = await EasyMoolah.Domain.NedbankDomain.UpdateNedbank(new EasyMoolah.Model.Nedbank()
            {
                ApplicationKey = 1050,
                LightToken = "light"
            });

            Assert.IsTrue(result != null);
        }

        [TestMethod]
        public async Task UpdateNedbank()
        {           
            var result = await EasyMoolah.Domain.NedbankDomain.UpdateNedbank(new EasyMoolah.Model.Nedbank()
            {
                ApplicationKey = 1050,                
                HeavyToken = "heavy"
            });

            Assert.IsTrue(result != null);
        }
    }
}

