using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Nedbank.Tests
{
    [TestClass]
    public class CRUD
    {
        [TestMethod]
        public async Task InsertErrorLog()
        {
            EasyMoolah.Domain.LogsDomain logs = new EasyMoolah.Domain.LogsDomain();

            var result = await logs.InsertErrorLog(new EasyMoolah.Model.Logs.ErrorLog()
            {
                ApplicationKey = 1,
                ChangedDate = System.DateTime.Now,
                CreatedDate = System.DateTime.Now,
                EndDate = System.DateTime.Now,
                Error = "Test Error",
                ErrorDescription = "Test Error",
                Input = "Test Input",
                IsActive = true,
                ItemKey = 1,
                ItemType = "Test Item Type",
                Method = "Test Method",
                Output = "Test Input",
                StartDate = System.DateTime.Now
            });

            Assert.IsTrue(result != null);
        }

        [TestMethod]
        public async Task InsertApiLog()
        {
            EasyMoolah.Domain.LogsDomain logs = new EasyMoolah.Domain.LogsDomain();

            var result = await logs.InsertApiLog(new EasyMoolah.Model.Logs.ApiLog()
            {
                ApplicationKey = 0,
                ChangedDate = System.DateTime.Now,
                CreatedDate = System.DateTime.Now,
                EndDateTime = System.DateTime.Now,
                Request = "Test Input",
                IsActive = true,
                Method = "Test Method",
                Response = "Test Input",
                StartDateTime = System.DateTime.Now,
                ApiToken = "Test Token",
                Endpoint = "Test Endpoint",
                Http = "Test HTTP",
                Reference = "Test Reference"
            });

            Assert.IsTrue(result != null);
        }
    }
}

