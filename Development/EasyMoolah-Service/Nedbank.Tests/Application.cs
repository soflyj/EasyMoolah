using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class Application
    {       
        [TestMethod]
        public async Task InsertApplicationAccess()
        {
            //EasyMoolah.Domain.ApplicationAccess applicationAccess = new EasyMoolah.Domain.ApplicationAccess();

            var result = await EasyMoolah.Domain.ApplicationAccess.InsertApplicationAccess(new EasyMoolah.Model.ApplicationAccess()
            {
                ApplicationKey = 1050,
                MiniApplicationReference = "new",
                IPAddress = "192.168.1.1",
                StartDate = DateTime.Now,
                EndDate = null,
                IsActive = true,
                CreatedDate = DateTime.Now,
                ChangedDate = DateTime.Now
            });

            Assert.IsTrue(result != null);
        }
    }
}

